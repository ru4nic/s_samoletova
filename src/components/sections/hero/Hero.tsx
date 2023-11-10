import { Section } from '../layout/Styles';

import welcomePhoto from '../../../assets/img/IMG_2.jpg';

import { Content, CircleLink, IconRight, Image, WrapperLink } from './styles';
import Logo from './Logo';
import useMediaQuery from '@mui/material/useMediaQuery';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 736px)');

  return (
    <Section $welcome id="hero">
      <Content>
        <Logo />
        <WrapperLink>
          <li>
            <CircleLink
              $isMobile={isMobile}
              to="about"
              smooth={true}
              duration={700}
              horizontal={isMobile ? false : true}
              offset={isMobile ? 0 : -200}
            >
              <IconRight />
            </CircleLink>
          </li>
        </WrapperLink>
      </Content>
      <Image data-position="25% 25%">
        <img src={welcomePhoto} alt="welcome" />
      </Image>
    </Section>
  );
};
export default Hero;
