import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckBoxHook from "../checkbox/CheckBoxHook";
import DropDownHook from "../dropdown/DropDownHook";

import { dropdownData } from "../../data/dropdownData";

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const handleSubmitForm = (value) => {
    console.log(value);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="max-w-[300px] mx-auto mt-10 my-10"
    >
      {/* Username */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <InputHook
          name="username"
          id="username"
          placeholder="Enter Your Username"
          control={control}
          type="text"
        />
        <p className="text-red-500 text-sm">Please Enter Your Username</p>
      </div>
      {/* Email */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer " htmlFor="username">
          Email address
        </label>
        <InputHook
          name="email"
          id="email"
          placeholder="Enter Your Email Address"
          control={control}
          type="email"
        />
      </div>
      {/* Password */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer " htmlFor="username">
          Password
        </label>
        <InputHook
          name="password"
          id="password"
          placeholder="Enter Your Password"
          control={control}
          type="password"
        />
      </div>
      {/* GENDER */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male" />
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="female" />
            <span>Female</span>
          </div>
        </div>
      </div>
      {/* Job dropdown */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you?</label>
        <DropDownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel={"Select Your Job"}
        />
      </div>
      {/* Terms */}
      <div>
        <CheckBoxHook
          control={control}
          text="I accept the terms and conditions"
          name="terms"
        />
      </div>
      {/* Submit */}
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default Register;
