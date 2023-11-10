import styled from 'styled-components';
import { Section } from '../layout/Styles';
import { padding, palette } from '../../../assets/misc/vars';

export const SectionPrice = styled(Section)`
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  min-width: 40rem;
  background: ${palette.darkAccent};
  /* background-color: #c298ff; */
  color: ${palette.darkShades};
  @media (max-width: 736px) {
    min-width: unset;
    width: 100%;
  }
`;
export const Content = styled.div`
  /* background-image: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.125) 30%,
    rgba(0, 0, 0, 0.175) 50%
  ); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 0 2rem 3.5rem;
  width: 20rem;
  z-index: 1;
  .major {
    &::after {
      background-color: ${palette.darkShades}30;
    }
  }
  @media (max-width: 736px) {
    padding: ${padding};
    padding-bottom: 0;
    width: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
  padding: 0 3.5rem;
  @media (max-width: 736px) {
    padding: ${padding};
    padding-top: 0;
    flex-wrap: wrap;
    column-gap: 2em;
    row-gap: 1em;
  }
`;
export const List = styled.ul`
  margin-bottom: 1rem;
`;
export const ListItem = styled.li`
  /* list-style-type: circle; */
  list-style: disc;
  margin-left: 12px;
`;
