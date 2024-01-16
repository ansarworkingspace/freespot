


// import fs from 'fs';
// import asyncHandler from 'express-async-handler';
// import { PDFDocument } from 'pdf-lib';


// const convertPdfToDocx = asyncHandler(async (req, res) => {
//   if (!req.file) {
//     res.status(400).send("File is empty");
//     return;
//   }


//   const pdfFile = req.file; // PDF file uploaded by the user

//   const existingPdfBytes = fs.readFileSync(pdfFile.path);
//   const pdfDoc = await PDFDocument.load(existingPdfBytes);

// console.log(pdfDoc)

//   // console.log("REQ.FILE.PATH: "+req.file.path)
 
// });

// export { uploadPDFfile  };

// const convertPdfToWord =asyncHandler((req,res)=>{

// // in this code you must find the pdf file from root uploads dir and 
// //convert to word 
// //pass response the fronend expected way 


// })


import fs from 'fs';
import asyncHandler from 'express-async-handler';
import { convertPdfToDocx } from '../utils/pdfToDocxConverter.js';

const uploadPDFfile = asyncHandler(async (req, res) => {
 //take the pdf file and return the filepath and sucess msg

// Check if a file is provided
if (!req.file) {
  res.status(400).json({ message: 'No PDF file provided' });
  return;
}

// Process the file and return the filepath and success message
const filename = req.file.filename;
res.status(200).json({ filename, message: 'PDF file uploaded successfully' });

});



//PERFECLY WORKING  CODE 
// const convertPdfToWord = asyncHandler(async (req, res) => {
//   const { filename } = req.body;

//   if (!filename) {
//       res.status(400).json({ message: 'No file path provided' });
//       return;
//   }

//   try {
      

//       // Call the PDF to DOCX converter
//      await convertPdfToDocx('uploads', filename);

//       // Send a success response or handle further logic as needed
//       res.status(200).json({ message: 'Conversion completed successfully' });
//   } catch (error) {
//       console.error('Error converting PDF to Word:', error);
//       res.status(500).json({ message: 'Error converting PDF to Word' });
//   }
// });








const convertPdfToWord = asyncHandler(async (req, res) => {
  const { filename } = req.body;

  if (!filename) {
      res.status(400).json({ message: 'No file path provided' });
      return;
  }

  try {
    // Call the PDF to DOCX converter and get the buffer
    await convertPdfToDocx('uploads', filename);


    res.status(200).json({ message: 'Conversion completed successfully' });

  } catch (error) {
    console.error('Error converting PDF to Word:', error);
    res.status(500).json({ message: 'Error converting PDF to Word' });
  }
});








export { uploadPDFfile  , convertPdfToWord};