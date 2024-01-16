// import React,{useState} from 'react'
// import './scss.css'
// import axios from 'axios';

// const pdfToWord = () => {
//   return (
//     <div className='activeComDiv'>
//         <h3>DO PDF 📥 TO WORD 📄</h3>
//         <div className='imgtopdf'>
//         <label htmlFor="fileInput" className="fileInputLabel">
//           Choose Image
//         </label>
//         <input type="file" id="fileInput" className="fileInput" />
//         <button className="downloadButton">Download</button>
//         </div>
//     </div>
//   )
// }

// export default pdfToWord



// import React,{useState} from 'react'
// import './scss.css'
// import axios from 'axios';
// import {toast}  from 'react-toastify'
// import { saveAs } from 'file-saver';


// const pdfToWord = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDownload = async () => {
//     if (!selectedFile) {
//       console.error('Please select a PDF file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('pdfFile', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/convertPdfToWord', formData, {
//         responseType: 'blob', // Use 'blob' to handle binary data directly
//       });

//       // Create a link element to trigger the download
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(response.data); // Use URL.createObjectURL
//       link.setAttribute('download', 'converted.docx');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       toast.success("pdf to word file Downloaded")
//     } catch (error) {
//       console.error('Error converting PDF to Word:', error);
//       toast.error(error.message); // Display a user-friendly message
//     }
//   };

//   return (
//     <div className='activeComDiv'>
//         <h3>DO PDF 📥 TO WORD 📄</h3>
//         <div className='imgtopdf'>
//         <label htmlFor="fileInput" className="fileInputLabel">
//         {selectedFile ? selectedFile.name : 'Choose PDF File'}
//         </label>
//         <input type="file" id="fileInput" className="fileInput" onChange={handleFileChange} accept=".pdf" />
//         <button className="downloadButton"  onClick={handleDownload}>Download</button>
//         </div>
//     </div>
//   )
// }

// export default pdfToWord





// // frontend/pdfToWord.js
// import React, { useState } from 'react';
// import './scss.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PdfToWord = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleDownload = async () => {
//     if (!selectedFile) {
//       console.error('Please select a PDF file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('pdfFile', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/convertPdfToWord', formData)

//       toast.success('PDF to Word file Downloaded');
//     } catch (error) {
//       console.error('Error converting PDF to Word:', error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className='activeComDiv'>
//       <h3>DO PDF 📥 TO WORD 📄</h3>
//       <div className='imgtopdf'>
//         <label htmlFor='fileInput' className='fileInputLabel'>
//           {selectedFile ? selectedFile.name : 'Choose PDF File'}
//         </label>
//         <input type='file' id='fileInput' className='fileInput' onChange={handleFileChange} accept='.pdf' />
//         <button className='downloadButton' onClick={handleDownload}>
//           Download
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfToWord;


// // frontend/pdfToWord.js
// import React, { useState } from 'react';
// import './scss.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PdfToWord = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [button,setButton] = useState(false)
//   const [filePath,setFilePath]= useState(null)

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };


// const handleDownload =async()=>{
// try {
//   //write request with filepath of that pdf file , this request must perform in backend 
//   //to convert the pdf file to word file and  
//   //download the WORD file

//   const res= await axios.post('http://localhost:5000/api/users/convertPdfToWord',filePath)



// } catch (error) {
  
// }
// }





//   const handleUpload = async () => {
//     if (!selectedFile) {
//       console.error('Please select a PDF file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('pdfFile', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/upload',formData)

//       if(response){
//         toast.success('PDF to Word file Downloaded');
//         setButton(true)
//         setFilePath(response.data.filePath)
//       }

  
//     } catch (error) {
//       console.error('Error converting PDF to Word:', error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className='activeComDiv'>
//       <h3>DO PDF 📥 TO WORD 📄</h3>
//       <div className='imgtopdf'>
//         <label htmlFor='fileInput' className='fileInputLabel'>
//           {selectedFile ? selectedFile.name : 'Choose PDF File'}
//         </label>
//         <input type='file' id='fileInput' className='fileInput' onChange={handleFileChange} accept='.pdf' />
//         {!button ? (
//   <button className='downloadButton' onClick={handleUpload}>
//     Upload
//   </button>
// ) : (
//   <button className='downloadButton' onClick={handleDownload}>
//     Download
//   </button>
// )}

//       </div>
//     </div>
//   );
// };

// export default PdfToWord;






// frontend/pdfToWord.js
import React, { useState,useEffect } from 'react';
import './scss.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const PdfToWord = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [button, setButton] = useState(false);
  const [filename, setFilename] = useState(null);
  const [loading, setLoading] = useState(false);







  useEffect(() => {
    // This effect runs after the component re-renders
    console.log(`File Path Updated: ${filename}`);
  }, [filename]); // Only re-run the effect if filePath changes






  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  //perfectly working code:
  //  const handleDownload = async () => {
  //   try {
  //     setLoading(true);

  //     // Write a request with the filepath of that pdf file.
  //     // This request must be performed in the backend
  //     // to convert the pdf file to a word file and download the WORD file.
  //     const res = await axios.post('http://localhost:5000/api/users/convertPdfToWord', { filename });



  //     toast.success("download sucssesfuly")
      
  //   } catch (error) {
  //     console.error('Error downloading Word file:', error);
  //     toast.error('Error downloading Word file');
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  const handleDownload = async () => {
    try {
      setLoading(true);
  
   await axios.post('http://localhost:5000/api/users/convertPdfToWord', { filename }, { responseType: 'arraybuffer' });
  

// // Create a download link and trigger the download
const downloadLink = document.createElement('a');
downloadLink.href = `http://localhost:5000/api/users/uploads/${filename}.docx`;
downloadLink.download = 'CONVERTED.docx'; // Set the desired filename
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);






      toast.success("Download successful");
    } catch (error) {
      console.error('Error downloading Word file:', error);
      toast.error('Error downloading Word file');
    } finally {
      setLoading(false);
    }
  };





  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Please select a PDF file');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/api/users/uploadPDFfile', formData);

      if (response) {
        toast.success('PDF to Word file Downloaded');
        setButton(true);
        setFilename(response.data.filename);
        
      }
    } catch (error) {
      console.error('Error converting PDF to Word:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='activeComDiv'>
      <h3>DO PDF 📥 TO WORD 📄</h3>
      <div className='imgtopdf'>
        <label htmlFor='fileInput' className='fileInputLabel'>
          {selectedFile ? selectedFile.name : 'Choose PDF File'}
        </label>
        <input type='file' id='fileInput' className='fileInput' onChange={handleFileChange} accept='.pdf' />
        {!button ? (
          <button className='downloadButton' onClick={handleUpload} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        ) : (
          <button className='downloadButton' onClick={handleDownload} disabled={loading}>
            {loading ? 'Downloading...' : 'Download'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfToWord;
