import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const navigate = useNavigate();

  async function loginUser(data) {
    try {
      const resp = await api.post("/login", data);
      const response = resp.data;
      localStorage.setItem("@DFS:TOKEN", response.token);
      localStorage.setItem("@DFS:USERID", response.id);
      toast.success("Login successful!");
      navigate("dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check email and password entered");
    }
  }

  async function loadUser() {
    const token = localStorage.getItem("@DFS:TOKEN");
    const userId = localStorage.getItem("@DFS:USERID");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function registerUser(data) {
    try {
      await api.post("/users", data);
      toast.success("Account created successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check the entered data and try again");
    }
  }

  async function editUser(data) {
    try {
      await api.patch(`/users/${user?.id}`, data);
      toast.success("Profile user successfully updated!");
      loadUser();
      changeEditProfileModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later");
    }
  }

  const changeEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        logout,
        changeEditProfileModal,
        editUser,
        showEditProfileModal,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
