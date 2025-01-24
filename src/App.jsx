import { useState } from 'react'
import React from 'react';

// dam
const App = () => {

  const videoId = "19Jge0n_hUFm0Fky0dqC7yExSsSKwj7Ut";
  const embedUrl = `https://drive.google.com/file/d/19Jge0n_hUFm0Fky0dqC7yExSsSKwj7Ut/preview`;
  const fullscreenUrl = `https://drive.google.com/file/d/19Jge0n_hUFm0Fky0dqC7yExSsSKwj7Ut/view`;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-black border rounded-lg shadow-lg p-6">
        <div className="aspect-video w-full relative">
          {/* <iframe 
              src={embedUrl}
              className="w-full h-full absolute top-0 left-0"
              allow="autoplay"
              allowFullScreen
            /> */}
          <iframe src="https://drive.google.com/file/d/19Jge0n_hUFm0Fky0dqC7yExSsSKwj7Ut/preview" width="100%" height="100%" allow="autoplay" allowFullScreen></iframe>
        </div>
        <div className="mt-4 text-center">
          <a
            href={fullscreenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Open in Google Drive
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

