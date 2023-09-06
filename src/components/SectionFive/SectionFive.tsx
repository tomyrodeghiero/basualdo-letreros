import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import imageSection05 from "../../assets/images/sections/section-05.jpg";

type SectionFiveProps = {
  windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
  const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
  const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

  const ref = useRef<HTMLParagraphElement>(null);
  const isOnScreen = useIntersectionObserver(ref, 1);

  useEffect(() => {
    if (isOnScreen) {
      gsap.to("#lineRef > line", {
        duration: 2,
        ease: "expo.out",
        strokeDashoffset: 0,
      });
    }
  }, [isOnScreen]);

  return (
    <section id="section-five" data-scroll-section>
      <div id="target-element" className={S.section}>
        <Marquee
          pauseOnHover
          gradient={false}
          className={S.marquee}
          speed={windowWidth > 1024 ? 15 : 80}
        >
          <p className={S.marqueeText}>Letreros</p>
          <p className={S.marqueeText}>Corpóreos</p>
          <p className={S.marqueeText}>Gráfica</p>
          <p className={S.marqueeText}>Impresiones</p>
        </Marquee>
        <div className={S.main}>
          <h2
            data-scroll
            className={S.title1}
            data-scroll-direction="horizontal"
            data-scroll-speed={title1ScrollSpeed}
          >
            Alta
          </h2>
          <img className={S.image} src={imageSection05} alt="" />
          <h2
            data-scroll
            className={S.title2}
            data-scroll-direction="horizontal"
            data-scroll-target="#target-element"
            data-scroll-speed={title2ScrollSpeed}
          >
            Calidad
          </h2>
        </div>
        <div className={S.sub}>
          <p className={S.subText}>Eco-Amigable</p>
          <div className={S.subRow}>
            <Line
              id={"lineRef"}
              width="11.22vh"
              height="0.33vh"
              className={S.line1}
            />
            <p ref={ref} className={S.subText}>
              Diseño
            </p>
          </div>
          <div className={S.subRow}>
            <p className={S.subText}>Minimalista</p>
            <Line
              id={"lineRef"}
              width="11.22vh"
              height="0.33vh"
              className={S.line2}
            />
          </div>
        </div>
        <div className={S.textWrapper}>
          <p className={S.text}>
            En Basualdo Letreros, nos comprometemos a ofrecer soluciones de
            señalización y publicidad de alta calidad. Con un enfoque en la
            sostenibilidad y el diseño personalizado, nuestros productos están
            diseñados para hacer una declaración impactante. Ya sea que esté
            buscando letreros luminosos, señalización vial, publicidad exterior
            o impresiones de gran formato, tenemos la solución perfecta para
            usted. Nuestro equipo de expertos trabaja estrechamente con usted
            para entender sus necesidades y entregar un producto que no solo
            cumpla sino que supere sus expectativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
