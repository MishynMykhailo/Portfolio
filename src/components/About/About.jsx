import React from 'react';
import s from './About.module.scss';
import { ReactComponent as EducationSVG } from '../../images/about/education.svg';
import { ReactComponent as WorkSVG } from '../../images/about/work.svg';
function About() {
  return (
    <>
      <div className={s.div} id="about">
        <div className={s.section}>
          <h2 className={s.h2}>About</h2>
          <p className={s.p}>
            I am a full stack developer. I am focused on React, Node.js, JS,
            HTML5, CSS3. For me, development, practice and work for the result
            are important. I am looking for my first job to gain new experience
            and develop my skills to a new level. Ready for new knowledge.
          </p>
        </div>
        <div className={s.section}>
          <h2 className={s.h2}>Education</h2>
          <ul className={s.ulEducation}>
            <li className={s.liEducation}>
              <span>
                <EducationSVG className={s.educationSVG} />
              </span>
              <span className={s.span}>
                <p className={s.namePosition}>
                  Full stack Developer (Frontend + Backend) - IT School "GoIT"
                </p>
                <p>Oct 2021 - Oct 2022</p>
                <p>Full-Stack Developer</p>
              </span>
            </li>
            <li className={s.liEducation}>
              <span>
                <EducationSVG className={s.educationSVG} />
              </span>
              <span className={s.span}>
                <p className={s.namePosition}>
                  University of Customs and Finance{' '}
                </p>
                <p>2019 - 2023 Transport</p>
                <p>Technologies/Logistics</p>
              </span>
            </li>
          </ul>
        </div>
        <div className={s.section}>
          <h2 className={s.h2}>Work Expirience</h2>
          <ul className={s.ulWork}>
            <li className={s.liWork}>
              <span>
                <WorkSVG className={s.workSVG} />
              </span>
              <span>
                <p className={s.namePosition}>Front-End Developer</p>
                <p>Mar 2023 - ... | Plash</p>
                <p>
                  I work on the team that deals with arbitrage traffic and my
                  role is focused on the technical aspects of Frontend
                  development. My duties include:
                  <br />
                  1. Troubleshooting any issues that arise
                  <br />
                  2. Setting up the site before launching advertising campaigns
                  <br />
                  3. Ensure that the site is optimized for usability and
                  performance
                </p>
              </span>
            </li>
            <li className={s.liWork}>
              <span>
                <WorkSVG className={s.workSVG} />
              </span>
              <span>
                <p className={s.namePosition}>Content Manager</p>
                <p>Jun 2021 - Feb 2022 | Aliance</p>
                <p>
                  My duties included: Workedin the following CMS:
                  <br />
                  1. Tilda/WordPress/OpenCart.
                  <br />
                  2. Supervising my two subordinates. Control over the quality
                  of content. Search for products and descriptions for the right
                  niche.
                </p>
              </span>
            </li>
            <li className={s.liWork}>
              <span>
                <WorkSVG className={s.workSVG} />
              </span>
              <span>
                <p className={s.namePosition}>Sales Expert</p>
                <p>Apr 2021 - Jun 2021 | Vodafone</p>
                <p>
                  My duties included:
                  <br />
                  1. Working with people.
                  <br />
                  2. Assisting with
                  <br />
                  3. companyrelated issues. Selling retail products.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
