import React from "react";
import s from "./Skills.module.css";
function Skills() {
  return (
    <>
      <div className={s.div}>
        <h2>Skills</h2>
        <ul className={s.ul}>
          <li className={s.li}>
            <img />
            <p>HTML/CSS</p>
          </li>
          <li className={s.li}>
            <img />
            <p>JS</p>
          </li>
          <li className={s.li}>
            <img />
            <p>React</p>
          </li>
          <li className={s.li}>
            <img />
            <p>Redux</p>
          </li>
          <li className={s.li}>
            <img />
            <p>Node.js</p>
          </li>
          <li className={s.li}>
            <img />
            <p>Git</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
