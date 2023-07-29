import { StyledButtonDefPrimary } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { StyledDivRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { registerUser } = useContext(UserContext);

  return (
    <StyledDivRegister>
      <div className="logoBox">
        <h1>DFS</h1>

        <Link to="/">Return</Link>
      </div>
      <div className="registerBox">
        <div className="titleBox">
          <h2>Create your account</h2>
        </div>

        <form onSubmit={handleSubmit(registerUser)}>
          <div className="formBox">
            <label htmlFor="name">Name</label>

            <StyledInput
              type="text"
              id="name"
              placeholder="Enter your name here"
              {...register("name")}
            />
            <small>{errors.name?.message}</small>
          </div>

          <div className="formBox">
            <label htmlFor="email">Email</label>

            <StyledInput
              type="text"
              id="email"
              placeholder="Enter your email here"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
          </div>

          <div className="formBox">
            <label htmlFor="password">Password</label>

            <StyledInput
              type="password"
              id="password"
              placeholder="Enter your password here"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>
          </div>

          <StyledButtonDefPrimary type="submit">
            Register
          </StyledButtonDefPrimary>
        </form>
      </div>
    </StyledDivRegister>
  );
};
