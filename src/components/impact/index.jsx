import React, { useState } from "react";
import OutlinedButton from "../common/Button";

const Impact = () => {
  const [data, setData] = useState({
    name: "",
    websiteInfo: "",
    suggestion: "",
  });

  const handleChange = (value, key) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleBtnClick = () => {
    setData({
      name: "",
      websiteInfo: "",
      suggestion: "",
    });
  };

  return (
    <div className="impact-container">
      <div className="header">Create an Impact</div>

      <div className="form-container">
        <input
          placeholder="Name"
          className="input-field"
          value={data?.name}
          onChange={(e) => handleChange(e.target.value, "name")}
        />

        <textarea
          placeholder="How did you find our website?"
          className="input-field"
          value={data?.websiteInfo}
          onChange={(e) => handleChange(e.target.value, "websiteInfo")}
        />

        <div className="checkbox-container">
          <div className="label">You would like to contribute remedy for ?</div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="category"
              value="skin"
              id="skin-category"
              required
            />
            <label htmlFor="skin-category">Skin</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="category"
              value="hair"
              id="hair-category"
              required
            />
            <label htmlFor="hair-category">Hair</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="category"
              value="Beauty"
              id="beauty-category"
              required
            />
            <label htmlFor="beauty-category">Beauty</label>
          </div>
        </div>

        <textarea
          placeholder="What is the remedy you would like to suggest us?"
          className="input-field"
          value={data?.suggestion}
          onChange={(e) => handleChange(e.target.value, "suggestion")}
        />

        <OutlinedButton
          btnTitle="Submit"
          className="analysis-button"
          onClick={() => {
            handleBtnClick();
          }}
        />
      </div>
    </div>
  );
};

export default Impact;
