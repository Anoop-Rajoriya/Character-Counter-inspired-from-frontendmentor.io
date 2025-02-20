import React from "react";

const Header = ({ app }) => {
  const { AppData, setAppData } = app;
  // console.log(app)
  // const darkTheme = true
  const { darkTheme } = AppData;
  const themeHandler = (event) => {
    setAppData((preState) => ({ ...preState, darkTheme: !darkTheme }));
  };

  return (
    <header className="flex items-center justify-between border-complimentaryText border-b-2 pb-3">
      <div
        id="Logo"
        className="flex items-center justify-center text-complimentaryText"
      >
        <svg
          className="text-inherit size-8 md:size-10"
          version="1.1"
          id="katman_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          viewBox="99.98 147.28 599.93 505.43"
        >
          <g>
            <path
              fill="none"
              d="M369.3,223.3l14.6,25.3l48.1,83.3c2.8,0,5.6,0,8.4,0c5.4,0,10.7,0,16.1,0.1l-87.1-150.9l-95.1,164.8 		c8.8-1.6,17.8-3,26.9-4.3l53.6-92.9L369.3,223.3z"
            ></path>{" "}
            <path
              fill="none"
              d="M478.1,445.6l-32.9-57c-74.5,11.3-138.5,31.3-184.5,57H478.1z"
            ></path>{" "}
            <path
              fill="currentColor"
              d="M369.3,257.1l53,91.8c6-0.1,12-0.2,18-0.2c15.5,0,30.8,0.3,45.9,1L369.3,147.3L240.8,369.8 		c22.3-5.1,46-9.4,70.7-12.7L369.3,257.1z M274.2,345.9l95.1-164.8L456.5,332c-5.4-0.1-10.7-0.1-16.1-0.1c-2.8,0-5.5,0-8.4,0 		L384,248.7l-14.6-25.3l-14.6,25.3l-53.6,92.9C292,342.9,283,344.3,274.2,345.9z"
            ></path>{" "}
            <path
              fill="currentColor"
              d="M290.5,652.7c-66.3-29.1-106.8-68.1-106.8-110.9c0-14.3,4.5-28.1,12.9-41.3h376.6l-68.6-118.8 		c26.1-2.2,53.1-3.3,80.8-3.3c37.3,0,73.4,2.1,107.6,5.9c-2-0.6-4-1.2-6-1.9c2,0.6,4,1.2,6,1.9c2.3,0.3,4.6,0.5,6.9,0.8 		c-6-1.5-12.2-3-18.4-4.4c0,0,0,0,0,0c-55.9-12.5-120.3-19.6-188.8-19.7c-0.4,0-0.8,0-1.2,0c-15.6,0-31,0.4-46.1,1.1 		c-5,0.2-10,0.5-15,0.8h0h0c-47.7,3-92.6,9.4-133,18.7c-3.5,0.8-6.9,1.6-10.4,2.5c-23.9,5.9-46.2,12.8-66.3,20.5 		C146.3,433.2,100,473.4,100,518C100,575.2,176.4,625.3,290.5,652.7z M445.2,388.6l32.9,57H260.7 		C306.7,419.9,370.8,399.9,445.2,388.6z"
            ></path>{" "}
          </g>{" "}
        </svg>
        <h1 className="capitalize font-bold text-xl md:text-2xl">
          char counter
          <a
            className="text-sm md:text-base ml-1 uppercase text-orange"
            href="#"
          >
            by ar
          </a>
        </h1>
      </div>
      <button
        onClick={themeHandler}
        className="bg-complimentaryBg text-complimentaryText p-2 rounded-full"
      >
        {darkTheme ? (
          <svg
            className="text-inherit size-8 md:size-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            className=" text-inherit size-8 md:size-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
