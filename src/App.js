import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploading(true);
      // Simulate an upload delay
      setTimeout(() => {
        setUploading(false); // Stop uploading message after a short delay
      }, 1000);
    }
  };

  const handleDownload = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    // Create a link to download the original file
    const url = URL.createObjectURL(file);

    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.name); // Use the original file name for download

    // Append to the body and trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <h1>Upload and Download Excel File</h1>
      <div className="upload-box">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          id="fileInput"
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput" className="file-label">
          {file ? file.name : "Click here to upload an Excel file"}
        </label>
        <button className="upload-button" onClick={handleDownload}>
          Download Uploaded File
        </button>
      </div>
      {uploading && <p className="upload-message">File uploading...</p>}
    </div>
  );
}

export default App;
