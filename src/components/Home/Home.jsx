import React from "react";
import s from "./Home.module.css";

function Home() {
  return (
    <>
      <main>
        <div className={s.divSeparation}>
          <div className={s.left}>
            <div>IMAGE</div>
          </div>
          <div className={s.right}>
            <h1>
              Hi, I'm Mishyn Mykhailo.
              <p>FullStack Developer</p>
            </h1>
            <h2>I'm web developer, and I love what I do.</h2>
          </div>
        </div>
        <div className={s.down}>Download CV</div>
      </main>
    </>
  );
}

export default Home;
