import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav>
      <ul className={s.ul}>
        <li className={s.li}>Home</li>
        <li className={s.li}>Portfolio</li>
        <li className={s.li}>Skills</li>
        <li className={s.li}>Career</li>
        <li className={s.li}>About</li>
      </ul>
    </nav>
  );
};
export default Navigation;
