import styled from 'styled-components';
export const Section = styled.section<{ $welcome?: boolean }>`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: ${(props) => (props.$welcome ? 'stretch' : '')};
  flex-direction: ${(props) => (props.$welcome ? 'row-reverse' : '')};
  & > * {
    position: relative;
    min-width: 10rem;
  }
  @media screen and (max-width: 736px) {
    -moz-flex-direction: ${(props) =>
      props.$welcome ? 'column-reverse' : 'column'};
    -webkit-flex-direction: ${(props) =>
      props.$welcome ? 'column-reverse' : 'column'};
    -ms-flex-direction: ${(props) =>
      props.$welcome ? 'column-reverse' : 'column'};
    flex-direction: ${(props) =>
      props.$welcome ? 'column-reverse' : 'column'};
  }
  @media (max-width: 736px) {
    height: auto;
  }
`;
