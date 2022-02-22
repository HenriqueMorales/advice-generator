import styled from "styled-components";

export default styled.button`
  height: 3.5rem;
  width: 3.5rem;
  background: hsl(150, 100%, 66%);
  border-radius: 50%;
  border: none;
  position: absolute;
  top: calc(100% - 28px);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    vertical-align: middle;
  }
`;
