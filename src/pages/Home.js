import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo></Logo>
      <Navigation></Navigation>
      <Countries></Countries>
    </div>
  );
};

export default Home;
