import images from 'images/certification';
import React from 'react';
import s from './Certification.module.scss';
const Certification = () => {
  return (
    <>
      <div className={s.div} id="certification">
        <h2 className={s.h2}>Certification</h2>
        <ul className={s.ul}>
          {images.map(({ name, img, link }) => {
            return (
              <li key={name} className={s.li}>
                <a href={link} target="_blank" rel="noreferrer">
                  <img src={img} alt={name} loading="lazy" min-height="50px" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Certification;
