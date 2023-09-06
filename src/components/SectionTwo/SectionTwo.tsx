import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
  return (
    <section id="section-two" data-scroll-section>
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>Nuestra Historia</h2>
          <p className={S.text}>
            Con más de 35 años de experiencia, en Basualdo Letreros Río 4 nos
            hemos dedicado a mejorar la identidad de marcas y negocios con alta
            calidad y creatividad.
          </p>
          <p className={S.text}>
            Desde letreros corpóreos hasta gráfica vehicular, utilizamos
            tecnología de punta y materiales duraderos para garantizar que su
            mensaje se destaque.
          </p>
          <p className={S.text}>
            Con envíos a todo el país, buscamos llevar la excelencia en
            comunicación visual a cada rincón de Argentina.
          </p>
          <Signature className={S.signature} />
          <p className={S.person}>
            Iván Basualdo, Fundador y Director Creativo
          </p>
        </div>
        <div className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <div data-scroll className={S.image} data-scroll-speed="-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
