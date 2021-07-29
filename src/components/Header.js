import * as React from "react";
import * as style from "../stylesheets/index/header.module.scss";
import logoImageUrl from "../images/logo.png";

const Header = () => {
  return (
    <div className={style.header}>
      <img className={style.logo} src={logoImageUrl} />
      <div className={style.navbar}>
        <a className={style.nav_link} href="#">
          Integration
        </a>
        <a className={style.nav_link} href="#">
          Pricing
        </a>
        <a className={style.nav_link} href="#">
          Blog
        </a>
        <a className={style.nav_link} href="#">
          About us
        </a>
      </div>
      <div className={style.spacer}></div>
      <button className={style.btn_early_access}>Get early access</button>
    </div>
  );
};

export default Header;
