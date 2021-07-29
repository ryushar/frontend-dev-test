import * as React from "react";
import * as style from "../stylesheets/index/hero.module.scss";
import heroImageUrl from "../images/hero-image.jpg";
import brandLogosImageUrl from "../images/integration-brand-logos.png";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.partition_left}>
        <div className={style.main_text}>
          Don't worry.
          <br />
          We are here for every solution.
        </div>
        <div className={style.sub_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.
        </div>
        <div className={style.buttons_row}>
          <button className={style.button_get_started}>Get Started</button>
          <button className={style.button_watch_video} style={{ marginLeft: "1vw" }}>
            <span className="material-icons" style={{ marginRight: "0.5vw" }}>
              play_circle
            </span>{" "}
            Watch video
          </button>
        </div>
        <div className={style.integrations}>
          {"Integrations"}
          <img src={brandLogosImageUrl} className={style.integration_brands} />
        </div>
      </div>
      <div className={style.partition_right}>
        <img src={heroImageUrl} className={style.hero_image}></img>
      </div>
    </section>
  );
};

export default Hero;
