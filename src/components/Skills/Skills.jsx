import React from "react";
import s from "./Skills.module.css";
import { logoTechSkills } from "../../images/skills";
function Skills() {
  return (
    <>
      <div className={s.div}>
        <h2>Skills</h2>
        <ul className={s.ul}>
          <li className={s.li}>
            <img src={logoTechSkills.htmlLogo} alt="htmlLogo" />
            <p className={s.p}>HTML</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.cssLogo} alt="cssLogo" />
            <p className={s.p}>CSS</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.jsLogo} alt="jsLogo" />
            <p className={s.p}>JS</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.reactLogo} alt="reactLogo" />
            <p className={s.p}>React</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.reduxLogo} alt="reduxLogo" />
            <p className={s.p}>Redux</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.nodejsLogo} alt="nodejsLogo" />
            <p className={s.p}>Node.js</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.mongoDBLogo} alt="mongoDBLogo" />
            <p className={s.p}>MongoDB</p>
          </li>
          <li className={s.li}>
            <img src={logoTechSkills.gitLogo} alt="gitLogo" />
            <p className={s.p}>Git</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
