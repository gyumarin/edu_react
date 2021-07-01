import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text"> {text} </div>
            </div>

            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);

// shouldComponentUpdate라는 라이프사이클은 함수형 컴포넌트에서는 React.memo로 대체되어 사용.
//TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않습니다.