import React, { useState } from 'react';
import s from './MobileNavigation.module.scss';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as HamburgerMenuSVG } from '../../images/service/hamburgerMenu.svg';
import { ReactComponent as ClosedHamburgerMenuSVG } from '../../images/service/closedHamburgerMenu.svg';

function MobileNavigation() {
  const [hambMenu, setHambMenu] = useState(false);
  return (
    <>
      {!hambMenu ? (
        <HamburgerMenuSVG
          className={s.svg}
          onClick={() => setHambMenu(!hambMenu)}
        />
      ) : (
        <ClosedHamburgerMenuSVG
          className={s.svg}
          onClick={() => setHambMenu(!hambMenu)}
        />
      )}
      {hambMenu && <Navigation />}
    </>
  );
}

export default MobileNavigation;
