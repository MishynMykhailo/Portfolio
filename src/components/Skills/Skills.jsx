import React from 'react';
import s from './Skills.module.scss';
import images from '../../images/skills';
function Skills() {
  return (
    <>
      <div className={s.div} id="skills">
        <h2 className={s.h2}>Skills</h2>
        <ul className={s.ul}>
          {images.map(({ name, img }) => {
            return (
              <li key={name} className={s.li}>
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  width="70px"
                  min-height="50px"
                />
                <p className={s.p}>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Skills;
