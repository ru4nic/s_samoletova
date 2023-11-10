import { forwardRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { SectionPrice, Content, Container, ListItem, List } from './styles';
import { services } from '../portfolio/data';
import { palette } from '../../../assets/misc/vars';
import {
  Button,
  CardActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { CloseButton } from '../portfolio/styles';
import { text } from './data';

const ruble = String.fromCharCode(8381);

type PriceProps = {
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
  isTablet: boolean;
};
const Price = forwardRef(
  (
    { setIsScrolling, isTablet }: PriceProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false);
    const [currentDialog, setCurrentDialog] = useState('');

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
      <SectionPrice id="prices">
        <Content>
          <h2 className="major">Цены</h2>
          <p>
            Съемки провожу только в выходные дни. Бронируйте, пожалуйста, нужную
            вам дату и время за неделю или ранее.
          </p>
        </Content>
        <Container>
          {services.map((service) => {
            type Service = {
              title: string;
              img: string;
              price: number;
              id: number;
              type: string;
            };
            const { title, img, price, id, type }: Service = service;
            return (
              <Card
                key={id}
                sx={isTablet ? { maxWidth: '65vmin' } : {}}
                ref={ref}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={title}
                  sx={{
                    backgroundPosition: 'center',
                    height: isTablet ? '40vmin' : '10rem',
                    backgroundSize: '100%',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color={palette.darkShades}
                    fontSize="1.1rem"
                    fontFamily="Source Regular"
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    fontSize="2rem"
                    fontFamily="Source Bold"
                    color={palette.darkShades}
                  >
                    {price} {ruble} / час
                  </Typography>
                </CardContent>
                <CardActions disableSpacing={true}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(type)}
                  >
                    Подробнее
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Container>
        <Dialog
          open={open}
          onClose={handleCloseDialog}
          maxWidth="xs"
          // fullScreen={isTablet}
          scroll="body"
        >
          <DialogTitle>
            {text[currentDialog]?.title}
            <CloseButton $dialogTitle onClick={handleCloseDialog} />
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              fontSize="1.2rem"
              fontFamily="Source Regular"
              marginBottom="0.5rem"
            >
              В стоимость входит:
            </DialogContentText>
            <List>
              {text[currentDialog]?.services.map((service, index) => {
                return <ListItem key={index}>{service}</ListItem>;
              })}
            </List>
            {text[currentDialog]?.conditions.map((condition, index) => {
              return (
                <DialogContentText margin="0.6rem 0" key={index}>
                  {condition}
                </DialogContentText>
              );
            })}
          </DialogContent>
        </Dialog>
      </SectionPrice>
    );
  }
);
export default Price;
