/* eslint-disable react/no-unescaped-entities */
import { StyledButtonDefPrimary } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { StyledDivLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const schema = yup.object({
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Enter a valid email"),
  password: yup.string().required("Enter password to login"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { loginUser } = useContext(UserContext);

  return (
    <StyledDivLogin>
      <h1>DFS</h1>
      <div className="loginBox">
        <form onSubmit={handleSubmit(loginUser)}>
          <h2>Login</h2>

          <div className="formBox">
            <label htmlFor="email">Email</label>

            <StyledInput
              type="email"
              id="email"
              placeholder="Type your e-mail"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
          </div>

          <div className="formBox">
            <label htmlFor="password">Password</label>

            <StyledInput
              type="password"
              id="password"
              placeholder="Type your password"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>
          </div>

          <StyledButtonDefPrimary type="submit">Sign in</StyledButtonDefPrimary>
        </form>

        <div className="registerBox">
          <small>Don't have an account yet?</small>

          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </StyledDivLogin>
  );
};
