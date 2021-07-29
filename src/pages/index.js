import * as React from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Hero from "../components/Hero";
import "../stylesheets/global.scss";
import * as style from "../stylesheets/index.module.scss";

// markup
const IndexPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <HeaderMobile />
      <Hero />
    </div>
  );
};

export default IndexPage;
