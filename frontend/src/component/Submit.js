import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

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
    const [address, setAdress] = useState('');

    //주소
    const showResult = async (e) => {
        //const [address, setAdress] = useState('');

        //버튼을 누를 때 마다 userId 증가 => 사용자 구분
        userId += 1;

        let count = 0;

        //파일 담기
        const formData = new FormData();
        formData.append('model', props.filedata);
        formData.append('id', userId);

        //파일 전송
        try {
            const resFile = await axios.post(
                'http://3.39.93.244:5000/upload/file',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(resFile.data);
            count += 1;
        } catch (e) {
            // e.request 서버에 성공적으로 요청했을 때 설정됨
            // e.response 서버에 성공적으로 응답을 받았을 때 설정됨
            alert(e.response.data + '! 파일을 확인해주세요.');
        }

        //파라미터 담기
        let param_data = {
            params: [],
        };
        param_data.id = String(userId);
        param_data.params = props.paramdata;

        if (props.paramdata) {
            //파라미터 전송
            try {
                const resParam = await axios.post(
                    'http://3.39.93.244:5000/upload/param',
                    JSON.stringify(param_data),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(resParam.data);
                count += 1;
            } catch (e) {
                // e.request 서버에 성공적으로 요청했을 때 설정됨
                // e.response 서버에 성공적으로 응답을 받았을 때 설정됨
                alert(e.response.data);
            }
        } else {
            alert('Parameter is empty! 파라미터를 확인해주세요.');
        }

        //파일과 파라미터가 잘 보내졌으면, 최종적으로 id 보내고 주소값 return
        if (count === 2) {
            //console.log(count);
            const id_data = {};
            id_data.id = userId;
            console.log(JSON.stringify(id_data));
            try {
                const resAddress = await axios.post(
                    'http://3.39.93.244:5000/execute/',
                    JSON.stringify(id_data),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log('이 주소가 반환됨.');
                console.log(resAddress.data); //
                setAdress(resAddress.data);
                console.log('this is first');
                console.log(address);
            } catch (e) {
                // e.request 서버에 성공적으로 요청했을 때 설정됨
                // e.response 서버에 성공적으로 응답을 받았을 때 설정됨
                alert(e.response);
                console.log(e.response);
            }
        }
        console.log('submit.js');
        console.log(address);
        props.setAddress(address);

        // if(photos.length > 0) {
        //     return (
        //         photos.map(photo => (
        //             (photo.id < 10) ? (
        //                 <div key={photo.id}>
        //                     <img src={photo.thumbnailUrl} alt="img" />
        //                     <p>title : {photo.title}</p>
        //                 </div>)
        //             : null
        //         ))
        //     );
        // } else { // 조회 데이터 존재하지 않을 경우
        //     return (
        //         <div>
        //             <button onClick={searchApi}> 불러오기 </button>
        //         </div>
        //     )
        // }

        // multiple request
        // axios.all([
        //     axios.post(`/my-url`, {
        //       myVar: 'myValue'
        //     }),
        //     axios.post(`/my-url2`, {
        //       myVar: 'myValue'
        //     })
        //   ])
        //   .then(axios.spread((data1, data2) => {
        //     // output of req.
        //     console.log('data1', data1, 'data2', data2)
        //   }));
    };

    return <Button onClick={showResult}>Double Click to Show Result</Button>;
};

export default Submit;
