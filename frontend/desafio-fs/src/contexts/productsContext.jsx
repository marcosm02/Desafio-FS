import { createContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const ProductsContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState(null);

  async function addProduct(data) {
    try {
      await api.post("/products", data);
      toast.success("Product created successfully!");
      loadProducts();
      changeAddModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check the information you sent");
    }
  }

  async function loadProducts() {
    const token = localStorage.getItem("@DFS:TOKEN");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

  const changeAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <ProductsContext.Provider
      value={{
        addProduct,
        showAddModal,
        changeAddModal,
        products,
        loadProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
