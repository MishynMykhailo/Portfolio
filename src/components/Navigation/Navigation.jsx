import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <a className={s.a} href={"#Home"}>
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
