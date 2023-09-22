import React from 'react';
import s from './Footer.module.scss';
import { ReactComponent as GitHubSVG } from '../../images/footer/github.svg';
import { ReactComponent as LinkedinSVG } from '../../images/footer/linkedin.svg';
function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <h2 className={s.h2}>Conact me</h2>
        <ul className={s.ul}>
          <li className={s.li}>
            <a
              className={s.a}
              target="blank"
              href="https://github.com/MishynMykhailo/"
            >
              <GitHubSVG className={s.SVG} />
              <p className={s.p}>GitHub</p>
            </a>
          </li>
          <li className={s.li}>
            <a
              className={s.a}
              target="blank"
              href="https://www.linkedin.com/in/mykhailomishyn/"
            >
              <LinkedinSVG className={s.SVG} />
              <p className={s.p}>LinkedIn</p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
