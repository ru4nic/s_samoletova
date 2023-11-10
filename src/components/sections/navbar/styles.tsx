import styled from 'styled-components';
import { palette } from '../../../assets/misc/vars';
//@ts-ignore
import { Link } from 'react-scroll';

export const Container = styled.menu<{ $isMobile: boolean }>`
  background-color: ${(props) =>
    props.$isMobile ? '' : `${palette.darkShades}10`};
  border-radius: 7px;
  padding: 1.5em;
  width: 50vmax;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 3rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  @media (max-width: 923px) {
    width: 70vmax;
  }
  @media (max-width: 736px) {
    width: 100%;
    top: 0;
    justify-content: flex-end;
    padding: 2rem;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
export const StyledLink = styled(Link)`
  /* display: block;
  display: flex;
  flex-grow: 1; */
`;
export const IconWrapper = styled.div`
  background-color: ${palette.darkAccent2}90;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 7px;
  border: 1px solid ${palette.darkShades}15;
`;
