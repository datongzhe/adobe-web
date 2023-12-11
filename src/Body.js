import React from 'react';
import './Body.css'; // Import the Body.css file

import { Document, Page, pdfjs } from 'react-pdf';
import SummaryBox from './SummaryBox';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Body = () => {
    const pdfUrl = 'http://localhost:3000/sample.pdf'; // Replace with the actual URL of your PDF file
    

    return (
        <div className='App-body'>
            <Document file={pdfUrl} className='App-document'>
                <Page pageNumber={1}/>
            </Document>
            <SummaryBox />
        </div>
    );
};


export default Body;

