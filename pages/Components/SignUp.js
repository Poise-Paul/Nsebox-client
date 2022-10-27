import React from "react";
import { useForm } from "react-hook-form";
import { CMultiSelect } from "@coreui/react-pro";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    },
  });
  const getForm = (data) => console.log("🟢", data);
  const currencyOptions = [
    {
      value: 0,
      text: "Angular",
    },
    {
      value: 1,
      text: "Bootstrap",
    },
    {
      value: 2,
      text: "React.js",
    },
    {
      value: 3,
      text: "Vue.js",
    },
    {
      label: "backend",
      options: [
        {
          value: 4,
          text: "Django",
        },
        {
          value: 5,
          text: "Laravel",
        },
        {
          value: 6,
          text: "Node.js",
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-3 p-5">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="">
          <img src="/Nsebox-main-logo.png" alt="nsebox-logo" className="w-24" />
        </div>
        {/* Entry Fields */}
        <div className="py-12 pr-12">
          <div>
            <h1 className="font-semibold text-3xl">Create business account</h1>
            <small className="text-gray-400">
              Let's get started with your new account it's totally free
            </small>
            <div className="flex flex-col">
              <form onSubmit={handleSubmit(getForm)}>
                <input
                  {...register("fullName", {
                    required: "This field is required❗️",
                  })}
                  placeholder="Full Name"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.fullName?.message}
                </small>
                <input
                  {...register("userName", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Username"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <small className="text-red-500">
                  {errors.userName?.message}
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
                <button
                  type="submit"
                  className="w-full text-white rounded-lg p-3 mt-10 bg-[#342c79]"
                >
                  Create Account
                </button>
                {/* Add Multi Select */}
                <label
                  htmlFor=""
                  title="Select Crypto Currencies which you want to accept as pasyment for your products/services"
                >
                  Select your preffered crypto currencies
                </label>
                <CMultiSelect options={currencyOptions} />
              </form>
              <button className="border-2 mt-3  border-gray-400 flex justify-center gap-2 items-center rounded-lg p-3">
                <img src="/Google.png" className="w-7" />
                Sign Up with Google Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-blue-500">
        <div className="rounded-xl">
          <img
            src="/Mobile-dev.png"
            alt="mobile-dev"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
