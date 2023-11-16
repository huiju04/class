import styled from "styled-components";
import { useState } from "react";

// 실시간으로 +1 -1을 누르면 값이 변경되는 컴포넌트
export const Btn = () => {
  const Title = styled.h1`
    color: lightblue;
  `;

  const Button = styled.button`
    width: 50px;
    height: 50px;
    font-size: 18px;
    border: 1px solid white;
    background: lightblue;
    color: white;
  `;

  // [현재 변하고 있은 값을 인지할 수 있는 변수, stete변경하기 setter 함수]
  const [number, setNumber] = useState(1);
  const onClickUp = () => {
    setNumber(number + 1);
  };

  const onClickDown = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <Title>{number}</Title>
      <Button onClick={onClickUp}>+1</Button>
      <Button onClick={onClickDown}>-1</Button>
    </>
  );
};
