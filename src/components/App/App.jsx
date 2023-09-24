import { Container, Grid, Header, SearchForm, Section, Text } from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/todosSlicer';

export const App = () => {
  const todos = useSelector(getTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <Grid />
        </Container>
      </Section>
    </>
  );
};
