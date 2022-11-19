import React, { useState } from "react";
import s from "./ButtonScrollUp.module.css";
import { ReactComponent as ButtonScrollUpSVG } from "../../images/service/buttonScrollUp.svg";

function ButtonScrollUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
      }}
      className={s.btn}
    >
      <ButtonScrollUpSVG className={s.btnScroll} />
    </button>
  );
}

export default ButtonScrollUp;
