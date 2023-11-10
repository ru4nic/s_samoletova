import styled from 'styled-components';
import { Section } from '../layout/Styles';
import { padding, palette } from '../../../assets/misc/vars';
import overlay from '../../../assets/img/overlay.png';

export const SectionContacts = styled(Section)`
  /* background-image: url(${overlay}),
    linear-gradient(
      45deg,
      rgba(114, 97, 147, 0.25) 25%,
      rgba(227, 123, 124, 0.25) 50%,
      rgba(255, 228, 180, 0.25)
    ); */
  background-size: 128px 128px, auto;
  background-color: ${palette.darkAccent2};
  padding: 3.5rem 3.5rem 2rem 3.5rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 30rem;
  color: ${palette.darkShades};
  @media (max-width: 736px) {
    width: 100%;
    padding: ${padding};
    flex-direction: row;
  }
`;
export const Copyright = styled.div`
  border-top: 1px solid ${palette.darkShades}15;
  text-align: center;
  padding-top: 1rem;
  font-weight: 300;
  font-size: 0.9rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const Developer = styled.a`
  color: ${palette.darkShades};
  position: relative;
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: ${palette.darkShades};
    transition: width 0.2s ease-in-out;
  }
  &:hover::after {
    width: 0%;
  }
`;
