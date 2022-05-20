import React, { Fragment } from "react";
import TikTokLogo from "../tiktokLogo/TikTokLogo";
import TextAuthor from "../text/TextAuthor";
import Button from "../config/Button";
import Field from "../config/Field";
import { useForm } from "react-hook-form";
const Sign_Up = () => {
  const { control, handleSubmit } = useForm({});
  const handleSubmitForm = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      <div className="flex justify-center items-center flex-col">
        <TikTokLogo className={"mb-3 block mt-10"}></TikTokLogo>
        <TextAuthor></TextAuthor>
      </div>
      <form
        className="flex flex-col mt-7"
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Field
          control={control}
          name={"FullName"}
          type="text"
          placeholder={"fullName"}
        ></Field>
        <Field
          control={control}
          name={"Email"}
          type="email"
          placeholder={"email"}
        ></Field>
        <Field
          control={control}
          name={"Password"}
          type="password"
          placeholder={"password"}
          hasIcon={true}
        ></Field>
        <Button
          type="submit"
          className={
            "bg-blue-500 max-w-[650px] w-full mx-auto rounded-md py-3 mt-5"
          }
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Sign_Up;
