import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react';
import { useRef } from 'react';

//전체 정렬을 위한 보이지 않는 Div
const Div = styled.div`
    padding: 2rem 4rem;
    margin-left: 3.8em;
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.p`
    color: #4f0113;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 1.3em;
    padding: 10px 30px;
    text-decoration: none;
    border: 2px solid gray;
    background-color: white;
    font-weight: bold;
    margin-top: 20px;
    border-radius: 6px;
    font-family: 'Hallym';
`;

//alert 내용
function handleFiles(files) {
    alert('Number of files: ' + files.length + 'uploaded!');
}

function DragDropFile(props) {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
            //file에 담음
            props.setData(e.target.files[0]);
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
            //file에 담음
            //setFile(e.target.files[0]);
            props.setData(e.target.files[0]);
        }
    };
    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <Div>
            <Info>Drop your code here</Info>
            <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    id="input-file-upload"
                    //파일은 1개만
                    multiple={true}
                    onChange={handleChange}
                />
                <label
                    id="label-file-upload"
                    className={dragActive ? 'drag-active' : ''}
                >
                    <div>
                        {/*upload a file */}
                        <button
                            className="upload-button"
                            onClick={onButtonClick}
                        >
                            Upload a file
                        </button>
                    </div>
                </label>
                {dragActive && (
                    <div
                        id="drag-file-element"
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    ></div>
                )}
            </form>
            {/* <Button onClick={postFile}>Submmit</Button> */}
        </Div>
    );
}

export default DragDropFile;
