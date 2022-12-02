import React, { useState } from "react";
import styled from "styled-components";

const Info = styled.p`
  color: white;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  font-family: "gmk";
`;
const TEXT = styled.div`
  font-size: 15px;
`;
const DetailDiv = styled.div`
  div {
    margin-bottom: 2px;
    width: 100%;
    height: 25px;
    align-items: center;
  }
  input {
    margin-right: 5px;
  }
  font-family: "gmk";
`;

const Div = styled.div`
  p {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    //font-size: 20px;
    font-weight: bold;
    color: #414e21;
    word-spacing: 7px;
    font-family: "gmk";
    color: white;
  }
`;

const DetailList = (props) => {
  // //json
  // let param_data = {
  //     id: 'id_param_data',
  //     params: [],
  // };

  //파라미터 배열 담는 공간
  //paramList가 배열이다.
  const [paramList, setParamList] = useState([]);

  //파라미터의 3가지 카테고리 초기값
  const [param, setParam] = useState({
    param_name: "",
    param_domain: "",
    param_value_min: "",
    param_value_max: "",
    param_value_step: "",
  });

  //input value를 가져와 담기
  const onChange = (e) => {
    setParam({
      ...param,
      [e.target.name]: e.target.value,
      //param_name : 입력값
      //param_domain : 입력값
      //param_value : 입력값
    });
  };

  // const onChangeDomain(this){
  //     console.log(this.value);
  // };
  // 클릭 이벤트 만들기
  const onClick = () => {
    const nextParam = paramList.concat({
      name: param.param_name,
      domain: param.param_domain,
      valuemin: param.param_value_min,
      valuemax: param.param_value_max,
      valuestep: param.param_value_step,
    });
    setParamList(nextParam);
    //paramList
    console.log("onclick ??");
    console.log(param);
    props.setParamData(nextParam);
  };

  //json에 paramList추가
  //param_data.params.push(paramList) => 이차원배열이 되버린다.

  // param_data.params = paramList;
  // console.log(param_data);
  const MARGIN = styled.div`
    margin-top: 15px;
  `;
  return (
    <DetailDiv>
      <Div>
        <Info>
          Hyperparameter
          <br />
          <TEXT>Push your hyperparameter on here</TEXT>
        </Info>
      </Div>
      <MARGIN></MARGIN>

      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div>
              <input
                autosize={{ minRows: 1, maxRows: 3 }}
                id="param_name_id"
                name="param_name"
                placeholder="파라미터 이름"
                onChange={onChange}
              />
              <input
                autosize={{ minRows: 1, maxRows: 3 }}
                id="param_domain_id"
                name="param_domain"
                placeholder="파라미터 도메인"
                onChange={onChange}
              />

              <input
                autosize={{ minRows: 1, maxRows: 3 }}
                id="param_value_min_id"
                name="param_value_min"
                placeholder="파라미터 최소값"
                onChange={onChange}
              />
              <input
                autosize={{ minRows: 1, maxRows: 3 }}
                id="param_value_max_id"
                name="param_value_max"
                placeholder="파라미터 최대값"
                onChange={onChange}
              />
              <input
                autosize={{ minRows: 1, maxRows: 3 }}
                id="param_value_step_id"
                name="param_value_step"
                placeholder="파라미터 step"
                onChange={onChange}
              />
              <button onClick={onClick}>등록</button>
            </div>
          </div>
        ))}
    </DetailDiv>
  );
};

export default DetailList;
