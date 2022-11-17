import React, { useState } from 'react';
import styled from 'styled-components';

// 개선할 부분 : add parameter 누르면 등록과 동시에 새로운 칸 생기게,,=>마지막 칸은 show result가 등록버튼으로,,
// 만약 파라미터 하나만 등록하면 바로 show result를 누르게 되는데 => 결국 show result는 맨 마지막을 담는 역할을 해야한다.

const DetailDiv = styled.div`
    div {
        margin-bottom: 0.2rem;
        width: 100%;
        height: 25px;
        align-items: center;
    }
    input {
        margin-right: 5px;
    }
`;

const Div = styled.div`
    p {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: bold;
        color: #414e21;
        word-spacing: 7px;
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
        param_name: '',
        param_domain: '',
        param_value: '',
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
            value: param.param_value,
        });
        setParamList(nextParam);
        //paramList
        console.log('onclick ??');
        console.log(param);
        props.setParamData(nextParam);
    };

    //json에 paramList추가
    //param_data.params.push(paramList) => 이차원배열이 되버린다.

    // param_data.params = paramList;
    // console.log(param_data);

    return (
        <DetailDiv>
            <Div>
                <p>Input Parameter & Value here!</p>
            </Div>

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
                                id="param_value_id"
                                name="param_value"
                                placeholder="파라미터 값"
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
