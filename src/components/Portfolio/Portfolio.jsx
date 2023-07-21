import * as React from 'react';
import { useState } from 'react';
import s from './Portfolio.module.scss';
import images from '../../images/portfolio';
function Portfolio() {
  const [testTaskFilter, setTestTaskFilter] = useState(Boolean);
  const [frontEndFilter, setFrontEndFilter] = useState(Boolean);
  const [backEndFilter, setBackEndFilter] = useState(Boolean);
  const handlerFilter = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case 'testTask':
        setTestTaskFilter(!testTaskFilter);
        setBackEndFilter(false);
        setFrontEndFilter(false);
        break;
      case 'frontEnd':
        setFrontEndFilter(!frontEndFilter);
        setTestTaskFilter(false);
        setBackEndFilter(false);
        break;
      case 'BackEnd':
        setBackEndFilter(!backEndFilter);
        setFrontEndFilter(false);
        setTestTaskFilter(false);
        break;
      default:
        break;
    }
  };

  const filteredImages = images.filter(image => {
    return (
      (testTaskFilter && image.filter === 'testtask') ||
      (frontEndFilter && image.filter === 'frontend') ||
      (backEndFilter && image.filter === 'backend') ||
      (testTaskFilter === false &&
        frontEndFilter === false &&
        backEndFilter === false)
    );
  });

  return (
    <>
      <div id="portfolio">
        <h2 className={s.h2}>Portfolio</h2>
        <div className={s.portfolioFilter}>
          <button
            className={s.btnFilter}
            name="testTask"
            id="testTask"
            onClick={e => handlerFilter(e)}
            style={
              testTaskFilter
                ? { backgroundColor: 'var(--primary-bg-color)' }
                : {}
            }
          >
            Test Task
          </button>
          <button
            className={s.btnFilter}
            name="frontEnd"
            id="frontEnd"
            onClick={e => handlerFilter(e)}
            style={
              frontEndFilter
                ? { backgroundColor: 'var(--primary-bg-color)' }
                : {}
            }
          >
            Front-End
          </button>
          <button
            className={s.btnFilter}
            name="BackEnd"
            id="BackEnd"
            onClick={e => handlerFilter(e)}
            style={
              backEndFilter
                ? { backgroundColor: 'var(--primary-bg-color)' }
                : {}
            }
          >
            BackEnd
          </button>
        </div>
        <ul className={`${s.ul} ${s.div}`}>
          {filteredImages.length > 0 ? (
            filteredImages.map(image => (
              <li key={image.name} className={s.li}>
                <img
                  className={s.img}
                  src={image.img}
                  alt={image.name}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
                <div className={s.overlay}>
                  <div>
                    <div className={s.overlayName}>{image.name}</div>
                    <div className={s.overlayDescription}>{image.desc}</div>
                    <div className={s.overlayLink}>
                      {image.demo.length > 0 && (
                        <a target="blank" href={image.demo} className={s.a}>
                          <p className={s.p}>Demo</p>
                        </a>
                      )}

                      <a target="blank" href={image.code} className={s.a}>
                        <p className={s.p}>Code</p>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <h2 className={s.errorCard}>Not found</h2>
          )}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
