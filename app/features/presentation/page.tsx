// pages/viewer.tsx
"use client"
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from '@react-pdf-viewer/core';
import { useState, useEffect } from 'react';

// Add required CSS
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ViewerPage: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const fileUrl = '/presentation.pdf';
  const [pdfError, setPdfError] = useState<string | null>(null);

  // Test if PDF exists
  useEffect(() => {
    fetch(fileUrl)
      .then(response => {
        console.log('PDF fetch status:', response.status);
        if (!response.ok) {
          setPdfError(`PDF not found (status: ${response.status})`);
        }
      })
      .catch(error => {
        console.error('Error checking PDF:', error);
        setPdfError(error.message);
      });
  }, [fileUrl]);

  return (
    <div>
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        PDF Viewer
      </h1>
      
      {pdfError && (
        <div style={{ color: 'red', textAlign: 'center', margin: '20px' }}>
          Error: {pdfError}
        </div>
      )}

      <div style={{ height: '750px', border: '1px solid #ccc' }}> {/* Added border to see container */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer 
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            onDocumentLoad={() => {
              console.log('PDF document loaded successfully');
              setPdfError(null);
            }}
          />
        </Worker>
      </div>
    </div>
  );
};

export default ViewerPage; 