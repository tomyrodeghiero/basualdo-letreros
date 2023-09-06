import React from "react";
import S from "./SectionSix.module.scss";
import imageSection06 from "../../assets/images/sections/section-06.jpg";

const SectionSix: React.FC = () => {
  return (
    <section data-scroll-section>
      <div className={S.section}>
        <div data-scroll data-scroll-speed="-10" className={S.videoWrapper}>
          <img src={imageSection06} alt="" className={S.img} />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
