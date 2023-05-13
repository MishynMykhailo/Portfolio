import * as React from 'react';
import s from './Portfolio.module.scss';
import images from '../../images/portfolio';
function Portfolio() {
  return (
    <>
      <div className={s.div} id="portfolio">
        <h2 className={s.h2}>Portfolio</h2>
        <ul className={s.ul}>
          {images.map(image => {
            return (
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
                    <div class={s.overlayName}>{image.name}</div>
                    <div class={s.overlayDescription}>{image.desc}</div>
                    <div class={s.overlayLink}>
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
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
