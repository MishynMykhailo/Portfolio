import React from "react";
import s from "./NavBar.module.css";
import Navigation from "../Navigation/Navigation";

export default function NavBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
