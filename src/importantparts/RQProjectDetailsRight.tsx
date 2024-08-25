import { useState, useCallback, useContext, memo } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import { rootContext } from "../Root";
import {
  RQh3Title,
  RQFileUploadButton,
  RQFileUploadContainer,
  RQWarningText,
} from "../style/RequestQuoteStyle";

interface Props {
  setUploadedFiles: (files: string[]) => void;
  firstname: string | null;
  lastname: string | null;
}

const RQProjectDetailsRight: React.FC<Props> = ({
  setUploadedFiles,
  firstname,
  lastname,
}) => {
  const [files, setFiles] = useState<File[]>([]); // Store files locally
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = context;

  const handleUpload = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const zip = new JSZip();
      acceptedFiles.forEach((file) => {
        zip.file(file.name, file);
      });

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
      const zipFileName = `${firstname}_${lastname}_${timestamp}.zip`;
      const zipFile = new File([zipBlob], zipFileName, {
        type: "application/zip",
      });

      const formData = new FormData();
      formData.append("file", zipFile);

      try {
        const response = await fetch(
          "https://mseprinting.com/RequestQuote/upload.php",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const { fileUrl } = await response.json();
          setUploadedFiles([fileUrl]); // Update the uploaded file URL in parent component
          dispatching("REQUEST_QUOTE_CHANGE", true);
          console.log("File uploaded successfully:", zipFileName);
        } else {
          console.error("File upload failed:", await response.text());
        }
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    },
    [firstname, lastname, setUploadedFiles, dispatching]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      handleUpload(acceptedFiles); // Automatically upload the files
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 0.5 * 1024 * 1024 * 1024, // 0.5GB per file
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
        <RQFileUploadButton>Files</RQFileUploadButton>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          File size limit: 0.5GB per file
        </p>
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
        Sometimes browsers can be testy. We recommend using the latest version
        of Chrome for an optimal experience. Please be sure the required
        information is complete and all files are attached then select Send All
        Projects. PLEASE NOTE: Do NOT use special characters in your project
        name and name of your attachments.
      </RQWarningText>
    </>
  );
};

export default memo(RQProjectDetailsRight);
