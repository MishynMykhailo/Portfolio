import s from "./Navigation.module.css";

import { ReactComponent as HomeSVG } from "../../images/navigation/home.svg";
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <a className={s.a} href={"#Home"}>
            <HomeSVG className={s.homeSVG} />
            Home
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#Portfolio"}>
            Portfolio
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#Skills"}>
            Skills
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href={"#About"}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
