import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
  return (
    <div className="lg:w-full max-w-lg relative md:flex hidden font-poppins">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-secondary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="Search for products..."
      />
      <button className="bg-secondary border border-secondary text-white px-8 rounded-r-md hover:bg-transparent hover:text-secondary transition hidden md:flex items-center">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
