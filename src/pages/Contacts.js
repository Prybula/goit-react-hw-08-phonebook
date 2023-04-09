import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { ContactsCounter } from 'components/ContactsCounter/ContactsCounter';
import { Container } from '@mui/material';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="sm">
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsCounter />
        <FormAddContact />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
