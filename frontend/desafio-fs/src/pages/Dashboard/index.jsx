import {
  StyledButtonMedium,
  StyledButtonDefPrimaryInv,
} from "../../styles/button";
import { StyledDivDashboard } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { ProductsContext } from "../../contexts/productsContext";
import { ModalAddProducts } from "../../components/ModalAddProducts";
import { ModalEditProfile } from "../../components/ModalEditProfile";

export const Dashboard = () => {
  const {
    user,
    loadUser,
    logout,
    changeEditProfileModal,
    showEditProfileModal,
  } = useContext(UserContext);
  const { showAddModal, changeAddModal, products, loadProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    loadUser();
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user && (
        <StyledDivDashboard>
          <header>
            <div className="header__container">
              <h1>DFS</h1>

              <StyledButtonMedium onClick={() => logout()}>
                Logout
              </StyledButtonMedium>
            </div>
          </header>
          <div className="perfilBox">
            <div className="perfilBox__container">
              <div className="perfilBox__info">
                <h2>{user?.name}</h2>

                <p>Email: {user?.email}</p>
              </div>
              <div>
                <StyledButtonDefPrimaryInv onClick={changeEditProfileModal}>
                  Edit Profile
                </StyledButtonDefPrimaryInv>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="products__container">
              <div className="productsTitle">
                <h3>Products</h3>
                <StyledButtonMedium onClick={changeAddModal}>
                  +
                </StyledButtonMedium>
              </div>
              <div className="productsBox">
                <ul>
                  <li key={0} className="listTitles">
                    <h2>Name</h2>
                    <h2>Price</h2>
                    <h2>Description</h2>
                  </li>

                  {!products ? (
                    <h3>There are no registered products</h3>
                  ) : (
                    products.map((element) => (
                      <li key={element?.id} id={element?.id}>
                        <h3 id="productName">{element?.name}</h3>
                        <p id="productPrice">{element?.price}</p>
                        <p id="productDescription">{element?.description}</p>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
          {showAddModal && <ModalAddProducts />}
          {showEditProfileModal && <ModalEditProfile />}
        </StyledDivDashboard>
      )}
    </>
  );
};
