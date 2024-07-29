import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  RQh3Title,
  RQFileUploadButton,
  RQFileUploadContainer,
  RQWarningText,
} from "../style/RequestQuoteStyle";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/Firebase";

interface Props {
  setUploadedFiles: (files: string[]) => void;
}

export default function RQProjectDetailsRight({ setUploadedFiles }: Props) {
  const [uploadedFiles, setUploadedFilesState] = useState<File[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setUploadedFilesState(acceptedFiles);
      const uploadPromises = acceptedFiles.map(async (file) => {
        const fileRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(fileRef, file);
        const fileUrl = await getDownloadURL(fileRef);
        return fileUrl;
      });

      const urls = await Promise.all(uploadPromises);
      setUploadedFiles(urls);
      console.log("Uploaded file URLs:", urls);
    },
    [setUploadedFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 0.5 * 1024 * 1024 * 1024, // 0.5GB
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
          File size limit: 0.5GB
        </p>
        {uploadedFiles.length > 0 && (
          <div>
            <h4>Uploaded Files:</h4>
            <ul>
              {uploadedFiles.map((file, index) => (
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
}
