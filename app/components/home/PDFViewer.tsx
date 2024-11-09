'use client'

import React from 'react';

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {
    return (
        <div style={{ 
            width: '350%', 
            height: 'calc(120vh - 150px)', 
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)'
        }}>
            <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    backgroundColor: '#f8fafc'
                }}
            />
        </div>
    );
};

export default PDFViewer;
