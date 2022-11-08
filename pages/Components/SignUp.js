import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Cancel from "./comps/Icons";

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
  const getForm = (data) => {
    console.log("🟢", data);
    alert(
      "Your Business Account has been created successfully 🎉 Start Collecting crypto payments like breeze 💸"
    );
  };
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
    if (currentStaffMail == "") {
      alert("You need to fill in your staff email");
    } else {
      setStaffMails((prev) => [...prev, currentStaffMail]);
      setCurrentStaffMail("");
    }
  };
  const removeStaff = (staff) => {
    setStaffMails((prev) => prev.filter((x) => x !== staff));
  };
  return (
    <div className="grid grid-cols-3 p-5">
      <div className="flex col-span-2 flex-col overflow-hidden">
        {/* Logo */}
        <div className="">
          <div className="py-5">
            <Image
              src="/Nsebox-main-logo.png"
              alt="nsebox-logo"
              height={50}
              width={130}
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl">Create business account</h1>
            <small className="text-gray-400">
              Let's get started with your new account it's totally free
            </small>
            <div className="flex flex-col">
              <form onSubmit={handleSubmit(getForm)}>
                <div className="grid-cols-2 gap-10 grid">
                  <div>
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <div className="mt-3">
                      <small className="text-gray-400">
                        Input Staff Emails
                      </small>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          className="bg-gray-200 w-[75%] rounded-md p-2"
                          placeholder="Enter staff emails"
                          value={currentStaffMail}
                          onChange={(e) => setCurrentStaffMail(e.target.value)}
                        />
                        <button
                          className="bg-green-500 text-white p-2 rounded-lg"
                          onClick={addNewStaff}
                          type="button"
                        >
                          Add Staff
                        </button>
                      </div>
                    </div>
                    {/* Enter Mails */}
                    {staffMails.length !== 0 && (
                      <div className="flex mt-3 bg-gray-200 rounded-lg p-2">
                        {staffMails.map((staff, key) => {
                          return (
                            <div
                              key={key}
                              className="bg-gray-400 flex gap-2 p-2"
                            >
                              <h1> {staff}</h1>
                              <div onClick={() => removeStaff(staff)}>
                                <Cancel />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* End Input Mails */}
                    <button
                      type="submit"
                      className="w-full text-white rounded-lg p-3 mt-10 bg-[#342c79]"
                    >
                      Create Account
                    </button>
                    <button className="border-2 mt-3 w-full hover:bg-gray-200 transition hover:border-none duration-300 ease-in-out border-gray-400 flex justify-center gap-2 items-center rounded-lg p-3">
                      <Image
                        src="/Google.png"
                        alt="google-image"
                        className="w-5"
                        height={20}
                        width={20}
                      />
                      Sign Up with Google Account
                    </button>
                  </div>
                  {/* Second form collector */}
                  <div>
                    <div>
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
                    </div>
                    <div>
                      <input
                        {...register("email", {
                          required: "This field is required ❗️",
                        })}
                        placeholder="Business Mail"
                        className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                      />
                      <small className="text-red-500">
                        {errors.email?.message}
                      </small>
                    </div>
                    <div className="mt-5">
                      <small
                        title="Select Crypto Currencies which you want to accept as pasyment for your products/services"
                        className="capitalize text-gray-400"
                      >
                        Select your preffered currencies
                      </small>
                      <Select
                        defaultValue={[
                          multiField[0],
                          multiField[1],
                          multiField[3],
                        ]}
                        isMulti
                        name="currencies"
                        options={multiField}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="mt-5">
                      <small className="text-gray-400">
                        Upload Business Logo
                      </small>
                      <input type="file" name="business_logo" />
                    </div>
                  </div>
                  {/* End second form collector */}
                </div>
              </form>

              <div className="flex gap-4 mt-3 items-center">
                <small
                  className="capitalize text-gray-500 hover:underline font-medium cursor-pointer"
                  onClick={() =>
                    alert(
                      "We &apos; re currently Working on our personal Accounts 🙌💳"
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
        {/* Entry Fields */}
      </div>
      <div className="flex p-10">
        <div className="mt-12">
          <Image
            src="/E-commerce-dev.png"
            alt="mobile-dev"
            className="h-full object-cover"
            width={500}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
