import { useState, useCallback, memo } from "react";
import { useDropzone } from "react-dropzone";
import {
  RQh3Title,
  RQFileUploadButton,
  RQFileUploadContainer,
  RQWarningText,
} from "../style/RequestQuoteStyle";
import { Progress } from "antd";
import JSZip from "jszip";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/Firebase";

interface Props {
  setUploadedFiles: (newFiles: string[]) => void;
  firstname: string | null;
  lastname: string | null;
}

const RQProjectDetailsRight: React.FC<Props> = ({
  setUploadedFiles,
  firstname,
  lastname,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [uploadFinished, setUploadFinished] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!uploading && !uploadFinished) {
        setFiles((prev) => [...prev, ...acceptedFiles]);
      }
    },
    [uploading, uploadFinished]
  );

  const handleRemoveFile = useCallback((fileIndex: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 1 * 1024 * 1024 * 1024, // 1GB per file
    disabled: uploading || uploadFinished,
  });

  const handleUpload = useCallback(async () => {
    if (files.length === 0 || uploading || uploadFinished) return;

    setUploading(true);
    setProgress(0);
    setUploadFinished(false);

    try {
      const zip = new JSZip();
      for (let file of files) {
        zip.file(file.name, file);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
      const zipFileName =
        firstname && lastname
          ? `${firstname}_${lastname}_${timestamp}.zip`
          : `RequestQuote_${timestamp}.zip`;
      const zipFile = new File([zipBlob], zipFileName, {
        type: "application/zip",
      });

      const storageRef = ref(storage, `RequestQuoteFiles/${zipFileName}`);
      const uploadTask = uploadBytesResumable(storageRef, zipFile);

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
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadedFiles([downloadURL]);
          setUploading(false);
          setUploadFinished(true);
        }
      );
    } catch (error) {
      console.error("Error creating/uploading zip:", error);
      setUploading(false);
    }
  }, [files, firstname, lastname, setUploadedFiles, uploading, uploadFinished]);

  const showAddInstructions = !uploadFinished && !uploading;

  return (
    <>
      <RQh3Title>
        File Upload (Do not use special characters in file names)
      </RQh3Title>
      <RQFileUploadContainer>
        {showAddInstructions && (
          <>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              Drag files to upload, or
            </p>
            <div {...getRootProps()} style={{ display: "inline-block" }}>
              <input {...getInputProps()} />
              <RQFileUploadButton type="button" disabled={uploading}>
                Add Files
              </RQFileUploadButton>
            </div>
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              File size limit: 1GB per file
            </p>
          </>
        )}

        {files.length > 0 && !uploading && !uploadFinished && (
          <div style={{ marginTop: "20px" }}>
            <h4>Selected Files:</h4>
            <ul>
              {files.map((file, index) => (
                <li
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {file.name}
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    style={{
                      marginLeft: "10px",
                      color: "red",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "800",
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {files.length > 0 && !uploading && !uploadFinished && (
          <div style={{ marginTop: "20px" }}>
            <RQFileUploadButton type="button" onClick={handleUpload}>
              Upload
            </RQFileUploadButton>
          </div>
        )}

        {uploading && (
          <div style={{ width: "100%", marginTop: "20px" }}>
            <Progress
              percent={progress}
              status={uploading ? "active" : "normal"}
            />
            <p>Uploading... Please wait.</p>
          </div>
        )}

        {uploadFinished && (
          <div style={{ marginTop: "20px", color: "green" }}>
            <strong>Upload Complete!</strong> Your files have been uploaded.
          </div>
        )}
      </RQFileUploadContainer>
      <RQWarningText>
        Choose all the files first using the "Add Files" button. Only when you
        are ready, click "Upload" to start uploading all files as a single ZIP.
        After uploading, you cannot add more files until you submit and come
        back to this page. It may take a few minutes depending on file size and
        internet speed. Do not refresh or close the page during the upload.
      </RQWarningText>
    </>
  );
};

export default memo(RQProjectDetailsRight);
