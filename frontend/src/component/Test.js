import React, { useState } from 'react';

const Test = () => {
    //json Data
    let param_data = {
        id: 3,
        message: {},
        params: {},
    };

    //input에서 파라미터 이름을 담기 위한 state 생성
    const [param, setParam] = useState({
        param_name: '',
        param_value: '',
    });

    //input에 입력될 때마다 account state값 변경되게 하는 함수
    const onChangeParam = (e) => {
        setParam({
            ...param,
            [e.target.name]: e.target.value,
        });
    };

    param_data.params[param.param_name] = param.param_value;
    //json데이터에 값 추가하기
    console.log(param_data);

    return (
        <div>
            <input
                id="param_name_id"
                name="param_name"
                placeholder="파라미터 이름을 입력해주세요"
                onChange={onChangeParam}
            />
            <input
                id="param_value_id"
                name="param_value"
                placeholder="파라미터 값를 입력해주세요"
                onChange={onChangeParam}
            />
        </div>
    );
};

export default Test;
