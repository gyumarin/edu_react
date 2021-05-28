import React from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map((item) => (
                <TodoListItem todo={item} key={item.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default TodoList;
