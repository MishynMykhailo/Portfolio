import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <a href={"#Home"}>Home</a>
        </li>
        <li className={s.li}>
          <a href={"#Portfolio"}>Portfolio</a>
        </li>
        <li className={s.li}>
          <a href={"#Skills"}>Skills</a>
        </li>
        <li className={s.li}>
          <a href={"#Career"}>Career</a>
        </li>
        <li className={s.li}>
          <a href={"#About"}>About</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
