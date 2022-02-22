import styled from "styled-components";

const Advice = styled.p`
  color: hsl(193, 38%, 86%);
  font-size: 1.75rem;
  text-align: center;

  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

export default Advice;
