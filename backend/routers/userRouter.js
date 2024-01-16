import express from 'express'
import { uploadPDFfile,convertPdfToWord} from '../controllers/userController.js'
import multer from 'multer';

const router = express.Router()


//MULTER SET UP
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage });

router.use('/uploads', express.static('uploads'));

//upload pdf file in root uploads dir and return the filepath and sucsses message
router.post('/uploadPDFfile', upload.single('pdfFile'), uploadPDFfile);
router.post('/convertPdfToWord',convertPdfToWord);

export default router