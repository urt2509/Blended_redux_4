import { nanoid } from 'nanoid';
import { useEffect } from 'react';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, getTodos } from 'redux/todosSlicer';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  // console.log(todos);
  // const [todos, setTodos] = useState(() => {
  //   return JSON.parse(localStorage.getItem('todos')) ?? [];
  // });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodos = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    dispatch(addTodo(todo));
    // setTodos(todos => [...todos, todo]);
  };

  const handleSubmit = data => {
    addTodos(data);
  };

  const deleteTodos = id => {
    dispatch(deleteTodo(id));
    // setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodos}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
