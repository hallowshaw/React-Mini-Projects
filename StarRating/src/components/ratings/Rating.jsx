import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrIndex) {
    setRating(getCurrIndex);
  }

  function handleMouseEnter(getCurrIndex) {
    setHover(getCurrIndex);
  }

  function handleMouseLeave(getCurrIndex) {
    setHover(getCurrIndex);
  }

  return (
    <div className="container">
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={50}
            />
          );
        })}
      </div>
      <div style={{ fontSize: "30px", fontWeight: "bold" }}>
        Ratings:{rating}
      </div>
    </div>
  );
}

export default Rating;
