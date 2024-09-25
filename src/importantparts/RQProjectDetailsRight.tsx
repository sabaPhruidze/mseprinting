import { useState, useCallback, useContext, memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import axios from "axios"; // Import axios
import { rootContext } from "../Root";
import {
  RQh3Title,
  RQFileUploadButton,
  RQFileUploadContainer,
  RQWarningText,
} from "../style/RequestQuoteStyle";
import { Progress } from "antd"; // Import Ant Design Progress component

interface Props {
  setUploadedFiles: (files: string[]) => void;
  firstname: string | null;
  lastname: string | null;
}

const MAX_CHUNK_SIZE = 128 * 1024 * 1024; // 128MB chunk size for GoDaddy upload limit

const RQProjectDetailsRight: React.FC<Props> = ({
  setUploadedFiles,
  firstname,
  lastname,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadingText, setUploadingText] = useState("Uploading");
  const [progress, setProgress] = useState<number>(0); // State for tracking upload progress
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = context;

  useEffect(() => {
    if (uploading) {
      const interval = setInterval(() => {
        setUploadingText((prev) =>
          prev === "Uploading..." ? "Uploading.." : "Uploading..."
        );
      }, 500);

      return () => clearInterval(interval);
    }
  }, [uploading]);

  // Split a file into chunks if it exceeds the max chunk size
  const splitFileIntoChunks = (file: File): File[] => {
    const chunks: File[] = [];
    let currentChunk = 0;

    while (currentChunk * MAX_CHUNK_SIZE < file.size) {
      const chunk = file.slice(
        currentChunk * MAX_CHUNK_SIZE,
        (currentChunk + 1) * MAX_CHUNK_SIZE
      );
      chunks.push(
        new File([chunk], `${file.name}.part_${currentChunk + 1}`, {
          type: file.type,
        })
      );
      currentChunk++;
    }

    return chunks;
  };

  const handleUpload = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setUploading(true);
      setProgress(0); // Reset progress

      const zip = new JSZip();

      for (let file of acceptedFiles) {
        if (file.size > MAX_CHUNK_SIZE) {
          const fileChunks = splitFileIntoChunks(file);
          fileChunks.forEach((chunk) => {
            zip.file(chunk.name, chunk);
          });
        } else {
          zip.file(file.name, file);
        }
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
      const zipFileName = `${firstname}_${lastname}_${timestamp}.zip`;
      const zipFile = new File([zipBlob], zipFileName, {
        type: "application/zip",
      });

      const formData = new FormData();
      formData.append("file", zipFile);

      try {
        const response = await axios.post(
          "https://mseprinting.com/RequestQuote/upload.php",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
              // Fallback to using loaded amount only if total is undefined
              const total = progressEvent.total || zipFile.size;
              const percentComplete = Math.round(
                (progressEvent.loaded * 100) / total
              );
              setProgress(percentComplete);
            },
          }
        );

        console.log("File uploaded successfully:", response.data);
        setUploadedFiles([response.data.fileUrl]);
        dispatching("REQUEST_QUOTE_CHANGE", true);
      } catch (error) {
        console.error("Error during file upload:", error);
      } finally {
        setUploading(false);
        setUploadingText("Uploading");
      }
    },
    [firstname, lastname, setUploadedFiles, dispatching]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      handleUpload(acceptedFiles);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 1 * 1024 * 1024 * 1024, // 1GB per file
  });

  return (
    <>
      <RQh3Title>
        File Upload (Do not use special characters in file names)
      </RQh3Title>
      <RQFileUploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          Drag files to upload, or
        </p>
        <RQFileUploadButton disabled={uploading}>
          {files.length === 0
            ? "Files"
            : uploading
            ? uploadingText
            : "Uploaded"}
        </RQFileUploadButton>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          File size limit: 1GB per file
        </p>
        {uploading && (
          <div style={{ width: "100%", marginTop: "20px" }}>
            <Progress
              percent={progress}
              status={uploading ? "active" : "normal"}
            />
          </div>
        )}
        {files.length > 0 && (
          <div>
            <h4>Uploaded Files:</h4>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </RQFileUploadContainer>
      <RQWarningText>
        File uploads may take a couple of minutes depending on the size of your
        files and your internet connection. We recommend using the latest
        version of Chrome for the best experience. Ensure all required
        information is filled out and all files are fully uploaded before
        clicking the Submit button. Do not close or refresh the page during the
        upload process. PLEASE NOTE: Avoid using special characters in your
        project name or file names.
      </RQWarningText>
    </>
  );
};

export default memo(RQProjectDetailsRight);
