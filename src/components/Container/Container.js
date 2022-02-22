import styled from "styled-components";

const Container = styled.main`
  background: hsl(217, 19%, 38%);
  min-width: 320px;
  max-width: 640px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 64px;
  box-shadow: 0 0 64px 4px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    svg {
      flex-shrink: 0;
    }

    &::before,
    &::after {
      content: "";
      width: 80%;
      height: 2px;
      background: hsl(193, 38%, 86%);
    }
  }

  @media (max-width: 768px) {
    padding: 32px 12px;
  }
`;

export default Container;
