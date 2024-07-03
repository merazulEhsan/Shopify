"use client";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const ClickableRatingStars = () => {
  const [rating, setRating] = useState(0); // State to store the current rating

  const handleClick = (newRating) => {
    setRating(newRating);
    // Handle sending the rating to the server or local storage here
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-yellow-300" : "text-gray-300"}
          onMouseEnter={() => handleClick(star)}
        >
          <StarFilledIcon />
        </span>
      ))}
    </div>
  );
};

export default ClickableRatingStars;
