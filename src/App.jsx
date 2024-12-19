import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import ThemeToggle from "./components/ThemeToggle";
import UserInfo from "./components/UserInfo";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`https://api.github.com/users/octocat`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserData();
  }, []);

  function handleGetUserData(user) {
    setUserData(user);
  }
  console.log(userData);

  return (
    <div className="grid min-h-dvh place-items-center bg-#F6F8FF dark:bg-#141D2F">
      {/* container */}
      <div className="w-full max-w-[730px] px-6 py-8 xl:p-0">
        {/* header */}
        <section className="mb-[35px] flex items-center justify-between">
          <h1 className="text-[26px] font-bold leading-none text-[#222731] dark:text-white">
            devfinder
          </h1>
          <ThemeToggle />
        </section>
        {/* header */}

        {/* search box */}
        <SearchBox handleGetUserData={handleGetUserData} />
        {/* search box */}

        {/* info */}
        <UserInfo userData={userData} />
        {/* info */}
      </div>
      {/* container */}
    </div>
  );
}
export default App;
