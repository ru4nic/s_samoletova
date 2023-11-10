import { useState } from 'react';

import Dialog from '@mui/material/Dialog';

import {
  SectionPortfolio,
  Content,
  Inner,
  Link,
  Border,
  ImageCircle,
  Underline,
} from './styles';
import ModalGallery from './ModalGallery';
import { sections } from './data';
import { useMediaQuery } from '@mui/material';

type PortfolioProps = {
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
  isTablet: boolean;
};
const Portfolio = ({ setIsScrolling, isTablet }: PortfolioProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentDialog, setCurrentDialog] = useState<string>('');

  const isMobile = useMediaQuery('(max-width: 736px)');

  const handleOpenDialog = (section: string) => {
    setOpen(true);

    setCurrentDialog(section);
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
    <SectionPortfolio id="portfolio">
      <Content>
        <h2 className="major">Портфолио</h2>
        <p>
          Фотография для меня - это способ запечатлеть моменты жизни: важные
          события, людей, красивые места и живые эмоции, которые можно
          пересматривать в любое время.
        </p>
      </Content>
      <Inner>
        {sections.map((section) => {
          const {
            title,
            type,
            img,
            id,
          }: { title: string; type: string; img: string; id: number } = section;
          return (
            <Link onClick={() => handleOpenDialog(type)} key={id}>
              <Border>
                <ImageCircle src={img} alt={title} />
              </Border>
              <div className="desc">
                <Underline>{title}</Underline>
              </div>
            </Link>
          );
        })}
      </Inner>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth={isMobile ? false : 'lg'}
        fullScreen={isMobile ? true : false}
        scroll="body"
        sx={{
          '& .MuiBackdrop-root ': {
            backgroundColor: 'rgba(0,0,0,0.93)',
          },
        }}
      >
        <ModalGallery
          currentDialog={currentDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </Dialog>
    </SectionPortfolio>
  );
};
export default Portfolio;
