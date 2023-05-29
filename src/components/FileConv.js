import React from 'react';
import ConvertorImg from '../images/dragDrop.webp'

const FileConv = () => {
  function convertAndDownloadPNGtoJPG(){

  }

  function convertAndDownloadJPGtoPNG(){

  }

  return (
    <>
   
    <div className="fileContainer-outer">
        <div id="image-container"> 
          <label for="png">Select File:
          <div className="FileSelect">
          <input type="file" id="png" accept="image/*" />
        </div>
        </label>
        <button className="FileButton" onclick={convertAndDownloadPNGtoJPG}>
          Convert to JPG and Download
        </button>
        <button className="FileButton" onclick={convertAndDownloadJPGtoPNG}>
          Convert to PNG and Download
        </button>
        </div> 
        <a
          id="download-link-jpg"
          className="button"
          href=""
          download="converted.JPG"
        ></a>

        <a
          id="download-link-png"
          className="button"
          href=""
          download="converted.png"
        ></a>
    </div>

    <style>
      {`
     
      `}
    </style>
    </>
  )
}

export default FileConv
