import { useState, useCallback, useContext, memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
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

const MAX_CHUNK_SIZE = 128 * 1024 * 1024; // 128MB chunk size for large file splitting

const SendFileDetailsRight: React.FC<Props> = ({
  setUploadedFiles,
  firstname,
  lastname,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadingText, setUploadingText] = useState("Uploading");
  const [progress, setProgress] = useState<number>(0); // State for tracking upload progress
  const [uploadCount, setUploadCount] = useState({ uploading: 0, uploaded: 0 });
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = context;

  useEffect(() => {
    if (uploading) {
      const interval = setInterval(() => {
        setUploadingText((prev) =>
          prev === "Uploading..."
            ? "Uploading."
            : prev === "Uploading.."
            ? "Uploading..."
            : "Uploading.."
        );
      }, 500);

      return () => clearInterval(interval);
    }
  }, [uploading]);

  const uploadChunkToGoDaddy = useCallback(
    async (chunk: File, folderName: string) => {
      return new Promise<string>((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("folder", folderName); // Send folder name to server

        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://mseprinting.com/SendFile/upload_sendfile.php"
        );

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round(
              (event.loaded * 100) / event.total
            );
            setProgress(percentComplete);
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response.fileUrl);
          } else {
            reject(new Error("File upload failed: " + xhr.responseText));
          }
        };

        xhr.onerror = () => {
          reject(new Error("Error during file upload: " + xhr.responseText));
        };

        xhr.send(formData);
      });
    },
    []
  );

  const handleUpload = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setUploading(true);
      setProgress(0); // Reset progress
      setUploadCount({ uploading: acceptedFiles.length, uploaded: 0 });

      try {
        const customerFolderName = `customer_${firstname}_${lastname}_${Date.now()}`;

        for (let file of acceptedFiles) {
          const folderName = `${customerFolderName}/upload_${
            file.name
          }_${Date.now()}`; // Create a unique folder name for each file inside the customer folder

          if (file.size > MAX_CHUNK_SIZE) {
            const fileChunks = splitFileIntoChunks(file);
            for (let chunk of fileChunks) {
              await uploadChunkToGoDaddy(chunk, folderName);
            }
          } else {
            await uploadChunkToGoDaddy(file, folderName);
          }
          setUploadCount((prev) => ({
            uploading: prev.uploading - 1,
            uploaded: prev.uploaded + 1,
          }));
        }
        setUploadedFiles(acceptedFiles.map((file) => file.name));
        dispatching("REQUEST_QUOTE_CHANGE", true);
        setUploadingText("Uploaded");
      } catch (error) {
        console.error("Error during file upload:", error);
      } finally {
        setUploading(false);
        setUploadingText("Uploading");
      }
    },
    [firstname, lastname, setUploadedFiles, uploadChunkToGoDaddy, dispatching]
  );

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
            <p>{`Uploading: ${uploadCount.uploading} files, Uploaded: ${uploadCount.uploaded} files`}</p>
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

export default memo(SendFileDetailsRight);
