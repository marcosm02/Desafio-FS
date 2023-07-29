import styled from "styled-components";

export const StyledButtonDefPrimary = styled.button`
  background-color: var(--color-primary);
  border: 0.063rem solid var(--color-primary);
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  height: 2.375rem;
  padding: 0 1.375rem;

  &:hover {
    background-color: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }

  @media (min-width: 769px) {
    & {
      height: 3rem;
    }
  }
`;

export const StyledButtonDefPrimaryInv = styled.button`
  background-color: var(--color-primary-hover);
  border: 0.063rem solid var(--color-primary-hover);
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  height: 2.375rem;
  padding: 0 1.375rem;

  &:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  @media (min-width: 769px) {
    & {
      height: 3rem;
    }
  }
`;

export const StyledButtonDefGrey = styled.button`
  background-color: var(--color-grey-1);
  border: 0.063rem solid var(--color-grey-1);
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  height: 2.375rem;
  padding: 0 1.375rem;

  &:hover {
    background-color: var(--color-grey-2);
    border-color: var(--color-grey-2);
  }

  @media (min-width: 769px) {
    & {
      height: 3rem;
    }
  }
`;

export const StyledButtonMedium = styled.button`
  background-color: var(--color-grey-3);
  border: 0.063rem solid var(--color-grey-3);
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  height: 2rem;
  padding: 0 1rem;

  &:hover {
    background-color: var(--color-grey-2);
    border-color: var(--color-grey-2);
  }
`;
