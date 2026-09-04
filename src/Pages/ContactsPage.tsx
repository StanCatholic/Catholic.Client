import React from 'react';
import {defaultPage, IPage} from "../Domain/IPage";
import {Page} from "./Page";
import styles from "./ContactsPage.module.css";

export const email = 'dr0608@gmail.com';

const ContactsPage: React.FC = () => {
  const [page, setPage] = React.useState<IPage>(preloadPage);

  return (
    <Page onPageLoad={p => setPage(p)} onLoading={() => {}} preloadPage={page}>
      <div className={styles.contactsContainer}>

        <h2 className={styles.contactsTitle}>For more information contact us:</h2>

        <div className={styles.contactsTextContainer}>
          <div className={styles.contactsItemContainer}>
            <img src={'/icons/email.png'} alt='email'/>
            <p className={`${styles.contactsText}`}>EMAIL</p>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
          </div>
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