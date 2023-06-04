import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph } from 'docxtemplater';
import axios from 'axios';

const FileConv = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const convertToDOCX = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('http://localhost:3000/FileConv', formData, {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const pdfData = response.data;
        const pdfArray = new Uint8Array(pdfData);
        const pdfBlob = new Blob([pdfArray], { type: 'application/pdf' });

        const reader = new FileReader();
        reader.onload = function () {
          const buffer = reader.result;
          const doc = new Document(buffer);

          const docxBlob = Packer.toBlob(doc);
          saveAs(docxBlob, 'converted.docx');
        };

        reader.readAsArrayBuffer(pdfBlob);
      } catch (error) {
        console.error('Error converting PDF to DOCX:', error);
      }
    }
  };

  return (
    <>
   
    <div className="fileContainer-outer">
        <div id="image-container"> 
          <label for="png">Select File:
          <div className="FileSelect">
          <input type="file" id="png" accept="application/pdf" onChange={handleFileChange}/>
        </div>
        </label>
        <button className="FileButton" onClick={convertToDOCX} disabled={!selectedFile}>
          Convert 
        </button>
        </div> 
       
    </div>
    </>
  )
}

export default FileConv
