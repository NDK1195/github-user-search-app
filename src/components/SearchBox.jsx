import { useState } from "react";
import iconSearch from "../assets/icon-search.svg";
function SearchBox({ handleGetUserData }) {
  const [username, setUsername] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    fetchUserData();
  }

  async function fetchUserData() {
    setIsSearching(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      if (data) {
        handleGetUserData(data);
        setIsSearching(false);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    } catch (error) {
      console.log(error);
      setIsSearching(false);
      setIsNotFound(true);
    }
  }

  function handleFocusInput() {
    setIsNotFound(false);
    setUsername("");
  }

  return (
    <section className="mb-4 w-full rounded-[15px] bg-#FEFEFE py-[7px] pl-4 pr-[7px] shadow-box md:mb-6 md:py-[9.5px] md:pl-8 md:pr-[10px] dark:bg-#1E2A47 dark:shadow-none">
      <form
        className="flex w-full items-center justify-between"
        onSubmit={handleSearch}
      >
        <div className="flex items-center gap-2 md:gap-6">
          <img src={iconSearch} alt="icon search" className="w-5 md:w-6" />
          <input
            type="text"
            className="w-[200px] bg-white text-[13px] leading-[25px] text-[#222731] caret-#0079FF outline-none placeholder:text-#4B6A9B md:w-[270px] md:text-lg dark:bg-#1E2A47 dark:text-white placeholder:dark:text-white"
            placeholder="Search GitHub username…"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocusInput}
          />
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row-reverse md:gap-6">
          <button
            className="flex h-[46px] w-[84px] items-center justify-center rounded-[10px] bg-#0079FF text-sm font-bold leading-none text-white transition-colors hover:bg-[#60ABFF] md:h-[50px] md:w-[106px]"
            type="submit"
          >
            {isSearching ? "Searching..." : "Search"}
          </button>

          {isNotFound && (
            <p className="text-[13px] font-bold leading-none text-[#F74646] md:text-[15px]">
              No results
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
export default SearchBox;
