import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import imageSection08A from "../../assets/images/sections/section-08-a.jpg";
import imageSection08B from "../../assets/images/sections/section-08-b.jpg";

type SectionEightProps = {
  windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
  const refs = useRefArray<SVGSVGElement>(5);
  const linesVisibility: boolean[] = [
    useIntersectionObserver(refs[0], 1),
    useIntersectionObserver(refs[1], 1),
    useIntersectionObserver(refs[2], 1),
    useIntersectionObserver(refs[3], 1),
    useIntersectionObserver(refs[4], 1),
  ];

  useEffect(() => {
    if (!refs) return;
    refs.forEach((ref, i) => {
      if (linesVisibility[i]) {
        gsap.to(ref.current?.firstChild, {
          delay: windowWidth > 1024 ? 0.5 : 0.2,
          duration: 2.5,
          ease: "expo.out",
          strokeDashoffset: 0,
        });
      }
    });
  }, [linesVisibility, refs]);

  return (
    <section id="section-eight" data-scroll-section>
      <div className={S.section}>
        <div className={S.box}>
          <LongLine
            ref={refs[0]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Letreros Iluminados</p>
          <p className={S.text}>
            Los letreros iluminados de Basualdo Letreros ofrecen una combinación
            de diseño elegante con tecnología moderna. Utilizamos LED de alta
            calidad para asegurar que su mensaje se vea claro y brillante.
          </p>
          <img
            className={S.img}
            src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/7-1_y73bqk.png"
            alt="her"
          />
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[1]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Impresión de Gran Formato</p>
          <p className={S.text}>
            Ofrecemos servicios de impresión de gran formato con una amplia gama
            de materiales. Ideal para banners, murales y gráficos de ventanas.
          </p>
          <img className={S.img} src={imageSection08A} alt="" />
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[2]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Corpóreos</p>
          <p className={S.text}>
            Ofrecemos soluciones de Corpóreos personalizados que se adaptan a
            las necesidades específicas de tu negocio. Desde letreros
            direccionales hasta placas identificativas, cubrimos una amplia gama
            de opciones.
          </p>
          {/* <img className={S.img} src={imageSection08B} alt="" /> */}
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[3]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Letreros para Vehículos</p>
          <p className={S.text}>
            Transforma tus vehículos en plataformas publicitarias móviles con
            nuestros servicios de rotulación y envoltura para vehículos.
            Utilizamos materiales de alta calidad para garantizar durabilidad y
            visibilidad.
          </p>
          <img className={S.img} src={imageSection08B} alt="" />
          <LongLine
            ref={refs[4]}
            className={S.line}
            windowWidth={windowWidth}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
