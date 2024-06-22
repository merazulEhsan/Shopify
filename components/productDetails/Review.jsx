import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewForm from "./ReviewForm";

const Review = () => {
  return (
    <div className="mt-10">
      <div className="md:flex justify-between md:gap-x-10 font-poppins ">
        <div className="md:w-1/2 mb-10">
          <h1 className="text-xl font-medium text-left mb-4 ">
            Rating & Review
          </h1>
          <div className="flex items-center space-x-3 mb-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="text-left text-base space-y-1">
              <span className="text-yellow-500 space-x-1 text-xs">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <h1 className="font-medium text-base">
                James J. Allen{" "}
                <span className="text-gray-500 font-normal text-sm">
                  May 22, 2023
                </span>
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                aperiam.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="text-left text-base space-y-1">
              <span className="text-yellow-500 space-x-1 text-xs">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <h1 className="font-medium">
                James J. Allen{" "}
                <span className="text-gray-500 font-normal">May 22, 2023</span>
              </h1>
              <p className="text-sm text-gray-500 font-roboto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                aperiam.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-left ">
          <h1 className="text-xl font-medium mb-2 ">Review this product</h1>
          <p className="text-sm mb-4 text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="text-left text-sm text-gray-600">
            <span>Your Rating: </span>
            <span className="text-gray-300 space-x-1 text-xs">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default Review;
