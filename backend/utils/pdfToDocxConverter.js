// pdfToDocxConverter.js

import fs from 'fs';
import pdf from '@cyber2024/pdf-parse-fixed';
import { Document, Packer, Paragraph } from 'docx';

const getTextToArr = (text) => text.split('\n\n');

const getDocxToText = async (dataBuffer) => {
    try {
        const result = await pdf(dataBuffer);
        return result.text;
    } catch (reason) {
        console.log('.doc or .docx file has some problems');
        console.error(`reason: ${reason}`);
        throw reason;
    }
};

const changeTextToDocxFile = async (textArr, filePath, fileName) => {
    console.log('Now converting file ...');
    const sectionsArr = [];

    // Skip the first element as it might be empty
    for (let i = 1; i < textArr.length; i++) {
        sectionsArr.push({
            children: [
                new Paragraph({
                    text: textArr[i],
                }),
            ],
        });
    }

    const docx = new Document({
        sections: sectionsArr,
    });

    try {
        const buffer = await Packer.toBuffer(docx);
        fs.writeFileSync(`${filePath}/${fileName}.docx`, buffer);
    } catch (error) {
        console.error('Error converting to docx:', error);
        throw error;
    }
};

const convertPdfToDocx = async (filePath, fileName) => {
    const dataBuffer = fs.readFileSync(`${filePath}/${fileName}`);

    try {
        const result = await getDocxToText(dataBuffer);
        const textArr = getTextToArr(result);
        await changeTextToDocxFile(textArr, filePath, fileName);
        console.log('Complete converting!');
    } catch (error) {
        console.error('Error converting PDF to DOCX:', error);
        throw error;
    }
};

export { convertPdfToDocx };
