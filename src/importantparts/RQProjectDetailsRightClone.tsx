// import { useState, useCallback, useContext, memo } from "react";
// import { rootContext } from "../Root";
// import { useDropzone } from "react-dropzone";
// import JSZip from "jszip";
// import {
//   RQh3Title,
//   RQFileUploadButton,
//   RQFileUploadContainer,
//   RQWarningText,
// } from "../style/RequestQuoteStyle";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   getMetadata,
//   deleteObject,
// } from "firebase/storage";
// import { storage } from "../config/Firebase";

// interface Props {
//   setUploadedFiles: (files: string[]) => void;
//   firstname: string | null;
//   lastname: string | null;
// }

// const STORAGE_LIMIT = 4 * 1024 * 1024 * 1024; // 4GB in bytes

// const RQProjectDetailsRight: React.FC<Props> = ({
//   setUploadedFiles,
//   firstname,
//   lastname,
// }) => {
//   const [uploadedFiles, setUploadedFilesState] = useState<File[]>([]);
//   const context = useContext(rootContext);

//   if (!context) {
//     throw new Error("rootContext must be used within a Root provider");
//   }

//   const { dispatching } = context;

//   const manageStorageLimit = async (newFileSize: number) => {
//     const storageRef = ref(storage, "uploads");
//     const fileList = await listAll(storageRef);
//     let totalSize = 0;
//     const files = [];

//     // Fetch all files and their metadata
//     for (const itemRef of fileList.items) {
//       const metadata = await getMetadata(itemRef);
//       totalSize += metadata.size;
//       files.push({
//         ref: itemRef,
//         size: metadata.size,
//         timeCreated: metadata.timeCreated,
//       });
//     }

//     // Sort files by creation time
//     files.sort(
//       (a, b) =>
//         new Date(a.timeCreated).getTime() - new Date(b.timeCreated).getTime()
//     );

//     // If the total size exceeds the limit, delete the oldest files
//     if (totalSize + newFileSize > STORAGE_LIMIT) {
//       let spaceNeeded = totalSize + newFileSize - STORAGE_LIMIT;

//       while (spaceNeeded > 0 && files.length > 0) {
//         const file = files.shift();
//         if (file) {
//           await deleteObject(file.ref);
//           spaceNeeded -= file.size;
//         }
//       }
//     }
//   };

//   const onDrop = useCallback(
//     async (acceptedFiles: File[]) => {
//       setUploadedFilesState(acceptedFiles);

//       const zip = new JSZip();
//       acceptedFiles.forEach((file) => {
//         zip.file(file.name, file);
//       });

//       const zipBlob = await zip.generateAsync({ type: "blob" });
//       const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
//       const zipFileName = `${firstname}_${lastname}_${timestamp}.zip`;
//       const zipFile = new File([zipBlob], zipFileName, {
//         type: "application/zip",
//       });

//       await manageStorageLimit(zipFile.size);

//       const fileRef = ref(storage, `uploads/${zipFileName}`);
//       await uploadBytes(fileRef, zipFile);
//       const fileUrl = await getDownloadURL(fileRef);
//       setUploadedFiles([fileUrl]);
//       dispatching("REQUEST_QUOTE_CHANGE", true);
//     },
//     [firstname, lastname, setUploadedFiles, dispatching]
//   );

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     multiple: true,
//     maxSize: 0.5 * 1024 * 1024 * 1024, // 0.5GB per file
//   });

//   return (
//     <>
//       <RQh3Title>
//         File Upload (Do not use special characters in file names)
//       </RQh3Title>
//       <RQFileUploadContainer {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p style={{ marginBottom: "20px", fontSize: "18px" }}>
//           Drag files to upload, or
//         </p>
//         <RQFileUploadButton>Files</RQFileUploadButton>
//         <p style={{ marginTop: "20px", fontSize: "18px" }}>
//           File size limit: 0.5GB per file
//         </p>
//         {uploadedFiles.length > 0 && (
//           <div>
//             <h4>Uploaded Files:</h4>
//             <ul>
//               {uploadedFiles.map((file, index) => (
//                 <li key={index}>{file.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </RQFileUploadContainer>
//       <RQWarningText>
//         Sometimes browsers can be testy. We recommend using the latest version
//         of Chrome for an optimal experience. Please be sure the required
//         information is complete and all files are attached then select Send All
//         Projects. PLEASE NOTE: Do NOT use special characters in your project
//         name and name of your attachments.
//       </RQWarningText>
//     </>
//   );
// };

// export default memo(RQProjectDetailsRight);