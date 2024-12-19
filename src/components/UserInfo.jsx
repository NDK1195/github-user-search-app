import iconLocation from "../assets/icon-location.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-company.svg";
import iconWebsite from "../assets/icon-website.svg";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function UserInfo({ userData }) {
  return (
    <section className="relative w-full rounded-[15px] bg-#FEFEFE px-6 pb-12 pt-8 leading-none text-#4B6A9B shadow-box md:p-10 lg:p-12 lg:pl-[202px] dark:bg-#1E2A47 dark:text-white dark:shadow-none">
      {userData && (
        <>
          <div className="mb-8 flex items-center gap-5 md:mb-6 md:gap-10 lg:mb-5 lg:block">
            <img
              src={userData.avatar_url}
              alt="user avatar"
              className="size-[70px] rounded-full md:size-[117px] lg:absolute lg:left-12 lg:top-12"
            />
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-0">
              <div>
                <h2 className="mb-1 font-bold md:text-[26px]">
                  {userData.name}
                </h2>
                <a
                  href={userData.html_url}
                  className="text-[13px] text-#0079FF md:text-base"
                  target="_blank"
                >
                  @{userData.login}
                </a>
              </div>
              <div className="text-[13px] text-#697C9A md:text-[15px] dark:text-white">
                Joined{" "}
                {`${new Date(userData.created_at).getDate()} ${
                  month[new Date(userData.created_at).getMonth()]
                } ${new Date(userData.created_at).getFullYear()}`}
              </div>
            </div>
          </div>

          <p className="mb-6 text-[13px] leading-[25px] md:mb-8 md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          {/* statistics */}
          <div className="mb-6 flex h-[85px] items-center justify-between rounded-[10px] bg-#F6F8FF p-4 md:mb-8 md:pl-8 md:pr-[96px] lg:mb-10 lg:pr-[83px] dark:bg-#141D2F">
            <div className="flex flex-col items-center gap-3 md:items-start md:gap-2">
              <p className="text-[11px] md:text-[13px]">Repos</p>
              <p className="text-base font-bold text-#2B3442 md:text-[22px] dark:text-white">
                {userData.public_repos}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start md:gap-2">
              <p className="text-[11px] md:text-[13px]">Followers</p>
              <p className="text-base font-bold text-#2B3442 md:text-[22px] dark:text-white">
                {userData.followers}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="text-[11px] md:text-[13px]">Following</p>
              <p className="text-base font-bold text-#2B3442 md:text-[22px] dark:text-white">
                {userData.following}
              </p>
            </div>
          </div>
          {/* statistics */}

          {/* contact */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-2 md:gap-y-5">
            <div
              className={`${userData.location ? "" : "opacity-50"} flex items-center gap-[13px] lg:gap-4`}
            >
              <img src={iconLocation} alt="icon location" />
              <p className="text-[13px] md:text-[15px]">
                {userData.location || "Not Available"}
              </p>
            </div>

            <div
              className={`${userData.blog ? "" : "opacity-50"} flex items-center gap-[13px] md:col-start-1 md:row-start-2 lg:gap-4`}
            >
              <img src={iconWebsite} alt="icon website" />
              <a
                href={userData.blog ? `https://${userData.blog}` : "#"}
                target={userData.blog ? "_blank" : ""}
                className={`${userData.blog ? "transition-all hover:underline" : ""} text-[13px] md:text-[15px]`}
              >
                {userData.blog || "Not Available"}
              </a>
            </div>

            <div
              className={`${userData.twitter_username ? "" : "opacity-50"} flex items-center gap-[13px] md:pl-5 lg:gap-4`}
            >
              <img src={iconTwitter} alt="icon twitter" />
              <a
                href={
                  userData.twitter_username
                    ? `https://x.com/${userData.twitter_username}`
                    : "#"
                }
                target={userData.twitter_username ? "_blank" : ""}
                className={`${userData.twitter_username ? "transition-all hover:underline" : ""} text-[13px] md:text-[15px]`}
              >
                {userData.twitter_username || "Not Available"}
              </a>
            </div>

            <div
              className={`${userData.company ? "" : "opacity-50"} flex items-center gap-[13px] md:pl-5 lg:gap-4`}
            >
              <img src={iconCompany} alt="icon company" />
              <a
                href={
                  userData.company
                    ? `https://github.com/${userData.company.slice(1)}`
                    : "#"
                }
                target={userData.company ? "_blank" : ""}
                className={`${userData.company ? "transition-all hover:underline" : ""} text-[13px] md:text-[15px]`}
              >
                {userData.company || "Not Available"}
              </a>
            </div>
          </div>
          {/* contact */}
        </>
      )}
    </section>
  );
}
export default UserInfo;
