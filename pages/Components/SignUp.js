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
            <h1 className="font-semibold text-3xl">Create an account</h1>
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
                  className="p-4 border-b-2 border-gray-200"
                />
                <input
                  {...register("userName", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Username"
                  className="p-4 border-b-2 border-gray-200"
                />
                <input
                  {...register("email", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Email"
                  className="p-4 border-b-2 border-gray-200"
                />
                <input
                  {...register("password", {
                    required: "This field is required ❗️",
                  })}
                  placeholder="Password"
                  className="p-4 border-b-2 border-gray-200"
                />
                <button type="submit" className="border-2 rounded-lg p-2">
                  Create Account
                </button>
              </form>
              <div className="border-2 rounded-lg p-2">
                Sign Up with Google Account
              </div>
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
