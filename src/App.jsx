import React from 'react';

const App = () => {
  const videoId = "19Jge0n_hUFm0Fky0dqC7yExSsSKwj7Ut";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
  const fullscreenUrl = `https://drive.google.com/file/d/${videoId}/view`;

  // Function to open video in fullscreen mode manually
  const openFullScreen = () => {
    const iframe = document.getElementById("drive-video");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { // Safari compatibility
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
      iframe.msRequestFullscreen();
    } else {
      window.open(fullscreenUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-black border rounded-lg shadow-lg p-6">
        <div className="aspect-video w-full relative">
          <iframe
            id="drive-video"
            src={embedUrl}
            className="w-full h-full absolute top-0 left-0"
            allow="autoplay"
            allowFullScreen
          />
        </div>

        <div className="mt-4 text-center space-x-4">
          <button
            onClick={openFullScreen}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            See Full Screen
          </button>

          <a
            href={fullscreenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Open in Google Drive (New Tab)
        </a>
      </div>
    </div>
    </div >
  );
}

export default App;
