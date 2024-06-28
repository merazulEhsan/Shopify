import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BreadCrumb = ({ value }) => {
  return (
    <div className=" bg-ghostWhite mb-6">
      <div className="container py-10 flex justify-between items-center">
        <h1 className="text-3xl text-black font-roboto font-semibold">
          {value}
        </h1>
        <div className="flex justify-between items-center gap-3 text-sm">
          <Link href="/" className="text-gray-500 ">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <span className="text-gray-500 font-medium">Home</span>
          <span className="text-sm text-gray-500">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <p className="text-gray-500 font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
