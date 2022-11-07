import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      password: "",
    },
  });
  const getForm = (data) => console.log("🟢", data);
  const multiField = [
    { value: "BTC", label: "Bitcoin" },
    { value: "ETH", label: "Ethereum" },
    { value: "ALGO", label: "Algorand" },
    { value: "BCH", label: "Bitcoin Cash" },
    { value: "BNB", label: "BNB Beacon Chain" },
    { value: "BSC", label: "BNB Smart Chain" },
    { value: "CELO", label: "Celo" },
    { value: "DOGE", label: "Doge" },
    { value: "EGLD", label: "Elrond" },
    { value: "FLOW", label: "Flow" },
    { value: "ONE", label: "Harmony" },
    { value: "KLAY", label: "Klaytn" },
    { value: "KCS", label: "KuCoin Community Chain" },
    { value: "LTC", label: "Litecoin" },
    { value: "MATIC", label: "Polygon" },
    { value: "XRP", label: "Ripple" },
    { value: "SOL", label: "Solana" },
    { value: "XLM", label: "Stellar" },
    { value: "IA", label: "TRON" },
    { value: "VET", label: "VeChain" },
    { value: "XDC", label: "XinFin" },
  ];

  const [staffMails, setStaffMails] = useState([]);
  const [currentStaffMail, setCurrentStaffMail] = useState("");
  const addNewStaff = () => {
    setStaffMails((prev) => [...prev, currentStaffMail]);
  };
  return (
    <div className="grid grid-cols-3 p-5">
      <div className="flex flex-col overflow-hidden">
        {/* Logo */}
        <div className="py-5">
          <img src="/Nsebox-main-logo.png" alt="nsebox-logo" className="w-24" />
        </div>
        {/* Entry Fields */}
        <div className="h-[48rem] flex justify-center items-center">
          <div>
            <h1 className="font-semibold text-3xl">Create business account</h1>
            <small className="text-gray-400">
              Let's get started with your new account it's totally free
            </small>
            <div className="flex flex-col">
              <form onSubmit={handleSubmit(getForm)}>
                <input
                  {...register("firstName", {
                    required: "This field is required❗️",
                  })}
                  title="This is the First Name of the business owner"
                  placeholder="First Name"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.firstName?.message}
                </small>{" "}
                <input
                  {...register("lastName", {
                    required: "This field is required❗️",
                  })}
                  title="This is the Last Name of the business owner"
                  placeholder="Last Name"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.lastName?.message}
                </small>
                <input
                  {...register("userName", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Business Name"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.businessName?.message}
                </small>
                <input
                  {...register("email", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Email"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">{errors.email?.message}</small>
                <input
                  {...register("password", {
                    required: "This field is required ❗️",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="Password"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.password?.message}
                </small>
                <div className="mt-5">
                  <small
                    title="Select Crypto Currencies which you want to accept as pasyment for your products/services"
                    className="capitalize text-gray-400"
                  >
                    Select your preffered currencies
                  </small>
                  <Select
                    defaultValue={[multiField[0], multiField[1], multiField[3]]}
                    isMulti
                    name="currencies"
                    options={multiField}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                {/* Input staff Emails */}
                <div>
                  <small>Input Staff Emails</small>
                  <div className="flex gap-5 w-full">
                    <input
                      type="text"
                      className="bg-gray-200 w-[76%] rounded-md p-2"
                      placeholder="Enter staff emails"
                      value={currentStaffMail}
                      onChange={(e) => setCurrentStaffMail(e.target.value)}
                    />
                    <button
                      className="bg-green-500 text-white p-2 rounded-lg"
                      onClick={addNewStaff}
                    >
                      Add Staff
                    </button>
                  </div>
                </div>
                {/* Selected Staffs */}
                {staffMails.map((staff) => {
                  return <h1>{staff}</h1>;
                })}
                {/* Etnd Selected Staffs */}
                {/* Select Business Logo */}
                <div className="mt-5">
                  <small className="text-gray-400">Upload Business Logo</small>
                  <input type="file" name="business_logo" />
                </div>
                <button
                  type="submit"
                  className="w-full text-white rounded-lg p-3 mt-5 bg-[#342c79]"
                >
                  Create Account
                </button>
              </form>
              <button className="border-2 mt-3 hover:bg-gray-200 transition hover:border-none duration-300 ease-in-out border-gray-400 flex justify-center gap-2 items-center rounded-lg p-3">
                <img src="/Google.png" className="w-5" />
                Sign Up with Google Account
              </button>
              <div className="flex space-x-4 w-full justify-between mt-3 items-center">
                <small
                  className="capitalize text-gray-500 hover:underline font-medium cursor-pointer"
                  onClick={() =>
                    alert(
                      "We're currently Working on our personal Accounts 🙌💳"
                    )
                  }
                >
                  No i don't have a business
                </small>
                <a href="file:///Users/appleowner/Downloads/BizLand/index.html">
                  <small className="capitalize text-orange-500 hover:underline font-medium cursor-pointer">
                    Back to Website
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-end items-center">
        <div className="mt-12">
          <img
            src="/E-commerce-dev.png"
            alt="mobile-dev"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
