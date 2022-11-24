import React, { useState } from "react";
import styled from "styled-components";
import RadioContext from "./RadioContext";

const Div = styled.div`
  padding: 2rem 4rem;
  margin-left: 3.8em;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ShowPlot(props) {
  console.log("ShowPlot의 userid출력");
  console.log(props.userid);
  //Submit에서 id값을 받아서 -> "http://3.39.93.244:5000/download/plot/id_plot.html"의 plot을 보여주면 됨

  //유저의 아이디를 정상적으로 받았으면?
  if (props.userid) {
    console.log("user id is successfully updated!");
  }
  //url을 생성하기
  const url =
    "http://3.39.93.244:5000/download/plot/" + props.userid + "_plot.html";
  console.log(url);
  // id_plot.html
  //http://172.30.1.52:5000/execute/
  //<iframe src={props.address} width="700px" height="480px"></iframe>
  // 주소: id_plot.html 고정
  return (
    <Div>
      <div>
        <iframe src={url} width="600px" height="380px"></iframe>
      </div>
      <RadioContext></RadioContext>
    </Div>
  );
}

export default ShowPlot;
