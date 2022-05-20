import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import Button from "../../config/Button";
import TikTokLogo from "../../tiktokLogo/TikTokLogo";
import BorderBottomHeader from "./BorderBottomHeader";
import Portal_Ellipsis from "./Portal_Ellipsis";

const Header = () => {
  const [contentInputSearch, setContentInputSearch] = useState("");
  const itemsRef = React.useRef();
  const coordinates = itemsRef.current.getBoundingClientRect();
  console.log(itemsRef)
  console.log(coordinates.left);
  const [checkMouse, setCheckMouse] = useState(false);
  const [data, setData] = useState([]);
  const debounceValue = useDebounce(contentInputSearch, 700);
  useEffect(() => {
    if (debounceValue.trim().length === 0) return;
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounceValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [debounceValue]);
  const handleSetValueForInput = (e) => {
    setContentInputSearch(e.target.value);
  };
  return (
    <Fragment>
      <header className="container box-border fixed top-[10px] left-0 right-0 flex justify-between pb-4">
        {/* logo tiktok */}
        <TikTokLogo></TikTokLogo>
        {/* search */}
        <div className="box-border flex items-center justify-center bg-gray-200 rounded-full">
          <input
	ref={itemsRef}
            value={contentInputSearch}
            className="w-[360px] px-4 py-3  outline-none bg-gray-200 rounded-full "
            placeholder="Search accounts and videos"
            type="search"
            onChange={handleSetValueForInput}
          />
          {/* logo search */}
          <span className="px-4 border border-t-0 border-b-0 border-r-0 cursor-pointer border-l-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6  ${
                contentInputSearch.trim().length > 0
                  ? "text-black"
                  : "text-gray-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        {/* items right */}
        <div className="flex items-center justify-center gap-x-5">
          <span className="font-bold transition-all cursor-pointer hover:underline">
            Upload
          </span>
          <Button className={"bg-[#fe2c55] rounded-lg px-[33px] py-[6px]"}>
            Login
          </Button>
          <span onClick={() => setCheckMouse(!checkMouse)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </span>
        </div>
      </header>
      {/*  */}
      <BorderBottomHeader></BorderBottomHeader>

      {/* data user */}
      {contentInputSearch.trim().length > 0 && data?.length > 0 && (
        <div
          className={`flex flex-col items-start w-[417px] h-auto mt-10 border border-gray-300 rounded-md shadow-xl gap-y-2 top-[29px] left-[${coordinates.left}px] fixed`}
        >
          <span className="block p-2 pb-0 font-bold text-gray-400">
            Accounts
          </span>
          {data.map((user) => {
            return (
              <Link
                to={`/@${user.nickname}`}
                className="flex items-center w-full p-3 text-left transition-all cursor-pointer first:pt-5 gap-x-5 hover:bg-gray-100"
                key={user.id}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatar}
                  alt={user.first_name}
                />
                <div>
                  <span className="flex gap-x-2 w-[200px]  items-center">
                    <span>{user.nickname}</span>
                    {user.tick === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : null}
                  </span>
                  <h2>{user.full_name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* portal */}
      <Portal_Ellipsis
        className={`${checkMouse ? "fixed right-[60px] top-[70px]" : "hidden"}`}
      ></Portal_Ellipsis>
      {/* data */}
      {/* <div className="fixed flex items-center w-full gap-x-3"></div> */}
    </Fragment>
  );
};

export default Header;
