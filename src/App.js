import './App.css';
import styled from 'styled-components';

const Div = styled.div``;

const Container = styled.div`
    /* 스크롤 할 때 화면이 중간에서 안 멈추도록 */
    width: 100%;
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
`;

const MainLogo = styled.h1`
    padding-left: 1em;
    font-size: 2em;
    color: yellow;
`;

const One = styled.div``;
const Two = styled.div``;
const List = styled.div``;

function App() {
    return (
        <Div>
            <Container>
                <List className="list">
                    <One>
                        <MainLogo>MelOnKube</MainLogo>
                    </One>
                </List>
                <List className="list">
                    <Two>
                        <MainLogo>MelOnKube</MainLogo>
                    </Two>
                </List>
            </Container>
        </Div>
    );
}

export default App;
