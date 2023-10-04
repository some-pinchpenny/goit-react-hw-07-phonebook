import { selectContacts } from 'redux/selectors';
import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle, Layout, Title } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loading } from './Loading';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Phonebook</Title>
      <AddForm />
      {contacts.items.length !== 0 && (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          {contacts.isLoading && !contacts.error && <Loading />}
          <ContactsList />
        </>
      )}
      <GlobalStyle />
    </Layout>
  );
};
