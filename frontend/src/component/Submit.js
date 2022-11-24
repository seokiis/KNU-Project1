import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const Button = styled.button`
  padding: 5px 50px;
  font-size: 20px;
  color: #ce3e79;
  text-decoration: none;
  border: 1px solid gray;
  background-color: #f3f3f3;
  font-weight: bold;
  margin: 5px;
  border-radius: 8px;
  word-spacing: 5px;
`;

const Submit = (props) => {
  let userId = 0;
  const [address, setAdress] = useState("");
  useEffect(() => {
    console.log("useEffect");
    console.log(address);
  }, [address]);
  //주소
  const showResult = async (e) => {
    //버튼을 누를 때 마다 userId 증가 => 사용자 구분
    userId += 1;

    //파일 담기
    const formData = new FormData();
    formData.append("model", props.filedata);
    formData.append("id", userId);

    //파일 전송
    try {
      const resFile = await axios.post(
        "http://3.39.93.244:5000/upload/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("file upload");
      console.log(resFile.data);
    } catch (e) {
      alert(e.response.data + "! 파일을 확인해주세요.");
    }

    //파라미터 담기
    let param_data = {
      params: [],
    };
    param_data.id = String(userId);
    param_data.params = props.paramdata;

    //파라미터 전송
    if (props.paramdata) {
      try {
        const resParam = await axios.post(
          "http://3.39.93.244:5000/upload/param",
          JSON.stringify(param_data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("upload parameter");
        console.log(resParam.data);
      } catch (e) {
        // e.request 서버에 성공적으로 요청했을 때 설정됨
        // e.response 서버에 성공적으로 응답을 받았을 때 설정됨
        alert(e.response.data);
      }
    } else {
      alert("Parameter is empty! 파라미터를 확인해주세요.");
    }

    const id_data = {};
    id_data.id = String(userId);
    // user의 고유한 아이디값
    console.log(JSON.stringify(id_data));

    //execute에서 csv파일을 받음
    try {
      const resAddress = await axios.post(
        "http://3.39.93.244:5000/execute/",
        JSON.stringify(id_data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resAddress.data);
      setAdress(resAddress.data);
      console.log("get csv file");
      console.log(address);
    } catch (e) {
      // e.request 서버에 성공적으로 요청했을 때 설정됨
      // e.response 서버에 성공적으로 응답을 받았을 때 설정됨
      alert(e.response);
      console.log(e.response);
    }

    console.log("all data is successfully uploaded and get data!");
    props.setAddress(address);
    console.log(address);
  };

  return <Button onClick={showResult}>Click to Show Result</Button>;
};

export default Submit;
