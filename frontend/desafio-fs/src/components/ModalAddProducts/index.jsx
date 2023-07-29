import { StyledModalAdd } from "./style";
import { StyledInput } from "../../styles/input";
import { StyledButtonDefPrimary } from "../../styles/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

const schema = yup.object({
  name: yup.string().required("Product name is required"),
  price: yup.number().required("Product price is required"),
  description: yup.string().required("Product description is required"),
});

export const ModalAddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { addProduct, changeAddModal } = useContext(ProductsContext);

  return (
    <StyledModalAdd>
      <div className="modalBox">
        <div className="modalBox__title">
          <h3>Register product</h3>
          <button onClick={changeAddModal}>X</button>
        </div>
        <div className="modalBox__form">
          <form onSubmit={handleSubmit(addProduct)}>
            <label>Name</label>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the name"
              {...register("name")}
            />
            <small>{errors.name?.message}</small>

            <label htmlFor="name">Price</label>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the price"
              {...register("price")}
            />
            <small>{errors.price?.message}</small>

            <label htmlFor="name">Description</label>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the description"
              {...register("description")}
            />
            <small>{errors.description?.message}</small>

            <StyledButtonDefPrimary type="submit">
              Register product
            </StyledButtonDefPrimary>
          </form>
        </div>
      </div>
    </StyledModalAdd>
  );
};
