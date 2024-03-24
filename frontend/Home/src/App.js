import React, { useState } from "react";
import traffic from "./Images/traffic.png";

import processedVideo from "./Images/traffic.mp4";
// Provide the path to the processed video
import "./App.css";

function App() {
  const [originalVideo, setOriginalVideo] = useState(null);
  const [showProcessedVideo, setShowProcessedVideo] = useState(false);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setOriginalVideo(reader.result);
      };
    }
  };

  const handleProcessVideo = () => {
    // Simulate processing delay (5 seconds)
    setTimeout(() => {
      setShowProcessedVideo(true);
    }, 5000);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1 style={{ textAlign: "center" }}>Image Processing App</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Welcome to our Image Processing App. We provide powerful tools
                for analyzing and processing images. Upload your video below to
                get started.
              </p>
            </div>
            <div className="about-image">
              <img src={traffic} style={{ height: "200px" }} alt="Img" />
            </div>
          </div>
        </section>

        <section className="upload-section">
          <h2>Upload Video</h2>

          <form id="uploadForm">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
              <input
                type="file"
                class="videoInput"
                accept="video/*"
                onChange={handleVideoUpload}
                required
              />
            </center>
          </form>
        </section>

        <button onClick={handleProcessVideo}>Process Video</button>

        <section className="video-section">
          <h2></h2>
          <div id="originalVideoContainer">
            {originalVideo && !showProcessedVideo && (
              <video controls width="50%" height="auto">
                <source src={originalVideo} type="video/mp4" />
              </video>
            )}
          </div>
          {showProcessedVideo && (
            <div id="processedVideoContainer">
              <h2>Processed Video</h2>
              <video controls width="50%" height="auto">
                <source src={processedVideo} type="video/mp4" />
              </video>
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Image Processing App</p>
      </footer>
    </div>
  );
}

export default App;
