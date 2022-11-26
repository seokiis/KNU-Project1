import React from "react";
import styled from "styled-components";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

const Div = styled.div`
  color: black;
  font-style: italic;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 50px;
  font-size: 20px;
  color: #004eb6;
  text-decoration: none;
  border: 1px solid gray;
  background-color: #f3f3f3;
  font-weight: bold;
  margin: 5px;
  border-radius: 8px;
  word-spacing: 5px;
`;

function RadioContext() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Plot ${e.target.Plot.value}을 선택하셨습니다!`);
      }}
    >
      <Div>
        <RadioGroup>
          <Radio name="Plot" value="0" defaultChecked></Radio>
          <Radio name="Plot" value="1"></Radio>
          <Radio name="Plot" value="2"></Radio>
          <Radio name="Plot" value="3"></Radio>
          <Radio name="Plot" value="4"></Radio>
          <Radio name="Plot" value="5"></Radio>
          <Radio name="Plot" value="6"></Radio>
          <Radio name="Plot" value="7"></Radio>
          <Radio name="Plot" value="8"></Radio>
          <Radio name="Plot" value="9"></Radio>
        </RadioGroup>
      </Div>
      <Button>Choose!</Button>
    </form>
  );
}

export default RadioContext;
