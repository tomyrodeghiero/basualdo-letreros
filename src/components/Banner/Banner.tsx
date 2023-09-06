import React from "react";
import S from "./Banner.module.scss";

const Banner = () => {
  return (
    <div id="banner" className={S.banner}>
      <p data-splitting="" className={`${S.textOne} split-text hidden-init`}>
        Basualdo Letreros Río 4
      </p>
      <p data-splitting="" className={`${S.textTwo} split-text hidden-init`}>
        Más de 35 años dedicándonos a la Comunicación Visual
      </p>
    </div>
  );
};

export default Banner;
