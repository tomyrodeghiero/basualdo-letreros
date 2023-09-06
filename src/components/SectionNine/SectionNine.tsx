import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
  windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
  const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

  return (
    <section id="section-nine" data-scroll-section>
      <div className={S.section}>
        <div className={S.left}>
          <p className={S.text}>
            Descubre más fotos de nuestros letreros y señalizaciones
          </p>
          <Link to="/gallery">
            <div className={S.button}>
              <Button use="section-nine" text="Ir a la Galería" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
