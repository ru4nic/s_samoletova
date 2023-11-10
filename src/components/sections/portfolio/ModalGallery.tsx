import { useState, useEffect } from 'react';

import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { ImageCircle, Container, CloseButton } from './styles';
//@ts-ignore
import Carousel from './Carousel';
import { images, text } from './data';

type ModalGalleryProps = {
  currentDialog: string;
  handleCloseDialog: () => void;
};
export default function ModalGallery({
  currentDialog,
  handleCloseDialog,
}: ModalGalleryProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<number | string>('');
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      if (currentDialog !== undefined) {
        const resolvedImages = images[currentDialog].img;
        setLoadedImages(resolvedImages);
      }
    };

    loadImages();
  }, [currentDialog]);

  const handleOpenModal = (index: React.SetStateAction<number | string>) => {
    setOpen(true);
    setCurrentImg(index);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogTitle>
        {text[currentDialog].title}
        <CloseButton $dialogTitle onClick={handleCloseDialog} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText fontSize="1.3rem">
          {text[currentDialog].paragraph}
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <Container>
          {loadedImages.map((image: string, index: number) => {
            return (
              <ImageCircle
                $dialog
                src={image} // Используйте свойство `default`, чтобы получить URL изображения
                alt={images[currentDialog].title + index}
                key={index}
                onClick={() => handleOpenModal(index)}
              />
            );
          })}
        </Container>
      </DialogContent>
      <Modal
        open={open}
        onClose={handleCloseModal}
        sx={{
          '& .MuiModal-backdrop': {
            backgroundColor: 'rgba(0,0,0,0.97)',
          },
        }}
      >
        <>
          <CloseButton onClick={handleCloseModal} $modal />
          <Carousel
            currentImg={currentImg}
            currentDialog={currentDialog}
            loadedImages={loadedImages}
          />
        </>
      </Modal>
    </>
  );
}
