import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAvatarFromGitHub } from "../../service/API";
import s from "./Home.module.css";

function Home() {
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    getAvatarFromGitHub().then(({ data }) => setUserAvatar(data.avatar_url));
  }, []);
  return (
    <>
      <main>
        <div className={s.divSeparation}>
          <div className={s.left}>
            <img
              className={s.img}
              src={userAvatar ? userAvatar : ""}
              alt="userAvatar"
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

        <button className={s.download} type="submit">
          <a href="https://drive.google.com/u/0/uc?id=1yVuD2zDmtBh-foqeAHuSpXGjT4_LzdG0&export=download">
            Download CV
          </a>
        </button>
      </main>
    </>
  );
}

export default Home;
