'use client';
import { useEffect, useRef } from 'react';
import PDFViewer from '@/components/home/PDFViewer';

export default function Presentation() {
    const pdfUrl = "/presentation.pdf";
    const pdfRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            pdfRef.current?.scrollIntoView({ behavior: 'smooth' });
            pdfRef.current?.focus();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div>
            <h1 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
                Presentation
            </h1>
            <div 
                ref={pdfRef} 
                className="w-full max-w-6xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg focus:outline-none" 
                tabIndex={0}
            >
                <PDFViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
}