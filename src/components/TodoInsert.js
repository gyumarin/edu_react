import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    //
    const [value, setValue] = useState('');

    //useCallback : 특정 값이 바뀔때만 랜더링 하도록하는 것

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    // const onClick = useCallback(
    //     (e) => {
    //         onInsert(value);
    //         setValue('');
    //         e.preventDefault();
    //     },
    //     [onInsert, value]
    // );

    // onSubmit 이벤트의 경우 인풋에서 Enter를
    // 눌렀을 때도 발생하기 때문에 onClick보다 onSubmit을 선호함.
    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            {/* <form className="TodoInsert"> */}
            <input placeholder="할 일을 입력하세요 " value={value} onChange={onChange} />
            <button type="submit">
                {/* <button onClick={onClick}> */}
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
