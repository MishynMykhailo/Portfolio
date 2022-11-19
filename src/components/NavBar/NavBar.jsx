import React from 'react';
import s from './NavBar.module.scss';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

export default function NavBar() {
  return (
    <header className={s.header}>
      <nav className={s.mobileNav}>
        <MobileNavigation />
      </nav>
      <nav className={s.desktopNav}>
        <Navigation />
      </nav>
    </header>
  );
}
