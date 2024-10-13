import { useState, useCallback, useContext, memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/Firebase";
import { rootContext } from "../Root";
import {
  RQh3Title,
  RQFileUploadButton,
  RQFileUploadContainer,
  RQWarningText,
} from "../style/RequestQuoteStyle";
import { Progress } from "antd"; // Import Ant Design Progress component
import JSZip from "jszip";

interface Props {
  setUploadedFiles: (files: string[]) => void;
  firstname: string | null;
  lastname: string | null;
}

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

  const uploadToFirebase = useCallback(async (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const storageRef = ref(storage, `OrderedFiles/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressPercentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercentage);
        },
        (error) => {
          console.error("Error uploading file:", error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  }, []);

  const handleUpload = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setUploading(true);
      setProgress(0); // Reset progress
      setUploadCount({ uploading: acceptedFiles.length, uploaded: 0 });

      const zip = new JSZip();

      for (let file of acceptedFiles) {
        zip.file(file.name, file);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
      const zipFileName =
        firstname && lastname
          ? `${firstname}_${lastname}.zip`
          : `OrderedFiles_${timestamp}.zip`;
      const zipFile = new File([zipBlob], zipFileName, {
        type: "application/zip",
      });

      try {
        const downloadURL = await uploadToFirebase(zipFile);
        setUploadedFiles([downloadURL]);
        dispatching("REQUEST_QUOTE_CHANGE", true);
        setUploadingText("Uploaded");
      } catch (error) {
        console.error("Error during file upload:", error);
      } finally {
        setUploading(false);
        setUploadingText("Uploading");
      }
    },
    [firstname, lastname, setUploadedFiles, uploadToFirebase, dispatching]
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
