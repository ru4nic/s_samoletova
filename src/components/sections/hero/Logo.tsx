import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import logo from '../../../assets/img/logo.svg';
import textSVG from '../../../assets/img/logo_text.svg';
import { Title } from './styles';
import { palette } from '../../../assets/misc/vars';

const Container = styled.div<{ $drawer?: boolean }>`
  display: grid;
  grid-template-areas: 'logo separator name' 'logo separator title';
  align-items: center;
  justify-content: flex-start;
  height: ${(props) => (props.$drawer ? '6vmax' : '15vmin')};
  /* padding: ${(props) => (props.$drawer ? '0 16px' : '')}; */
`;
const WrapperLogo = styled.div<{ $drawer?: boolean }>`
  max-width: ${(props) => (props.$drawer ? '3.5vmax' : '8vmin')};
  grid-area: logo;
`;
const WrapperText = styled.div<{ $drawer?: boolean }>`
  max-width: ${(props) => (props.$drawer ? '12.5rem' : '30rem')};
  grid-area: name;
  /* align-self: flex-end; */
`;
const SVG = styled(ReactSVG)`
  & div svg g path {
    fill: ${palette.darkShades};
  }
`;
const Separator = styled.div<{ $drawer?: boolean }>`
  margin: ${(props) => (props.$drawer ? '0 0.5vmax' : '0 2vmin')};
  background-color: ${palette.darkShades}50;
  width: 1px;
  height: 100%;
  grid-area: separator;
`;
type LogoProps = {
  section?: string;
};
const Logo = ({ section }: LogoProps) => {
  const logoProps = { [`$${section}`]: true };
  return (
    <Container {...logoProps}>
      <WrapperLogo {...logoProps}>
        <SVG src={logo} className="" wrapper="div" />
      </WrapperLogo>
      <Separator {...logoProps} />
      <WrapperText {...logoProps}>
        <SVG src={textSVG} wrapper="div" />
      </WrapperText>
      <Title {...logoProps}>Фотограф в Москве</Title>
    </Container>
  );
};
export default Logo;
