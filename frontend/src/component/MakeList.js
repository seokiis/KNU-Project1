import { useState } from "react";

const MakeList = () => {
  const [names, setNames] = useState([
    // 배열 기본값 정하기
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  console.log(names);
  const [inputText, setInputText] = useState(""); // input 창 기본값
  const [nextId, setNextId] = useState(5); // 기본  항목이 네개가 있으니 5부터 시작
  const onChange = (e) => setInputText(e.target.value); // 지금 위치의 인풋 value 를 가져와 inputText에 담기
  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>); // names 배열을 돌면서 리스트 생성
  // 클릭 이벤트 만들기
  const onClick = () => {
    const nextNames = names.concat({
      // names 에 새 배열 추가하기 함수
      id: nextId, // id 는 nextId 로
      text: inputText, // text 는 inputText 로 값 주기
    });
    setNextId(nextId + 1); // id 값 추가
    setNames(nextNames); // setNames 함수 실행 nextNames 값 가져오기
    setInputText(""); // input 창 비우기
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default MakeList;
