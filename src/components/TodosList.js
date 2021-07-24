import React from 'react';
import './style.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo">
      {todos.map(todo => (
        <li
          style={{ marginLeft: '60px', marginTop: '30px' }}
          className="list-items"
          key={todo.id}
        >
          <input
            style={{ background:"none",color:"#dd2c00 ",height: '30px', marginRight: '10px', width: '270px' }}
            type="text"
            value={todo.title}
            className="list"
            onChange={event => event.preventDefault()}
          />

          <button
            style={{ background: 'none', borderStyle: 'none', height: '20px' }}
            className="button-complite task-button"
            onClick={() => handleDelete(todo)}
          >
            <DeleteForeverIcon style={{ color: '#d50000' }} />
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
