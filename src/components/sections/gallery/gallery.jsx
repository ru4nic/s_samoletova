import { useState } from 'react';
import { firstGroup, secondGroup } from './images';
import galleryStyles from './gallery.module.scss';
import panelStyles from '../layout/panel.module.css';
import img4 from '../../../assets/img/04.jpg';
import img9 from '../../../assets/img/09.jpg';
import Dialog from '@mui/material/Dialog';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleClickOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={`${panelStyles.panel}`}>
      <div className={`${galleryStyles.fourth}`}>
        <h2 className="major">Elit integer</h2>
        <p>
          Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
          congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet
          sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.
        </p>
      </div>
      <div className={`${galleryStyles.gallery}`}>
        <div className={`${galleryStyles.group} ${galleryStyles.span_3}`}>
          {firstGroup.map((item) => {
            return (
              <a
                key={item.alt}
                onClick={() => handleClickOpen(item.src)}
                className={`${galleryStyles.image} ${item.className}`}
                data-position={item.position}
              >
                <img src={item.src} alt={item.alt} />
              </a>
            );
          })}
        </div>
        <a
          onClick={() => handleClickOpen(img4)}
          className={`${galleryStyles.image} ${galleryStyles.span_2_5}`}
          data-position="top"
        >
          <img src={img4} alt="04" />
        </a>
        <div className={`${galleryStyles.group} ${galleryStyles.span_4_5}`}>
          {secondGroup.map((item) => {
            return (
              <a
                key={item.alt}
                onClick={() => handleClickOpen(item.src)}
                className={`${galleryStyles.image} ${item.className}`}
                data-position={item.position}
              >
                <img src={item.src} alt={item.alt} />
              </a>
            );
          })}
        </div>
        <a
          onClick={() => handleClickOpen(img9)}
          className={`${galleryStyles.image} ${galleryStyles.span_2_5}`}
          data-position="right"
        >
          <img src={img9} alt="09" />
        </a>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
        scroll={'paper'}
      >
        <img className={galleryStyles.dialogImg} src={currentImg} />
      </Dialog>
    </section>
  );
};
export default Gallery;
