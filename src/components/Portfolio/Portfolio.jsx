import * as React from "react";
import s from "./Portfolio.module.css";
import images from "../../images/portfolio/";

function Portfolio() {
  return (
    <>
      <div className={s.div}>
        <h2 className={s.h2}>Project</h2>
        <ul className={s.ul}>
          {images.map((image) => {
            console.log(image);
            return (
              <li key={image.name} className={s.li}>
                <img className={s.img} src={image.img} alt={image.name} />
                <div className={s.overlay}>
                  <a href={image.demo} className={s.a}>
                    <p className={s.p}>Demo</p>
                  </a>
                  <a href={image.code} className={s.a}>
                    <p className={s.p}>Code</p>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
