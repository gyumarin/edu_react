import './App.css';
import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 해보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어보기',
            checked: false,
        },
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(
        //매개 변수
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    //     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     const biggerThanFive = array.filter(number => number > 5);
    //     결과: [6, 7, 8, 9, 10]

    const onRemove = useCallback(
        (id) => {
            //가져온 id값이 아닌 todos를 다시 반환(가져온 값 빼고 반환)
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
        // deps에 값을 넣으면 값이 변경될때 랜더링 해줌.
        // 안해주면 처음 컴포넌트가 생성될때만 됐을때만 랜더링 해줌.
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                //  '==' 연산자를 이용하여 서로 다른 유형의 두 변수의 [값] 비교
                //  '==='는 엄격한 비교를 하는 것으로 알려져 있다 ([값 & 자료형] -> true).
                todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
                
            );
        },
        [todos]
    );


    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
