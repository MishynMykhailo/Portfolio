import React from 'react';
import s from './Loader.module.scss';
import { ReactComponent as LoaderSVG } from '../../images/service/loader.svg';
function Loader() {
  return <LoaderSVG className={s.loader} />;
}

export default Loader;
