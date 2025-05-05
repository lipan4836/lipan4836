import type { ReactElement } from "react";
import type { ContactProps } from "../../../types/types";
import Icon from "../../UI/Icon/Icon";
import styles from '../Main.module.scss'
import { useTranslation } from "react-i18next";

function Contact(): ReactElement {
  const { t } = useTranslation('main')

  const contactData: ContactProps[] = [
    {
      id: 1,
      url: 'https://maps.app.goo.gl/MXRpQHBXB6EsWY496',
      content: `${t('contacts.loc')}`,
      markId: 'location',
    },
    {
      id: 2,
      url: 'email:lipan48@gmail.com',
      content: `${t('contacts.email')}`,
      markId: 'email',
    },
    {
      id: 3,
      url: 'tg://resolve?domain=lipan48',
      content: `${t('contacts.tg')}`,
      markId: 'telegram',
    },
    {
      id: 4,
      url: 'https://github.com/lipan4836',
      content: `${t('contacts.gh')}`,
      markId: 'github',
    },
  ]

  return (
    <section className={styles.contact} id="contact">
      <h2>{t('contacts.head')}</h2>
      <div className={styles.content}>
        {contactData.map((contact) => (
          <a className={styles.link} href={contact.url} key={contact.id} target="_blank" rel="noreferrer">
            <Icon spriteName="socials-sprite" idSprite={contact.markId} />
            <p>{contact.content}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;