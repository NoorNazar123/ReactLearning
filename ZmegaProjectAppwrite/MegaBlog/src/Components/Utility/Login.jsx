import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../Store/auth_slice";
import { Input, Button, Logo } from "../Utility";
import { Dispatch } from "@reduxjs/toolkit";
import authService from "../../Appwrte/auth_service";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handlerSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin);
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.massage);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full ma-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className=" inline-block w-full max-w-[100px]">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign to your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apost;t have any account?&nbsp;
          <Link
            to="/"
            className=" font-medium text-primary transition-all duration-200 hover:underline"
          >
            Singn Up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handlerSubmit(login)} className="mt-8">
          <div className=" space-y-5">
            <input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.
                  test(value) || "Email Adress must be a valid adress"
                }
              })}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
