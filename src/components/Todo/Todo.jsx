import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todosSlicer';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(text);

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <input
          type="text"
          value={value}
          name="text"
          onChange={event => setValue(event.target.value)}
        />
        <button
          type="button"
          onClick={() => dispatch(updateTodo({ id, text: value }))}
        >
          Edit
        </button>
      </TodoWrapper>
    </>
  );
};
