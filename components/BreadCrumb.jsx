import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BreadCrumb = ({ value }) => {
  return (
    <div className=" bg-ghostWhite dark:bg-customBlack ">
      <div className="container py-10 flex justify-between items-center">
        <h1 className="text-3xl text-black dark:text-gray-300 font-roboto font-medium">
          {value}
        </h1>
        <div className="flex justify-between items-center gap-3 text-sm">
          <Link href="/" className="text-gray-500 dark:text-gray-300">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <span className="text-gray-500 font-medium dark:text-gray-300">
            Home
          </span>
          <span className="text-sm text-gray-500">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <p className="text-gray-500 font-medium dark:text-gray-300">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
