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

export default React.memo(TodoList);
/*
현재 React.memo를 추가한다 하여 성능에 영향을 미치지 않는다.
그 이유는 App 컴포넌트가 리랜더링의 이유는 오직 todos 배열의
업데이트 될때 이기 때문이다.

todos 배열의 업데이트가 TodoList에서 일어나지 않기 때문에 
성능에 영향을 미치지 않는 것이다.

그러나 다른 state가 추가된다면, TodoList가 불필요하게 
리랜더링 될 수도 있기 때문에 미리 React.memo를 이용해 최적화한 것이다.



*/
