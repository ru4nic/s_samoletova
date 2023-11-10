import styled from 'styled-components';
//@ts-ignore
import { Link } from 'react-scroll';
import { FaAngleRight } from 'react-icons/fa';

import overlay from '../../../assets/img/overlay.png';
import { padding, palette } from '../../../assets/misc/vars';

export const Title = styled.h1<{ $drawer?: boolean }>`
  font-size: ${(props) => (props.$drawer ? '1.6vmax' : '5vmin')};
  line-height: ${(props) => (props.$drawer ? '2.3' : '')};
  grid-area: title;
  margin: 0;
  font-weight: 300;
  /* align-self: flex-end; */
  letter-spacing: 1px;
  color: ${palette.darkShades};
`;
export const Content = styled.div`
  /* background-image: url(${overlay}),
    linear-gradient(270deg, #0d0b0b 5%, #8248b3 40%, #222e48); */
  background: ${palette.lightAccent};
  background-size: 128px 128px, auto;
  padding: 3.5rem 3.5rem 2rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  /* width: 37.5rem; */
  color: ${palette.lightShades};
  @media screen and (max-width: 736px) and (orientation: portrait) {
    padding: ${padding};
    -moz-flex-basis: auto;
    -webkit-flex-basis: auto;
    -ms-flex-basis: auto;
    flex-basis: auto;
    width: 100%;
    /* height: 10rem; */
  }
`;
export const WrapperLink = styled.ul`
  margin-top: 2rem;
  margin-left: 3em;
  @media (max-width: 736px) {
    margin-left: 0;
  }
`;
export const IconRight = styled(FaAngleRight)`
  width: 1.75rem;
  height: 1.75rem;
  position: absolute;
  top: 50%;
  left: 54%;
  transform: translate(-54%, -50%);
  color: ${palette.darkAccent};
  transition: transform 0.2s ease-in-out;
`;
export const Image = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  width: 17.5rem;
  display: inline-block;
  border: 0;

  &::after {
    background-image: url(${overlay});
    /* linear-gradient(
        45deg,
        rgba(114, 97, 147, 0.2) 25%,
        rgba(227, 123, 124, 0.2) 50%,
        rgba(255, 228, 180, 0.2)
      ); */
    background-size: 128px 128px;
    /* background-size: 128px 128px, auto; */
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 1;
    @media screen and (max-width: 736px) {
      background-size: 128px 128px, 130% 130%;
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
    object-position: 8% 25%;
    @media screen and (max-width: 736px) {
      object-position: 0% 45%;
    }
    @media screen and (max-width: 480px) {
      object-position: 0% 55%;
    }
  }
  @media screen and (max-width: 736px) {
    -moz-flex-basis: auto;
    -webkit-flex-basis: auto;
    -ms-flex-basis: auto;
    flex-basis: auto;
    height: 18rem;
    width: 100%;
  }
`;
export const CircleLink = styled(Link)`
  display: block;
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: ${palette.darkShades};
  transition: background-color 0.2s ease-in-out;
  transform: ${(props) => (props.$isMobile ? 'rotateZ(90deg)' : '')};
  margin: ${(props) => (props.$isMobile ? '0 auto' : '')};
  &:hover {
    ${IconRight} {
      transform: translate(-54%, -50%) scale(1.3, 1.3);
    }
  }
`;
