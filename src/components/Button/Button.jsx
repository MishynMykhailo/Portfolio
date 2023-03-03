import React from 'react';
import s from './Button.module.scss';
function Button() {
  return (
    <button
      className={s.download}
      type="submit"
      onClick={() => {
        window.open(
          'https://drive.google.com/file/d/1U_SXj33yGaE7sox2J1U67R1DiBP6ujTI/view?usp=sharing'
        );
      }}
    >
      <a
        className={s.a}
        target="blank"
        href="https://drive.google.com/file/d/1U_SXj33yGaE7sox2J1U67R1DiBP6ujTI/view?usp=sharing"
      >
        Check CV
      </a>
    </button>
  );
}

export default Button;
