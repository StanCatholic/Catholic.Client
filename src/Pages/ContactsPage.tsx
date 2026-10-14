import React from 'react';
import {defaultPage, IPage} from "../Domain/IPage";
import {Page} from "./Page";
import styles from "./ContactsPage.module.css";

const contacts = [
  {
    description: 'For specific questions about Holy Masses in English, confessions, marriage, and other sacramental and spiritual matters:',
    email: 'bkosnac@hotmail.com'
  },
  {
    description: 'For general questions about the Catholic English community and its activities:',
    email: 'info@catholic.sk'
  }
];

const ContactsPage: React.FC = () => {
  const [page, setPage] = React.useState<IPage>(preloadPage);

  return (
    <Page onPageLoad={p => setPage(p)} onLoading={() => {}} preloadPage={page}>
      <div className={styles.contactsContainer}>

        <h2 className={styles.contactsTitle}>For more information contact us:</h2>

        <div className={styles.contactsTextContainer}>
          {contacts.map(contact => (
            <div key={contact.email} className={styles.contactsItemContainer}>
              <img src={'/icons/email.png'} alt='email'/>
              <p className={styles.contactsText}>{contact.description}</p>
              <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">{contact.email}</a>
            </div>
          ))}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: page.body}}/>
    </Page>
  );
}

export default ContactsPage;


const preloadPage: IPage = {
  ...defaultPage,
  title: 'Contact us'
};