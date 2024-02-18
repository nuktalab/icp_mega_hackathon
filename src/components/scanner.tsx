import React, { useState, useRef } from 'react';

const DocumentScanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleScanner = () => {
    if (!isScanning) {
      startScanner();
    } else {
      stopScanner();
    }
  };

  const startScanner = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsScanning(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopScanner = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsScanning(false);
    }
  };

  return (
    <div>
      <h1>Document Scanner</h1>
      <div>
        <button onClick={toggleScanner}>{isScanning ? 'Stop Scanning' : 'Start Scanning'}</button>
      </div>
      <div>
        {stream && (
          <video ref={videoRef} autoPlay width={640} height={480} />
        )}
      </div>
    </div>
  );
};

export default DocumentScanner;
