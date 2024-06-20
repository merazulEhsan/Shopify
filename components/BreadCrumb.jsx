import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BreadCrumb = ({ value }) => {
  return (
    <div className=" bg-darkslategray mb-6">
      <div class="container py-10 flex justify-between items-center">
        <h1 className="text-3xl text-white font-roboto font-semibold">
          {value}
        </h1>
        <div className="flex justify-between items-center gap-3 text-sm">
          <Link href="/" class="text-white ">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <span className="text-white font-medium">Home</span>
          <span class="text-sm text-gray-400">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <p class="text-gray-300 font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
