import React from 'react';
import s from './Home.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAvatarFromGitHub } from '../../service/API';

function Home() {
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    getAvatarFromGitHub().then(({ data }) => setUserAvatar(data.avatar_url));
  }, []);
  return (
    <>
      <main className={s.main}>
        <div className={s.div} id="home">
          <div className={s.left}>
            <img
              className={s.img}
              src={userAvatar ? userAvatar : ''}
              alt="userAvatar"
              rel="preconnect"
            />
          </div>
          <div className={s.right}>
            <h1>
              Hi, I'm Mishyn Mykhailo.
              <p>FullStack Developer</p>
            </h1>
            <h2>I'm web developer, and I love what I do.</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
