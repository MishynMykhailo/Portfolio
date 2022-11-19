import s from "./Navigation.module.css";

import { ReactComponent as HomeSVG } from "../../images/navigation/home.svg";
import { ReactComponent as ProjectsSVG } from "../../images/navigation/projects.svg";
import { ReactComponent as SkillsSVG } from "../../images/navigation/skills.svg";
import { ReactComponent as AboutSVG } from "../../images/navigation/about.svg";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <a className={s.a} href={"#home"}>
            <HomeSVG className={s.svgNav} />
            Home
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#portfolio"}>
            <ProjectsSVG className={s.svgNav} />
            Portfolio
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#skills"}>
            <SkillsSVG className={s.svgNav} />
            Skills
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#about"}>
            <AboutSVG className={s.svgNav} />
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
