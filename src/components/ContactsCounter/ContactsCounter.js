import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactsCounter.module.css';

export const ContactsCounter = () => {
  const contacts = useSelector(selectContacts);

  const count = contacts.reduce(acc => {
    return (acc += 1);
  }, 0);

  return (
    <div>
      <p className={css.countsText}>
        You have <span className={css.count}>{count}</span> contacts
      </p>
    </div>
  );
};
