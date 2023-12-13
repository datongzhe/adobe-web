import React, { useState } from 'react';
import './Body.css'; // Import the Body.css file

import { Document, Page, pdfjs } from 'react-pdf';
import SummaryBox from './SummaryBox';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Body = () => {

    const [url, setUrl] = useState('http://localhost:3000/sample.pdf')

    const updateUrl = (newUrl) => {
        setUrl(newUrl);
    }

    return (
        <div className='App-body'>
            <Document file={url} className='App-document'>
                <Page pageNumber={1}/>
            </Document>
            <SummaryBox updateUrl={updateUrl} />
        </div>
    );
};



export default Body;

