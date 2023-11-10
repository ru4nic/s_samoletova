import styled from 'styled-components';
import { Section } from '../layout/Styles';
import { IoCloseOutline } from 'react-icons/io5';
import overlay from '../../../assets/img/overlay.png';
import { padding, palette } from '../../../assets/misc/vars';

export const SectionPortfolio = styled(Section)`
  background-image: url(${overlay});
  background-size: 128px 128px, auto;
  /* background-color: #4e3d68; */
  background: ${palette.mainBrandColor};
  color: ${palette.darkShades};
`;
export const Content = styled.div`
  width: 22rem;
  padding: 3.5rem 0rem 2rem 3.5rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 736px) {
    width: 100%;
    padding: ${padding};
    padding-bottom: 0;
  }
`;
export const Inner = styled.div`
  padding: 3.5rem 3.5rem 2rem 3.5rem;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-direction: column;
  flex-wrap: wrap;

  width: 30rem;
  @media (max-width: 736px) {
    width: 100%;
    padding: ${padding};
    padding-top: 0;
    flex-direction: row;
  }
`;
export const ImageCircle = styled.img<{ $dialog?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.$dialog ? '0' : '50%')};
  cursor: ${(props) => (props.$dialog ? 'zoom-in' : '')};
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  object-position: 50% 20%;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.45);
  }
`;
export const Border = styled.div`
  padding: 3px;
  border-radius: 50%;
  /* border: 2px solid rgba(255, 255, 255, 0.274); */
  border: 2px solid ${palette.darkShades}50;
  width: 11rem;
  height: 11rem;
  position: relative;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      45deg,
      rgba(114, 97, 147, 0.25) 25%,
      rgba(227, 123, 124, 0.25) 50%,
      rgba(255, 228, 180, 0.25)
    );

    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  } */
  @media (max-width: 736px) {
    width: 11vmax;
    height: 11vmax;
  }
  @media (max-width: 480px) {
    width: 23vmin;
    height: 23vmin;
  }
`;
export const Underline = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: ${palette.darkShades};
    transition: width 0.2s ease-in-out;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    /* text-decoration: underline; */
    ${Underline}::after {
      width: 100%;
    }
    /* ${Border}::before {
      opacity: 0;
    } */
    ${Border} {
      transform: scale(1.02);
    }
  }
  .desc {
    text-align: center;
    font-size: 1.1rem;
    letter-spacing: 1px;
    @media (max-width: 736px) {
      font-size: 1rem;
      letter-spacing: unset;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20rem;
  @media (max-width: 736px) {
    grid-auto-rows: 20vmax;
  }
`;
export const DialogImage = styled.img`
  display: block;
  max-width: 90vw;
  max-height: 85vh;
`;

export const CloseButton = styled(IoCloseOutline)`
  position: absolute;
  top: ${(props) => (props.$dialogTitle ? '16px' : '0.5em')};
  right: ${(props) => (props.$dialogTitle ? '16px' : '0.5em')};
  color: ${(props) =>
    props.$dialogTitle ? palette.darkShades : palette.lightAccent};
  /* width: ${(props) => (props.$dialogTitle ? '2em' : '3em')};
  height: ${(props) => (props.$dialogTitle ? '2em' : '3em')}; */
  font-size: 2rem;
  border-radius: ${(props) => (props.$modal ? '4px' : '4px')};
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  background-color: ${(props) =>
    props.$dialogTitle ? '' : palette.darkShades};
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: ${palette.darkShades}e3;
    color: ${palette.lightShades};
  }
  @media (max-width: 736px) {
    /* top: ${(props) => (props.$dialogTitle ? '16px' : '4%')}; */
    right: ${(props) => (props.$dialogTitle ? '16px' : '3%')};
  }
  @media (max-width: 480px) {
    /* width: ${(props) => (props.$dialogTitle ? '2.2em' : '3em')};
    height: ${(props) => (props.$dialogTitle ? '2.2em' : '3em')}; */
  }
`;
export const StyledSwiperContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 3% auto;
  @media (max-width: 736px) {
    width: 100%;
    margin: auto;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 90vmin;
  @media (max-width: 736px) {
    height: 100vmax;
  }
`;
export const StyledSwiperImage = styled.div<{ $src?: boolean }>`
  background-image: ${(props) => `url(${props.$src})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* @media (max-width: 736px) {
    background-size: cover;
  } */
`;
