import React from "react";
import s from "./Skills.module.css";
function Skills() {
  return (
    <>
      <div className={s.div}>
        <h2>Skills</h2>
        <ul className={s.ul}>
          <li className={s.li}>HTML/CSS</li>
          <li className={s.li}>JS</li>
          <li className={s.li}>React</li>
          <li className={s.li}>Redux</li>
          <li className={s.li}>Node.js</li>
          <li className={s.li}>Git</li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
