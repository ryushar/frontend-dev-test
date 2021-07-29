import * as React from "react";
import * as style from "../stylesheets/index/header-mobile.module.scss";
import logoImageUrl from "../images/logo.png";

class HeaderMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  render() {
    return (
      <div className={style.header}>
        <img className={style.logo} src={logoImageUrl} />
        <div className={style.spacer}></div>
        <span
          className={["material-icons", style.menu_button].join(" ")}
          onClick={this._toggleMenu}
        >
          menu
        </span>
        <div
          className={style.navbar}
          style={{ transform: `translateY(100%) rotateX(${this.state.showMenu ? 0 : 90}deg)` }}
        >
          <a className={style.nav_link} href="#" onClick={this._onNavLinkClick}>
            Integration
          </a>
          <a className={style.nav_link} href="#" onClick={this._onNavLinkClick}>
            Pricing
          </a>
          <a className={style.nav_link} href="#" onClick={this._onNavLinkClick}>
            Blog
          </a>
          <a className={style.nav_link} href="#" onClick={this._onNavLinkClick}>
            About us
          </a>
          <button className={style.btn_early_access}>Get early access</button>
        </div>
      </div>
    );
  }

  _toggleMenu = () => {
    this.setState((prevState) => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  _onNavLinkClick = () => {
    this.setState({ showMenu: false });
  };
}

export default HeaderMobile;
