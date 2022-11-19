import React from 'react';
import s from './Button.module.scss';
function Button() {
  return (
    <button
      className={s.download}
      type="submit"
      onClick={() => {
        window.open(
          'https://drive.google.com/u/0/uc?id=1yVuD2zDmtBh-foqeAHuSpXGjT4_LzdG0'
        );
      }}
    >
      <a
        className={s.a}
        target="blank"
        href="https://drive.google.com/u/0/uc?id=1yVuD2zDmtBh-foqeAHuSpXGjT4_LzdG0&export"
      >
        Check CV
      </a>
    </button>
  );
}

export default Button;
