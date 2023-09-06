import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionSeven.module.scss";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";
import imageSection07 from "../../assets/images/sections/section-07.jpg";

type SectionSevenProps = {
  windowWidth: number;
};

const SectionSeven: React.FC<SectionSevenProps> = ({ windowWidth }) => {
  return (
    <section data-scroll-section>
      <div className={S.section}>
        <div className={S.marqueeSection}>
          <Marquee
            pauseOnHover
            gradient={false}
            className={S.marquee}
            speed={windowWidth > 1024 ? 15 : 80}
          >
            <p className={S.marqueeText}>Basualdo Letreros</p>
            <p className={S.marqueeText}>Basualdo Letreros</p>
            <p className={S.marqueeText}>Basualdo Letreros</p>
            <p className={S.marqueeText}>Basualdo Letreros</p>
          </Marquee>
        </div>
        <div className={S.main}>
          <div className={S.up}>
            <div className={S.left}>
              <div className={S.row}>
                <Line
                  id={"lineRef"}
                  width="5vh"
                  height="0.33vh"
                  className={S.line1}
                />
                <p className={S.largeText}>Diseño de Letreros</p>
              </div>
              <div className={S.row2}>
                <Plus />
              </div>
              <div className={S.row3}>
                <p className={S.largeText}>Impresión Digital</p>
                <Line
                  id={"lineRef"}
                  width="5vh"
                  height="0.33vh"
                  className={S.line2}
                />
              </div>
            </div>
            <div className={S.right}>
              <p className={S.smallText}>
                Creemos que los letreros y la gráfica deben ser más que
                funcional. Nos esforzamos por ofrecer soluciones de alta calidad
                que sean tanto elegantes como efectivas.
              </p>
            </div>
          </div>
          <div className={S.down}>
            <img
              className={S.img}
              //   src={
              //     windowWidth > 1024
              //       ? "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637522594/it/6_eda4xd.png" // Puedes cambiar esto por una imagen relevante para Basualdo Letreros
              //       : "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1639309634/it/6-mobile_rk62d6.png" // Puedes cambiar esto por una imagen relevante para Basualdo Letreros
              //   }
              src={imageSection07}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionSeven;
