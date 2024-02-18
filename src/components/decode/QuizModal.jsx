import React, { useState } from "react";
import Modal from "../common/Modal";
import ImageUploader from "./ImageUploader";

const QuizModal = (props) => {
  const [showNextForm, setShowNextForm] = useState(false);

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    setShowNextForm(true);
    // props.handleButtonClick();
  };

  return (
    <Modal>
      <div className="quiz-modal-container">
        <p className="header">Insights for curated Remedy </p>
        <div className="close-btn" onClick={() => props.handleButtonClick()}>
          X
        </div>
        {showNextForm ? (
          <>
            <div>
              <h2 >Please take selfie for analysis</h2>
              <ImageUploader />
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleButtonSubmit}>
              <div className="form-group">
                <label>What is your gender?</label>
                <div className="input-field">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="male"
                    required
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="female"
                    required
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="gender"
                    value="Rather not say"
                    id="ratherNotSay"
                    required
                  />
                  <label htmlFor="ratherNotSay">I'd rather not say</label>
                </div>
              </div>

              <div className="form-group">
                <label>What's your age?</label>
                <div className="input-field">
                  <input
                    type="radio"
                    name="age"
                    value="<20"
                    id="ageLess20"
                    required
                  />
                  <label htmlFor="ageLess20">{"<20"}</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="age"
                    value="20-30"
                    id="age20-30"
                    required
                  />
                  <label htmlFor="age20-30">20-30</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="age"
                    value="31-40"
                    id="age31-40"
                    required
                  />
                  <label htmlFor="age31-40">31-40</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="age"
                    value="41-50"
                    id="age41-50"
                    required
                  />
                  <label htmlFor="age41-50">41-50</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="age"
                    value="50+"
                    id="age50Plus"
                    required
                  />
                  <label htmlFor="age50Plus">50 +</label>
                </div>
              </div>

              <div className="form-group">
                <label>Describe your T-Zone in the morning?</label>
                <div className="input-field">
                  <input
                    type="radio"
                    name="tZone"
                    value="Very Dry"
                    id="tZoneVeryDry"
                    required
                  />
                  <label htmlFor="tZoneVeryDry">Very Dry</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="tZone"
                    value="Dry"
                    id="tZoneDry"
                    required
                  />
                  <label htmlFor="tZoneDry">Dry</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="tZone"
                    value="Normal"
                    id="tZoneNormal"
                    required
                  />
                  <label htmlFor="tZoneNormal">Normal</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="tZone"
                    value="Oily"
                    id="tZoneOily"
                    required
                  />
                  <label htmlFor="tZoneOily">Oily</label>
                </div>
                <div className="input-field">
                  <input
                    type="radio"
                    name="tZone"
                    value="Very Oily"
                    id="tZoneVeryOily"
                    required
                  />
                  <label htmlFor="tZoneVeryOily">Very Oily</label>
                </div>

                <div className="form-group">
                  <label>Describe your cheeks in the morning?</label>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="cheeks"
                      value="Very Dry"
                      id="cheeksVeryDry"
                      required
                    />
                    <label htmlFor="cheeksVeryDry">Very Dry</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="cheeks"
                      value="Dry"
                      id="cheeksDry"
                      required
                    />
                    <label htmlFor="cheeksDry">Dry</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="cheeks"
                      value="Normal"
                      id="cheeksNormal"
                      required
                    />
                    <label htmlFor="cheeksNormal">Normal</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="cheeks"
                      value="Oily"
                      id="cheeksOily"
                      required
                    />
                    <label htmlFor="cheeksOily">Oily</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="cheeks"
                      value="Very Oily"
                      id="cheeksVeryOily"
                      required
                    />
                    <label htmlFor="cheeksVeryOily">Very Oily</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>What are your top 2 skin concerns? (Select two)</label>

                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Acne"
                      id="concernAcne"
                      
                    />
                    <label htmlFor="concernAcne">Acne</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Pigmentation"
                      id="concernPigmentation"
                      
                    />
                    <label htmlFor="concernPigmentation">Pigmentation</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Dark Eye Circles"
                      id="concernDarkEyeCircles"
                      
                    />
                    <label htmlFor="concernDarkEyeCircles">
                      Dark Eye Circles
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Redness"
                      id="concernRedness"
                      
                    />
                    <label htmlFor="concernRedness">Redness</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Blackheads"
                      id="concernBlackheads"
                      
                    />
                    <label htmlFor="concernBlackheads">Blackheads</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="checkbox"
                      name="skinConcerns"
                      value="Wrinkles"
                      id="concernWrinkles"
                      
                    />
                    <label htmlFor="concernWrinkles">Wrinkles</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>How often do you get acne?</label>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneFrequency"
                      value="Always"
                      id="acneAlways"
                      
                    />
                    <label htmlFor="acneAlways">Always</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneFrequency"
                      value="Weekly"
                      id="acneWeekly"
                      required
                    />
                    <label htmlFor="acneWeekly">Weekly</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneFrequency"
                      value="Monthly"
                      id="acneMonthly"
                      required
                    />
                    <label htmlFor="acneMonthly">Monthly</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>How would you best describe your acne?</label>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneDescription"
                      value="Pus Filled"
                      id="acnePusFilled"
                      required
                    />
                    <label htmlFor="acnePusFilled">Pus Filled Ones</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneDescription"
                      value="Hard"
                      id="acneHard"
                      required
                    />
                    <label htmlFor="acneHard">Hard Ones</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneDescription"
                      value="Swollen"
                      id="acneSwollen"
                      required
                    />
                    <label htmlFor="acneSwollen">Swollen Ones</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="acneDescription"
                      value="Red"
                      id="acneRed"
                      required
                    />
                    <label htmlFor="acneRed">Red Ones</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Ever had any adverse reactions to a skincare ingredient?
                  </label>
                  <div className="input-field">
                    <input
                      type="radio"
                      name="adverseReaction"
                      value="Yes"
                      id="reactionYes"
                      required
                    />
                    <label htmlFor="reactionYes">Yes</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="adverseReaction"
                      value="No"
                      id="reactionNo"
                      required
                    />
                    <label htmlFor="reactionNo">No</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="radio"
                      name="adverseReaction"
                      value="Not Sure"
                      id="reactionNotSure"
                      required
                    />
                    <label htmlFor="reactionNotSure">Not Sure</label>
                  </div>
                </div>

                <button type="submit" className="btn-submit">
                  Next
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default QuizModal;
