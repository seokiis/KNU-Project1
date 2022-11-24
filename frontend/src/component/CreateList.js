import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import DetailList from "./DetailList";
// import param_data from './DetailList';
import axios from "axios";

const CreateListDiv = styled.div`
  //border: 1px solid gray;
  //background-color: #f3f3f3;
  //background-color: pink;
  //justify-content: center;
  width: 100%;
  height: 400px;
  //padding-left: 3em;
  //padding-right: 3em;
  //margin-bottom:바깥부분 => show result랑 떨어지게
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;

const Button = styled.div`
  padding: 5px 50px;
  color: #133913;
  text-decoration: none;
  border: 1px solid gray;
  background-color: #ededdc;
  font-weight: bold;
  margin: 5px;
  border-radius: 8px;
  word-spacing: 5px;
`;

const B = styled.div`
  display: flex;
`;

const CreateList = (props) => {
  const [countList, setCountList] = useState([0]);
  const [paramData, setParamData] = useState();

  props.setParamData(paramData);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    if (counter > 8) {
      alert("Input limit: 10");
    } else {
      counter += 1;
      //countArr.push(counter); // index 사용 X
      countArr[counter] = counter; // index 사용 시 윗줄 대신 사용
      setCountList(countArr);
    }
  };

  // const showPlot = async (e) => {
  // try {
  //     const res = await axios
  //         .post(
  //             'http://3.39.93.244:5000/upload/param',
  //             JSON.stringify(param_data),
  //             {
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                 },
  //             }
  //         )
  //         .then((e) => {
  //             console.log('응답 출력');
  //             console.log(res);
  //         });
  // } catch (e) {
  //     console.log('에러 출력');
  //     console.log(e);
  // }
  // };
  return (
    <CreateListDiv>
      <DetailList countList={countList} setParamData={setParamData} />
      <B>
        <Button onClick={onAddDetailDiv}>
          <PlusCircleOutlined />
          Add Parameter
        </Button>
      </B>
    </CreateListDiv>
  );
};
export default CreateList;
