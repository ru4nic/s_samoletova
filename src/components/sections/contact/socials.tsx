import { FaInstagram, FaTelegramPlane, FaVk, FaWhatsapp } from 'react-icons/fa';
import { palette } from '../../../assets/misc/vars';
import styled from 'styled-components';

const Icons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin: 2rem 0;
  @media (max-width: 480px) {
    column-gap: 0.5rem;
  }
`;
const IconWrapp = styled.div`
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 3rem;
  background-color: ${palette.lightAccent};
  color: ${palette.darkShades};
  font-size: 1.125rem;
  text-align: center;
  margin: 0 auto;
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    border-bottom: none;

    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: 480px) {
    width: 10vmin;
    height: 10vmin;
  }
`;

const LinkText = styled.span`
  color: ${palette.lightShades};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: ${palette.lightShades};
    transition: width 0.2s ease-in-out;
  }
`;
const SocLink = styled.a`
  text-decoration: none;
  &:hover {
    .icon {
      transform: translate(-50%, -50%) scale(1.25, 1.25);
    }
    ${LinkText} {
      /* color: ${palette.lightShades}; */
      /* transform: scale(1.2, 1.2); */
      &::after {
        width: 100%;
      }
    }
    ${IconWrapp} {
      box-shadow: 0 0 4px 0 white;
    }
  }
`;

const Socials = () => {
  const socials = [
    {
      text: 'Instagram',
      component: FaInstagram,
      href: 'https://instagram.com/s_samoletova?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      text: 'VK',
      component: FaVk,
      href: 'https://vk.com/s_samoletova',
    },
    {
      text: 'Telegram',
      component: FaTelegramPlane,
      href: 'https://t.me/S_Samoletova',
    },
    {
      text: 'WhatsApp',
      component: FaWhatsapp,
      href: 'https://api.whatsapp.com/send?phone=79099729995&text=',
    },
  ];
  return (
    <Icons>
      {socials.map((social) => {
        const Icon = social.component;
        return (
          <SocLink key={social.text} href={social.href}>
            <IconWrapp>
              <Icon className="icon" />
            </IconWrapp>
            {/* <TextWrapp>
              <LinkText>{social.text}</LinkText>
            </TextWrapp> */}
          </SocLink>
        );
      })}
    </Icons>
  );
};
export default Socials;
