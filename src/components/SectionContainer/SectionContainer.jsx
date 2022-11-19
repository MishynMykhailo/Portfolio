import React from 'react';
import s from './SectionContainer.module.scss';
function SectionContainer({ children }) {
  return <div className={s.section}>{children}</div>;
}

export default SectionContainer;
