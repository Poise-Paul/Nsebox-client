import React from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
      watch,
    formState: { errors }
  } = useForm({
      defaultValues: {
          fullName: "",
          userName: "",
          email:"",
          password: "",
      }
  });
  const getForm = (data) => console.log("🟢", data);

  return (
    <div className="grid grid-cols-2 p-5">
      <div className="flex flex-col ">
        {/* Logo */}
        <div className="">
          <img src="/Nsebox-main-logo.png" alt="nsebox-logo" className="w-24" />
        </div>
        {/* Entry Fields */}
        <div className="p-40">
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
                <input
                  {...register("userName", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Username"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <input
                  {...register("email", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Email"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <input
                  {...register("password", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Password"
                  className="p-4 border-b-2 border-gray-200 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full text-white rounded-lg p-3 mt-10 bg-[#342c79]"
                >
                  Create Account
                </button>
              </form>
              <button className="border-2 mt-3  border-gray-400 flex justify-center gap-2 items-center rounded-lg p-3">
                <img src="/Google.png" className="w-7"/>
                Sign Up with Google Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
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
