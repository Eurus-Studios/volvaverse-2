import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Home from "../components/mainComponents/Home";
import About from "../components/mainComponents/About";

const Main = () => {
  return (
    <Layout title={"Volaverse"}>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
    </Layout>
  );
};

export default Main;
