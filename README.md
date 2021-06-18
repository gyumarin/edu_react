rafce => react function component

1. TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여 줍니다. children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.

2. TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.

3. TodoListItem: 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줍니다.

4. TodoList: todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다..

/_ 아이콘 _/
https://react-icons.netlify.com/#/icons/md 아이콘 들있는곳

2021-05-30
지금까지 만들었던 todo프로젝트 최적화를 진행 할것 이다.

컴포넌트는 아래의 상황시 리렌더링 된다.

1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

 할 일 1을 수정함으로써 App 컴포넌트의 state가 수정되어 App컴포넌트가 리랜더링 되고(2)
 하위(자식)의 컴포넌트들도 같이 리랜더링(3)된다.
Todoitem의 할 일 1만 수정했지만, 나머지 2499개의 item도 같이 랜더링 되기에 성능 저하가 발생.


React.memo로는 최적화가 끝나지 않는다.
onRemove, onToggle함수는 배열 상태를 업데이트하는 과정에서 최신 상태의 todos를 참조하기 때문에
todos 배열이 바뀔 때마다 함수가 새로 만들어진다. 

이러한 상황(todo배열이 바뀔때문에 새로운 함수를 만드는)을 방지하기 위해 2가지 방법이 있다.
1. useState의 함수형 업데이트 기능을 사용하는 것.
(setValue부분에 value => value+1 으로 처리하여, 값을 넘기는 것이 아닌 함수를 넘겨서 업데이트)
2. useReducer를 사용. 


최적화 방법
1. React.memo(props가 바뀌지 않았다면, 리렌더링하지 않도록 설정)를 통한 리랜더링 방지



불변성을 지킨다 :  기존값을 수정하지 않고 새로운 값을 만들어내는 것

불변성이 지켜지지 않으면, 객체 내부의 값이 변경되어도 감지 할수 없다.
이는 React.memo에서 값의 변경을 인식하지 못하기에 최적화가 불가능해진다.
불변성 지키는 방법(...array)
https://thebook.io/080203/ch11/06-01/

객체 안의 객체의 불변성을 지키기 위해서는 

const 다음복잡한객체 = {
    ...복잡한객체,                  //기존 객체를 깊은 복사함.
    객체내부: {                     //객체 내부.
        ...복잡한객체.객체내부,
        활성화상태: false
    }
}

배열 혹은 객체 구조가 복잡해질수록 이런식으로 불변성 유지 업데이트는 까다로워진다.
그러므로 immer라는 라이브러리를 이용해 편하게 작업 하도록 하겠다.