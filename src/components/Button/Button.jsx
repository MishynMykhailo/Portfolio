import React from 'react';
import s from './Button.module.scss';
function Button() {
  return (
    <button
      className={s.download}
      type="submit"
      onClick={() => {
        window.open(
          'https://drive.google.com/file/d/10pHuvOVjjd6paU_OpemXYbhn4FiXZmUZ/view?usp=sharing'
        );
      }}
    >
      <a
        className={s.a}
        target="blank"
        href="https://drive.google.com/file/d/10pHuvOVjjd6paU_OpemXYbhn4FiXZmUZ/view?usp=sharing"
      >
        Check CV
      </a>
    </button>
  );
}

export default Button;
