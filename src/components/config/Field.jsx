import React, { useState } from "react";
import { useController } from "react-hook-form";
import IconEyeOpen from "../icon/IconEyeOpen";

const Field = ({
  name = "",
  type,
  placeholder,
  hasIcon = false,
  control,
  ...props
}) => {
  const [valueInputPassword, setValueInputPassword] = useState("");
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="mx-auto flex flex-col mt-7">
      <label htmlFor={name} className="mb-1 font-medium">
        {name}
      </label>
      <div className="relative w-fit ">
        <input
          {...field}
          {...props}
          type={type}
          id={name}
          placeholder={`Please type your ${placeholder} `}
          className={`outline-none py-3 w-[650px] border border-gray-300 focus:border-blue-400  focus:bg-white transition-all px-2 rounded-lg mb-3 bg-gray-100 ${
            hasIcon ? "pr-12" : null
          }`}
          onChange={(e) => setValueInputPassword(e.target.value)}
        />
        {hasIcon === true && valueInputPassword.length > 0 ? (
          <IconEyeOpen></IconEyeOpen>
        ) : null}
      </div>
    </div>
  );
};

export default Field;
