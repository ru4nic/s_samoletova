import styled from 'styled-components';
import overlay from '../../../assets/img/overlay.png';
import photo from '../../../assets/img/IMG_3.jpg';
import { Section } from '../layout/Styles';
import { padding, palette } from '../../../assets/misc/vars';

export const SectionAbout = styled(Section)`
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  width: 50rem;
  color: ${palette.lightShades};
  @media (max-width: 736px) {
    width: 100%;
    min-height: 20rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 23.5rem 2rem 3.5rem;
  background-image: linear-gradient(
    43deg,
    rgba(0, 0, 0, 0.55) 6%,
    rgba(0, 0, 0, 0.525) 46%,
    rgba(0, 0, 0, 0.025) 53%
  );
  // width: 70%;
  z-index: 1;
  @media (max-width: 736px) {
    padding: ${padding};
    /* min-height: 25rem; */
    background-image: linear-gradient(
      90deg,
      rgb(0, 0, 0, 0.8) 13%,
      rgba(0, 0, 0, 0.55) 70%,
      rgba(0, 0, 0, 0.005)
    );
    width: 60%;
    min-height: 20rem;
  }
`;
export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::after {
    background-image: url(${overlay}),
      /* linear-gradient(
        45deg,
        rgba(114, 97, 147, 0.25) 25%,
        rgba(227, 123, 124, 0.25) 50%,
        rgba(255, 228, 180, 0.25)
      ), */
        /* linear-gradient(
          90deg,
          rgb(0, 0, 0, 1) 13%,
          rgba(0, 0, 0, 0.25) 70%,
          rgba(0, 0, 0, 0.025)
        ), */
        /* linear-gradient(
          90deg,
          rgb(0, 0, 0, 1) -20%,
          ${palette.lightAccent} 70%,
          rgba(0, 0, 0, 0.025)
        ), */ url(${photo});
    background-size: 128px 128px, 120% 120%;
    background-position: 0% 40%;
    background-repeat: no-repeat;
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 1;
    @media (max-width: 736px) {
      background-size: 128px 128px, 130% auto;
      background-position: 0% 20%;
      background-image: url(${overlay}),
        /* linear-gradient(
          45deg,
          rgba(114, 97, 147, 0.25) 25%,
          rgba(227, 123, 124, 0.25) 50%,
          rgba(255, 228, 180, 0.25)
        ), */
          url(${photo});
    }
    @media (max-width: 480px) {
      background-size: 128px 128px, cover;
      background-position: 30% 20%;
    }
  }

  img {
    object-fit: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: top left;
  }
`;
export const DialogImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 4px;
  float: left;
  margin: 0 1rem 1rem 0;
`;
