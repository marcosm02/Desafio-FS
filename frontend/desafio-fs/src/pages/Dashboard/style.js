import styled from "styled-components";

export const StyledDivDashboard = styled.div`
  header {
    width: 100%;
    padding: 1rem;

    border-bottom: 1px solid var(--color-grey-2);

    @media (min-width: 769px) {
      padding: 1.75rem 1rem;
    }
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    @media (min-width: 769px) {
      width: 60%;
      margin: 0 auto;
    }
  }

  .perfilBox {
    width: 100%;
    padding: 2rem 1rem;

    border-bottom: 1px solid var(--color-grey-2);

    @media (min-width: 769px) {
      padding: 2.8rem 1rem;
    }
  }

  .perfilBox__container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: var(--color-grey-3);
    padding: 1rem;
    border-radius: 0.25rem;

    @media (min-width: 769px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 60%;
      margin: 0 auto;
    }
  }

  .perfilBox__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-grey-0);
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-1);
    }
  }

  .products {
    width: 100%;
    padding: 1.5rem 1rem;
  }

  .products__container {
    @media (min-width: 769px) {
      width: 60%;
      margin: 0 auto;
    }
  }

  .productsTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-grey-0);
    }

    & > button {
      font-size: 1.25rem;
      padding: 0.5rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .productsBox {
    width: 100%;
    margin-top: 1.25rem;
    padding: 1.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary-hover);

    @media (min-width: 769px) {
      padding: 1.25rem;
    }

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & > ul > li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 3rem;
      padding: 0 0.75rem;
      border-radius: 0.25rem;

      background-color: var(--color-grey-4);
    }

    .listTitles {
      background-color: var(--color-primary-hover);
      border-bottom: 0.063rem solid var(--color-grey-3);
      h2 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-grey-0);
      }
    }

    #productName {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-grey-0);
    }

    #productPrice {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-1);
    }

    #productDescription {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-1);
    }
  }
`;
