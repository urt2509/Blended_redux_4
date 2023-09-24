import { useSelector } from 'react-redux';
import { GridList, GridItem } from './Grid.styled';
import { getTodos } from 'redux/todosSlicer';
import { Todo } from 'components';

export const Grid = () => {
  const todos = useSelector(getTodos);

  return (
    <GridList>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </GridList>
  );
};
