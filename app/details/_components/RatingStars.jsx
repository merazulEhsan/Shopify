import { StarFilledIcon } from "@radix-ui/react-icons";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <StarFilledIcon />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          <StarFilledIcon />
        </span>
      );
    }
  }
  return <div className=" flex">{stars}</div>;
};

export default RatingStars;
