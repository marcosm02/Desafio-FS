import { StyledModalEdit } from "./style";
import { StyledInput } from "../../styles/input";
import { StyledButtonDefPrimary } from "../../styles/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Email is required"),
  password: yup.string(),
});

export const ModalEditProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { user, changeEditProfileModal, editUser } = useContext(UserContext);

  return (
    <StyledModalEdit>
      <div className="modalBox">
        <div className="modalBox__title">
          <h3>Profile details</h3>
          <button onClick={changeEditProfileModal}>X</button>
        </div>
        <div className="modalBox__form">
          <form onSubmit={handleSubmit(editUser)}>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the name"
              defaultValue={user?.name}
              {...register("name")}
            />
            <small>{errors.name?.message}</small>

            <label htmlFor="email">Email</label>
            <StyledInput
              type="text"
              id="email"
              placeholder="Enter the email"
              defaultValue={user?.email}
              {...register("email")}
            />
            <small>{errors.email?.message}</small>

            <label htmlFor="telephone">Password</label>
            <StyledInput
              type="text"
              id="password"
              placeholder="Enter the password"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>

            <div className="buttonBox">
              <StyledButtonDefPrimary type="submit" id="btnSaveAlt">
                Save editions
              </StyledButtonDefPrimary>
            </div>
          </form>
        </div>
      </div>
    </StyledModalEdit>
  );
};
