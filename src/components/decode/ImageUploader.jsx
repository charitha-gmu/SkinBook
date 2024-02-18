import React, { useState } from "react";
import Webcam from "react-webcam";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const findHighestValue = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      // Convert percentage string to a float
      const numericValue = parseFloat(value);
      if (numericValue > acc.value) {
        acc.value = numericValue;
        acc.key = key;
      }
      return acc;
    }, { value: 0, key: '' });
  };
  

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelectedFile(imageSrc);
  }, [webcamRef, setSelectedFile]);

  // Convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    setIsLoading(true);
    const imageBase64 = selectedFile.startsWith("data:image")
      ? selectedFile
      : await toBase64(selectedFile);

    // Replace the URL with the actual URL of your Flask API
    fetch("https://ed55-100-36-180-3.ngrok-free.app/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageBase64 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictions(data);
        const highestValue =  findHighestValue(data)
        localStorage.setItem("skinType", JSON.stringify(highestValue))
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <input type="file" onChange={handleFileChange} accept="image/*" /> */}
      <Webcam
        audio={false}
        height={420}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        videoConstraints={videoConstraints}
      />
      <OutlinedButton btnTitle="Capture Photo" onClick={capture} />
      {selectedFile && (
        <>
          <img
            src={selectedFile}
            alt="Captured"
            style={{ marginTop: "20px" }}
          />
          <OutlinedButton onClick={handleSubmit} btnTitle="Analyze Image" />
        </>
      )}
      {/* </form> */}
      {isLoading && <p>Loading...</p>}
      {Object.keys(predictions)?.length ? (
        <div>
          <h3 style={{ color: "#6f0f38" }}>Predictions:</h3>
          {Object.keys(predictions).map((key) => (
            <div key={key}>{`${key}: ${predictions[key]}`}</div>
          ))}

          <NavLink to={RoutePaths.remedies} className="decode-nav-link">
            <OutlinedButton
              btnTitle="See Remedies"
              className="remedy-button"
            />
          </NavLink>
        </div>
      ) : null}
    </>
  );
};

export default ImageUploader;
