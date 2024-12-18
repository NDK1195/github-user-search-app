import SearchBox from "./components/SearchBox";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="grid min-h-dvh place-items-center bg-#F6F8FF dark:bg-#141D2F">
      {/* container */}
      <div className="w-full max-w-[730px] px-6 py-8 xl:p-0">
        {/* header */}
        <div className="mb-[35px] flex items-center justify-between">
          <h1 className="text-[26px] font-bold leading-none text-[#222731] dark:text-white">
            devfinder
          </h1>
          <ThemeToggle />
        </div>
        {/* header */}

        {/* search box */}
        <SearchBox />
        {/* search box */}
      </div>
      {/* container */}
    </div>
  );
}
export default App;
