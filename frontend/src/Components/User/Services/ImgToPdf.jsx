import React from 'react'
import './scss.css'

const ImgToPdf = () => {
  return (
    <div className='activeComDiv'>
        <h3>DO IMAGE 📥 TO PDF 📄</h3>
        <div className='imgtopdf'>
        <label htmlFor="fileInput" className="fileInputLabel">
          Choose Image
        </label>
        <input type="file" id="fileInput" className="fileInput" />
        <button className="downloadButton">Download</button>
        </div>
    </div>
  )
}

export default ImgToPdf
