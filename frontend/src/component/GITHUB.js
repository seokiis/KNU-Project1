import { useState } from "react";
import styled from "styled-components";
import SK from "../img/SK.jpg";
import BK from "../img/BK.jpg";
import JM from "../img/JM.jpg";
import SO from "../img/SO.jpg";
import YR from "../img/YR.jpg";

const Div = styled.div`
    color: white;
    text-align: left;
    font-weight: bold;
    font-family: "gmk";
    width: 100%;
`;
const TEXT = styled.div`
    line-height: 30px;
    font-size: 50px;
    color: white;
`;
const TEXT2 = styled.div`
    font-size: 25px;
    margin-bottom: 70px;
`;
const Person = styled.a`
    margin: 10px;
`;
const Link = styled.a`
    border-radius: 70%;
    overflow: hidden;
    .profile {
        border-radius: 50%;
    }
`;
const TEXT3 = styled.div`
    line-height: 30px;
    font-size: 30px;
    color: white;
    width: 210px;
    text-align: center;
    display: inline-block;
`;

const GITHUB = () => {
    return (
        <>
            <Div>
                <TEXT>Developer</TEXT>
                <br />
                <TEXT2>
                    KNU computer science <br />
                    Github Link
                </TEXT2>
            </Div>
            <Person>
                <Link href="https://github.com/seokiis">
                    <img class="profile" src={SK} width="190" height="190" />
                </Link>
            </Person>
            <Person>
                <Link href="https://github.com/bokoo14">
                    <img class="profile" src={BK} width="190" height="190" />
                </Link>
            </Person>
            <Person>
                <Link href="https://github.com/jongminpark0101">
                    <img class="profile" src={JM} width="190" height="190" />
                </Link>
            </Person>
            <Person>
                <Link href="https://github.com/Sion99">
                    <img class="profile" src={SO} width="190" height="190" />
                </Link>
            </Person>
            <Person>
                <Link href="https://github.com/yerim10044001">
                    <img class="profile" src={YR} width="190" height="190" />
                </Link>
            </Person>
            <br />
            <TEXT3>김석희</TEXT3> <TEXT3>박보경</TEXT3>
            <TEXT3>박종민</TEXT3> <TEXT3>신시온</TEXT3> <TEXT3>이예림</TEXT3>
        </>
    );
};

export default GITHUB;
