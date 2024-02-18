import React from "react";
import OutlinedButton from "../common/Button";

const RemedyCard = (props) => {
  const { data } = props;

  return (
    <div className="remedy-card">
      <p className="sub-header">{data?.title}</p>
      <p className="sub-sub-header">Ingredients</p>
      <div className="ingredients-container">
        {data?.images?.map((item, index) => {
          return (
            <div className="ingredients">
              <img
                src={item?.imageSrc}
                alt={"ingredient - " + index}
                className="image"
              />
              <p className="ingredient-title">{item?.title}</p>
            </div>
          );
        })}
      </div>
      <p className="sub-sub-header">Your Remedy</p>
      <div className="recipe-container">{data?.recipe}</div>
      <a href={data?.youTubeLink} target="_blank" rel="noopener noreferrer">
        <OutlinedButton
          btnTitle="Learn More >"
          // onClick={() => {}}
          className="btn"
        />
      </a>
    </div>
  );
};

export default RemedyCard;
