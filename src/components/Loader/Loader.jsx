import React from "react";
import s from "./Loader.module.css";
import { ReactComponent as LoaderSVG } from "../../images/service/loader.svg";
function Loader() {
  return <LoaderSVG className={s.loader} />;
}

export default Loader;
