import gsap from "gsap";
import S from "./SectionThree.module.scss";
import React, { useEffect, useRef } from "react";
import locomotiveScrub from "../../animations/utils/locomotive-scrub";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import imageSection03 from "../../assets/images/sections/section-03.jpg";

type SectionThreeProps = {
  scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
  let progress: number;
  const ref = useRef<HTMLDivElement>(null);
  const SVGRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isOnScreen = useIntersectionObserver(ref, 0.125);

  useEffect(() => {
    if (isOnScreen && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 4,
        ease: "expo.out",
        clipPath: "inset(0% 0% 0% 0%)",
      });
    }
  }, [isOnScreen, imageRef.current]);

  useEffect(() => {
    if (scroll) {
      const tl = gsap.timeline({ paused: true });
      tl.to(SVGRef.current, {
        duration: 8,
        rotate: 720,
      });
      locomotiveScrub(scroll, "section-three", progress, tl);
    }
  }, [scroll]);

  return (
    <section data-scroll data-scroll-section data-scroll-id="section-three">
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>Diseños con Pasión, Para Usted</h2>
          <p className={S.text}>
            En un mundo donde la comunicación visual es esencial, Basualdo
            Letreros ofrece más que simples letreros: ofrecemos identidad. No es
            solo lo que mostramos, sino cómo lo mostramos. Son los pequeños
            detalles los que marcan la diferencia.
          </p>
        </div>
        <div ref={ref} className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <img
              alt=""
              ref={imageRef}
              className={S.image}
              src={imageSection03}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
