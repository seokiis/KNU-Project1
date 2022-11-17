import './App.css';
import styled from 'styled-components';
import { css } from 'styled-components';
import CreateList from './component/CreateList';
import DragDropFile from './component/DragDropfile';
import Submit from './component/Submit';
import { useState } from 'react';
import ShowPlot from './component/ShowPlot';

// 한글 고딕체 위로 바꾸기

// axios 전역 설정
// axios.defaults.withCredentials = true;
const WelcomeDiv = styled.div`
    padding: 2rem 4rem;
    margin-left: 3.8em;
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Welcome = styled.h1`
    color: #334841;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    line-height: 50px;
    font-family: 'gmk';
`;

const ThreeDiv = styled.div`
    padding: 2rem 4rem;
    margin-left: 3.8em;
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
    font-family: 'Roboto Slab', serif;
`;

const Ul = styled.nav`
    font-size: 1.1em;
    min-width: 100px;
    padding-right: 20px;
`;

const Link = styled.a`
    display: block;
    margin: 0 calc(20px * -1);
    padding: 8px 20px;
    border-radius: 4px;
    color: #fffffe;
    text-decoration: none;

    ${(p) =>
        p.active &&
        css`
            color: #ff8906;
            font-weight: bold;
        `}

    &:hover {
        background: white;
        color: gray;
        transform: translateY(-2px);
        transition: 1s;
    }

    &:not([href]) {
        color: #a7a9be;
        background: revert;
        transform: none;
    }
`;
const Separator = styled.hr`
    margin: 0;
    padding: 0;
    border: 0;
    height: 1px;
    border-top: 1px solid #fffffe;
`;

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

const Menu = styled.nav`
    display: inline;
    font-size: 20px;
    font-style: italic;
    align-items: center;
    text-align: center;
    padding-top: 150px;
    font-family: 'Hallym';
    position: absolute;
    padding-left: 1.3em;
    height: 80px;
    width: 240px;
`;

const One = styled.div`
    /* background-size: cover;
    text-align: center;
    padding-top: 180px;
    padding-bottom: 130px; */
`;

const Two = styled.div``;

const Three = styled.div``;

const Five = styled.div``;

const Four = styled.div`
    text-align: center;
    align-items: center;
`;

const Logo = styled.h3`
    margin-top: 30px;
    position: absolute;
    left: 1em;
    font-size: 2.1em;
    color: white;
    font-family: 'Hallym';
    /* 굵게가 안 먹히네.. */
    font-weight: bold;
`;
const Header = styled.div``;

function Main(props) {
    const [filedata, setFileData] = useState();
    const [paramdata, setParamData] = useState();
    const [address, setAddress] = useState();

    console.log('Main');
    console.log(address);

    return (
        <Div>
            <Container>
                <Header>
                    <Logo>
                        <b>MelOnKube</b>
                    </Logo>
                    <Menu>
                        <Ul>
                            <Link href="#Intro">Intro</Link>
                            <Separator></Separator>
                            <Link href="#Insert_Code">Insert_Code</Link>
                            <Separator></Separator>
                            <Link href="#Insert_Parameter">
                                Insert_Parameter
                            </Link>
                            <Separator></Separator>
                            <Link href="#Result">Result</Link>
                            <Separator></Separator>
                            <Link href="#Send">Sending</Link>
                            <Separator></Separator>
                        </Ul>
                    </Menu>
                </Header>
                <List className="list">
                    <One id="Intro">
                        <WelcomeDiv>
                            <Welcome>
                                Kubernetes를 활용한 Hyper Parameter Tuning과
                                <br></br>
                                MLmodel 배포를 위한 MLOps 플랫폼
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
                                setAddress={setAddress}
                                filedata={filedata}
                                paramdata={paramdata}
                            ></Submit>
                        </ThreeDiv>
                    </Three>
                </List>
                <List className="list">
                    <Four id="Result">
                        <ShowPlot address={address}></ShowPlot>
                    </Four>
                </List>
                <List className="list">
                    <Five id="Send"></Five>
                </List>
            </Container>
        </Div>
    );
}

export default Main;
