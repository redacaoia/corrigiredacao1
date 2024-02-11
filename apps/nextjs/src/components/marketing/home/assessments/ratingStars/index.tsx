import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

type RatingStarsProps = {
  rating: number;
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar className="text-yellow-300" key={i} />);
      } else if (hasHalfStar && i === Math.ceil(rating)) {
        stars.push(<FaStar className="text-yellow-300" key={i} />);
      } else {
        stars.push(<FaRegStar className="text-yellow-300" key={i} />);
      }
    }

    return stars;
  };

  return <div className="flex items-center gap-2">{renderStars()}</div>;
};

export default RatingStars;
