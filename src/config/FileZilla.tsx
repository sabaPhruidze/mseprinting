import express, { Request, Response } from "express";
import multer from "multer"; // For handling file uploads
import ftp from "basic-ftp";
import fs from "fs";
import path from "path";

const app = express();
const upload = multer({ dest: "uploads/" }); // Temporary directory for uploaded files

// FTP Connection details (replace with your own)
const ftpConfig = {
  host: "198.12.246.220",
  user: "kxx9wr38stkf",
  password: "aO@ADy6HtSNK",
  port: 21,
};

async function uploadToFTP(filePath: string, fileName: string): Promise<void> {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access(ftpConfig);
    await client.uploadFrom(filePath, fileName);
    console.log(`File uploaded successfully: ${fileName}`);
  } catch (err) {
    console.error(err);
  }
  client.close();
}

// Handle file upload
app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const file = req.file;

    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    const filePath = path.join(__dirname, file.path);
    const fileName = file.originalname;

    // Upload file to FTP
    await uploadToFTP(filePath, fileName);

    // Clean up the temporary file after uploading
    fs.unlink(filePath, (err: NodeJS.ErrnoException | null) => {
      if (err) console.error(err);
    });

    res.send("File uploaded successfully");
  }
);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
