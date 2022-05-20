import React from "react";

const TextAuthor = ({ className }) => {
  return (
    <h2 className={`text-lg font-medium ${className}`}>
      Tik Tok was made by{" "}
      <a
        className="text-black underline capitalize hover:text-blue-500 transition-all"
        href=""
      >
        Thanh Loc
      </a>
    </h2>
  );
};

export default TextAuthor;
