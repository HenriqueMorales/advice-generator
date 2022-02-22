import styled from "styled-components";

export default styled.footer`
  color: hsl(193, 38%, 86%);
  letter-spacing: 2px;
  font-size: 0.7rem;
  position: absolute;
  top: calc(100% - 40px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(320px, 100%, 440px);
  text-align: center;

  a {
    color: hsl(150, 100%, 66%);
  }
`;
