import "./App.css";
import styled from "styled-components";
import { css } from "styled-components";
import CreateList from "./component/CreateList";
import DragDropFile from "./component/DragDropfile";
import Submit from "./component/Submit";
import { useState } from "react";
import ShowPlot from "./component/ShowPlot";
import Send from "./component/Send";
import melon from "./img/melon.png";
import Nav from "./component/Nav";
import GITHUB from "./component/GITHUB";

// const Logo = styled.h3`
//     margin-top: 30px;
//     position: absolute;
//     left: 1em;
//     font-size: 2.5em;
//     color: white;
//     font-family: "gmk";
//     /* 굵게가 안 먹히네.. */
//     font-weight: bold;
//     // text-shadow: -0.5px 0 #000, 0 0.5px #000, 0.5px 0 #000, 0 -0.5px #000;
// `;

const WelcomeDiv = styled.div`
    //padding: 2rem 4rem;
    //margin-left: 3.8em;
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`;

const Welcome = styled.h1`
    color: white;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    line-height: 100%;
    font-family: "gmk";
`;
const Start = styled.a`
    width: 700px;
    height: 200px;
    left: 542px;
    top: 677px;

    background: #ffce6e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    text-decoration: none;
`;

const TEXT = styled.a`
    color: #ffffff;
    font-size: 30px;
    line-height: 100px;
    padding: 30px;
    padding-top: 50px;
    padding-bottom: 50px;

    align-items: center;
    text-align: center;
    letter-spacing: -0.1em;
    font-weight: 100;
`;

const Hyper = styled.div`
    font-size: 20px;
`;
const ThreeDiv = styled.div`
    //padding: 2rem 4rem;
    //margin-left: 3.8em;
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;

    //border: 1px solid gray;
`;

const Parameter = styled.div`
    //background-color: white;
    //border: 1px solid gray;
`;

const Div = styled.div`
    overflow: hidden;
    font-family: "gmk";
`;

// const Ul = styled.nav`
//   font-size: 1.1em;
//   min-width: 100px;
//   //padding-right: 20px;
// `;

// const Link = styled.a`
//   display: block;
//   margin: 0 calc(20px * -1);
//   padding: 8px 20px;
//   border-radius: 4px;
//   color: #fffffe;
//   text-decoration: none;

//   ${(p) =>
//     p.active &&
//     css`
//       color: #ff8906;
//       font-weight: bold;
//     `}

//   &:hover {
//     background: white;
//     color: gray;
//     transform: translateY(-2px);
//     transition: 1s;
//   }

//   &:not([href]) {
//     color: #a7a9be;
//     background: revert;
//     transform: none;
//   }
// `;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
`;

const List = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
`;

// const Menu = styled.nav`
//   //display: inline;
//   font-size: 20px;
//   font-family: "gmk";
//   align-items: center;
//   text-align: center;
//   padding-top: 150px;
//   // position: absolute;
//   position: fixed;
//   padding-left: 1.3em;
//   height: 80px;
//   width: 240px;
// `;
const Zero = styled.div``;
const One = styled.div`
    /* background-size: cover;
    text-align: center;
    padding-top: 180px;
    padding-bottom: 130px; */
`;

const Two = styled.div``;

const Three = styled.div``;

const Four = styled.div`
    // text-align: center;
    // align-items: center;
`;

const Five = styled.div``;

function Main(props) {
    const [filedata, setFileData] = useState();
    const [paramdata, setParamData] = useState();
    const [csvFile, setFile] = useState();
    const [userId, setId] = useState();

    console.log("App");
    console.log(userId);
    console.log(csvFile);

    return (
        <Div>
            <Container>
                <Nav></Nav>
                <List className="list">
                    <Zero id="github">
                        <GITHUB></GITHUB>
                    </Zero>
                </List>
                <List className="list">
                    <One id="Intro">
                        <WelcomeDiv>
                            <Welcome>
                                <img src={melon} width="190" height="150" />
                                <br />
                                MeLonKube
                                <br />
                                <br />
                                <br />
                                <Hyper>
                                    HyperParameter tuning MLOps platform
                                </Hyper>
                                <br />
                                <Start href="#Insert_Code">
                                    <TEXT>Get Started</TEXT>
                                </Start>
                            </Welcome>
                        </WelcomeDiv>
                    </One>
                </List>
                <List className="list">
                    <Two id="Insert_Code">
                        <DragDropFile setData={setFileData}></DragDropFile>
                    </Two>
                </List>
                <List className="list">
                    <Three id="Insert_Parameter">
                        <ThreeDiv>
                            <Parameter>
                                <CreateList
                                    setParamData={setParamData}
                                ></CreateList>
                            </Parameter>
                            <Submit
                                setFile={setFile}
                                filedata={filedata}
                                paramdata={paramdata}
                                setId={setId}
                            ></Submit>
                        </ThreeDiv>
                    </Three>
                </List>
                <List className="list">
                    <Four id="Plot">
                        <ShowPlot userId={userId} array={csvFile}></ShowPlot>
                    </Four>
                </List>
                <List className="list">
                    <Five id="Send">
                        <Send></Send>
                    </Five>
                </List>
            </Container>
        </Div>
    );
}

export default Main;
