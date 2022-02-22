import React, { useEffect, useState } from "react";
import Advice from "./components/Advice/Advice";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import GlobalStyles from "./styles/GlobalStyles";
import { BsFillPauseFill } from "react-icons/bs";
import axios from "axios";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState("");

  const getAdvice = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setAdvice((prevValue) => data.slip.advice);
      setAdviceNumber((prevValue) => data.slip.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>ADVICE #{adviceNumber}</Title>
        <Advice>{advice}</Advice>
        <div>
          <BsFillPauseFill color="hsl(193, 38%, 86%)" size="32px" />
        </div>
        <Button handleClick={getAdvice} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
