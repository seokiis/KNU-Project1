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
const Table = styled.div`
  background-color: white;
  font-size: 8px;
`;

function ShowPlot(props) {
  //유저의 아이디와 csv파일을 정상적으로 받았으면?
  if (props.userId && props.array) {
    console.log("user id is successfully updated!");
    //Submit에서 id값을 받아서 -> "http://3.39.93.244:5000/download/plot/id_plot.html"의 plot을 보여주면 됨
    console.log("ShowPlot userId");
    console.log(props.userId);

    //csv 파일을 array형태로 받기
    console.log("ShowPlot csv file text");
    console.log(props.array);
    const array2 = props.array;
    const headerKeys = Object.keys(Object.assign({}, ...props.array));

    //url을 생성하기
    // userId_plot.html
    //<iframe src={props.userId} width="700px" height="480px"></iframe>
    // 주소: id_plot.html 고정
    const url =
      "http://3.39.93.244:5000/download/plot/" + props.userId + "_plot.html";
    console.log(url);
    return (
      <Div>
        <div>
          <iframe src={url} width="750px" height="360px"></iframe>
        </div>

        <Table>
          <table>
            <thead>
              <tr key={"header"}>
                {headerKeys.map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {array2.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((values) => (
                    <td>{values}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Table>

        <RadioContext></RadioContext>
      </Div>
    );
  }
}

export default ShowPlot;
