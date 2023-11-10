import { useState } from 'react';
import Button from '@mui/material/Button';
import { SectionAbout, Content, Image, DialogImage } from './styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import img1 from '../../../assets/img/IMG_2_2.jpg';

import { CloseButton } from '../portfolio/styles';

type AboutProps = {
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
  isTablet: boolean;
};
const About = ({ setIsScrolling, isTablet }: AboutProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
    setIsScrolling(false);
  };
  const handleCloseDialog = () => {
    setOpen(false);
    setIsScrolling(true);
    if (isTablet) {
      setIsScrolling(false);
    }
  };
  return (
    <SectionAbout id="about">
      <Content>
        <h2 className="major">Знакомство со мной</h2>
        <p>
          Меня зовут Светлана Самолётова. Я фотограф и предлагаю свои услуги в
          Зеленограде и Москве.
        </p>

        <Button
          variant="contained"
          onClick={handleOpenDialog}
          sx={{ margin: '1rem 0 0 0' }}
        >
          Обо мне
        </Button>
      </Content>
      <Image data-position="top left" />
      <Dialog open={open} scroll="body">
        <DialogTitle>
          Обо мне
          <CloseButton $dialogTitle onClick={handleCloseDialog} />
        </DialogTitle>
        <DialogContent>
          <DialogImage src={img1} />
          <DialogContentText marginBottom="1rem">
            В детстве я часто бывала в роли модели, просила подружек поснимать
            меня, участвовала в различных мероприятиях. Я всегда внимательно
            следила за работой фотографов, наблюдая, как они ответственно
            подходят к процессу съемки, с каким желанием выполняют свою работу и
            как взаимодействуют с моделями. С годами я поняла, что хочу сама
            создавать красивые фотографии и помогать людям раскрывать их с
            другой стороны.
          </DialogContentText>
          <DialogContentText marginBottom="1rem">
            Опыт в мире фотографии у меня небольшой, всего лишь один год. Я
            снимаю в основном в свободное от работы время, но это не мешает мне
            учиться и развиваться в этом направлении.
          </DialogContentText>
          <DialogContentText>
            На данный момент для себя я выбрала съемку в таких жанрах как:
            портреты, семейные фотографии, детские фотосессии и концерты. Каждый
            жанр уникален по-своему, и в каждом из них мне нравится ловить
            настоящие, живые эмоции.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </SectionAbout>
  );
};
export default About;
