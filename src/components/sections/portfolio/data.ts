import portret from '../../../assets/img/portrait.jpg';
import family from '../../../assets/img/family.jpg';
import children from '../../../assets/img/children.jpg';
import concert from '../../../assets/img/concert.jpg';

import individImg from '../../../assets/img/price_individual.jpg';
import concertImg from '../../../assets/img/price_concert.jpg';
import familyImg from '../../../assets/img/price_family.jpg';

type Sections = {
  title: string;
  img: string;
  width: string;
  type: string;
  id: number;
};
export const sections: Sections[] = [
  {
    title: 'Портретная',
    img: portret,
    width: '30%',
    type: 'portret',
    id: 111,
  },
  { title: 'Семейная', img: family, width: '30%', type: 'family', id: 112 },
  {
    title: 'Детская',
    img: children,
    width: '20%',
    type: 'children',
    id: 113,
  },
  {
    title: 'Репортажная',
    img: concert,
    width: '20%',
    type: 'reportage',
    id: 114,
  },
];
type Text = {
  [key: string]: {
    title: string;
    paragraph: string;
  };
};
export const text: Text = {
  portret: {
    title: 'Индивидуальная съемка',
    paragraph:
      'Индивидуальная фотосессия - это самая необычная и волшебная съемка. На ней мы работаем с вами один на один и вместе создаем красивые и уникальные кадры. Эти фотографии могут быть как красивыми портретами, так и снимками, которые рассказывают историю о вас и вашей жизни.',
  },
  family: {
    title: 'Семейная съемка',
    paragraph:
      'Семейная фотосессия — это искусство уловить моменты любви, связи и тепла внутри семьи, создавая воспоминания о единстве и нежности. Съемка от 2 до 6 человек',
  },
  children: {
    title: 'Детская съемка',
    paragraph:
      'Детская фотосессия - это момент, когда фотография становится не просто изображением, а сказкой, рассказываемой через улыбки, игры и мечты детей, захватывая их магией и душевностью. Съемка деток до 3х лет',
  },
  reportage: {
    title: 'Концертная съемка',
    paragraph:
      'Репортажная и концертная съемка - это фотографии, на которых запечатлены моменты и события в естественной и динамичной форме. Они рассказывают истории, передают эмоции и атмосферу момента или мероприятия.',
  },
};
type Services = {
  title: string;
  type: string;
  price: number;
  img: string;
  id: number;
};
export const services: Services[] = [
  {
    title: 'Индивидуальная фотосессия',
    type: 'portret',
    price: 1500,
    img: individImg,
    id: 331,
  },
  {
    title: 'Репортаж/Концертная съемка',
    type: 'reportage',
    price: 2500,
    img: concertImg,
    id: 332,
  },
  {
    title: 'Семейная/Детская фотосессия',
    type: 'family',
    img: familyImg,
    price: 2500,
    id: 333,
  },
];

type Images = {
  [key: string]: {
    title: string;
    img: string[];
    id: number;
  };
};
export const images: Images = {
  portret: {
    title: 'portret',
    img: [],
    id: 221,
  },
  family: {
    title: 'family',
    img: [],
    id: 222,
  },
  children: {
    title: 'children',
    img: [],
    id: 223,
  },
  reportage: {
    title: 'concert',
    img: [],
    id: 224,
  },
};

async function loadImage(section: string, count: number) {
  for (let i = 1; i <= count; i++) {
    const imagePath = import(`../../../assets/img/${section}/${i}.jpg`);
    images[section].img.push((await imagePath).default);
  }
}

loadImage('portret', 30);
loadImage('family', 12);
loadImage('children', 14);
loadImage('reportage', 33);

// //Цикл импортов для портретных фоток
// for (let i = 1; i <= 30; i++) {
//   const imagePath = import(`../../../assets/img/portret/${i}.jpg`);
//   images.portret.img.push(imagePath.default);
// }
// //Цикл импортов для семейных фоток
// for (let i = 1; i <= 12; i++) {
//   const imagePath = import(`../../../assets/img/family/${i}.jpg`);
//   images.family.img.push(imagePath.default);
// }
// //Цикл импортов для детских фоток
// for (let i = 1; i <= 14; i++) {
//   const imagePath = import(`../../../assets/img/children/${i}.jpg`);
//   images.children.img.push(imagePath.default);
// }
// //Цикл импортов для репортажных фоток
// for (let i = 1; i <= 33; i++) {
//   const imagePath = import(`../../../assets/img/reportage/${i}.jpg`);
//   images.reportage.img.push(imagePath.default);
// }
