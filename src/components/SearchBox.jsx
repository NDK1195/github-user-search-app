import iconSearch from "../assets/icon-search.svg";
function SearchBox() {
  function handleSearch() {}
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
          />
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-6">
          <p className="text-[13px] font-bold leading-none text-[#F74646] md:text-[15px]">
            No results
          </p>

          <button
            className="flex h-[46px] w-[84px] items-center justify-center rounded-[10px] bg-#0079FF text-sm font-bold leading-none text-white transition-colors hover:bg-[#60ABFF] md:h-[50px] md:w-[106px]"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
export default SearchBox;
