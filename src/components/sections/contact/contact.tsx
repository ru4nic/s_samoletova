import { Copyright, Developer, SectionContacts } from './styles';
import Socials from './socials';

const Contact = () => {
  return (
    <SectionContacts id="contacts">
      <div>
        <h2 className="major">Контакты</h2>
        <p>Заказать фотосъемку можно удобным Вам способом.</p>
        <Socials />
        <Copyright>
          <span>Разработчик </span>
          <Developer href="https://t.me/ru4nic">Ru4nic</Developer>
        </Copyright>
      </div>
    </SectionContacts>
  );
};
export default Contact;
