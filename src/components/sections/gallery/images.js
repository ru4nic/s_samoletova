import img1 from '../../../assets/img/01.jpg';
import img2 from '../../../assets/img/02.jpg';
import img3 from '../../../assets/img/03.jpg';
import img5 from '../../../assets/img/05.jpg';
import img6 from '../../../assets/img/06.jpg';
import img7 from '../../../assets/img/07.jpg';
import img8 from '../../../assets/img/08.jpg';
import galleryStyles from './gallery.module.scss';

export const firstGroup = [
  {
    src: img1,
    alt: '01',
    position: 'bottom',
    className: `${galleryStyles.span_3}`,
  },
  {
    src: img2,
    alt: '02',
    position: 'center',
    className: `${galleryStyles.span_1_5}`,
  },
  {
    src: img3,
    alt: '03',
    position: 'bottom',
    className: `${galleryStyles.span_1_5}`,
  },
];

export const secondGroup = [
  {
    src: img5,
    alt: '05',
    position: 'top',
    className: `${galleryStyles.span_3}`,
  },
  {
    src: img6,
    alt: '06',
    position: 'center',
    className: `${galleryStyles.span_1_5}`,
  },
  {
    src: img7,
    alt: '07',
    position: 'bottom',
    className: `${galleryStyles.span_1_5}`,
  },
  {
    src: img8,
    alt: '08',
    position: 'top',
    className: `${galleryStyles.span_3}`,
  },
];
