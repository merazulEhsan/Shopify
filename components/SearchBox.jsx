import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="lg:w-full max-w-lg relative md:flex hidden font-jost text-sm tracking-wide text-slate-500 ">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-slate-300 rounded-full py-2.5 pl-4 focus:outline-none focus:border-secondary hidden md:flex dark:bg-cardBlack"
        placeholder="Search for products..."
      />
      <button className="hover:bg-transparent hover:text-secondary transition hidden md:flex items-center">
        <span className="absolute right-1.5 text-white bg-secondary rounded-full p-1">
          <Search />
        </span>
      </button>
    </div>
  );
};

export default SearchBox;
