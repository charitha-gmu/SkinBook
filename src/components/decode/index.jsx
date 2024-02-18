import React, { useState } from "react";
import OutlinedButton from "../common/Button";
import QuizModal from "./QuizModal";

const Decode = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="decode-container">
      <div className="image-container">
        <img
          src="https://yours-cdn.s3.ap-southeast-1.amazonaws.com/face.jpg"
          alt="img-face-1"
          className="image face-image"
        ></img>
        <img
          src="https://yours-cdn.s3.ap-southeast-1.amazonaws.com/mobile-second-section.jpg"
          alt="img-phone"
          className="image"
        ></img>
      </div>
      <div className="text-container">
        <p className="heading">Decode your Skin</p>
        <p className="content">
          <span>Initiate Your Skin Journey:</span> Utilize our cutting-edge AI
          and computer vision technology for a comprehensive analysis of your
          skin. Simply capture or upload a selfie to begin.
        </p>
        <p className="content">
          <span>Deep Dive with Our Quiz:</span> Provide us with insights about
          your skin type, concerns, lifestyle, and the environment. This step
          ensures that our recommendations are perfectly tailored to you.
        </p>
        <p className="content">
          <span>Discover Custom Solutions:</span> Instantly receive personalized
          recommendations based on your analysis. Plus, gain exclusive access to
          our team of skin care experts for any questions or further
          customization.
        </p>
        <OutlinedButton
          btnTitle="Start Analysis"
          className="analysis-button"
          onClick={() => setOpenModal(true)}
        />
      </div>
      {openModal ? (
        <QuizModal
          handleButtonClick={() => {
            setOpenModal(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Decode;
