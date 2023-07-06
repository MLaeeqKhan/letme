import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import JSZip from 'jszip';
// Load the PDF fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const FileConv = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const convertToPdf = () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      const buffer = event.target.result;

      // Load the DOCX file
      const zip = new JSZip(buffer);
      const doc = new Docxtemplater().loadZip(zip);

      try {
        // Render the document
        doc.render();
      } catch (error) {
        console.log('Error rendering document:', error);
        return;
      }

      // Generate the updated DOCX file
      const updatedBuffer = doc.getZip().generate({ type: 'arraybuffer' });

      // Convert the updated DOCX file to PDF
      const pdfBuffer = convertDocxToPdf(updatedBuffer);

      // Download the PDF file
      downloadPdfFile(pdfBuffer);
    };

    reader.readAsArrayBuffer(file);
  };

  const convertDocxToPdf = (docxBuffer) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const arrayBuffer = event.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);

        pdfMake
          .createPdf({ content: [{ bytes: uint8Array }] })
          .getBuffer((buffer) => {
            resolve(buffer);
          });
      };

      reader.onerror = function (event) {
        reject(event.target.error);
      };

      reader.readAsArrayBuffer(docxBuffer);
    });
  };

  const downloadPdfFile = (pdfBuffer) => {
    const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'converted.pdf';
    link.click();
  };
  return (
    <>
   
    <div className="fileContainer-outer">
        <div id="image-container"> 
          <label for="png">Select File:
          <div className="FileSelect">
          <input type="file" id="png"  onChange={handleFileChange}/>
        </div>
        </label>
        <button className="FileButton" onClick={convertToPdf} >
          Convert to Pdf 
        </button>
        </div> 
       
    </div>
    </>
  )
}

export default FileConv
