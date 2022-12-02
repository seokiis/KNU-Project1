import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Header = styled.nav`
  font-family: "Hallym";
  //align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #ffde67;
`;

const Logo = styled.h3`
  display: inline;
  font-size: 2em;
  padding-left: 0.6em;
  vertical-align: middle;

  padding-top: 50px;
`;

const Menu = styled.div`
  display: flex;
  padding-left: 47em;
  padding-top: 2.5em;
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 1.5em;
  margin-left: 30px;
  color: rgb(255, 255, 255);
  text-decoration: none;

  ${(p) =>
    p.active &&
    css`
      color: #ff8906;
      font-weight: bold;
    `}

  &:hover {
    color: black;
    transform: translateY(-2px);
    transition: 1s;
  }
`;

const Div = styled.div``;

function Nav() {
  return (
    <Header>
      <Div>
        {/* <Logo>MelOnKube</Logo> */}
        <Menu>
          <Link href="github">Github</Link>
          <Link href="#Intro">Intro</Link>
          <Link href="#Insert_Code">Code</Link>
          <Link href="#Insert_Parameter">Parameter</Link>
          <Link href="#Plot">Plot</Link>
          <Link href="#Send">Sending</Link>
        </Menu>
      </Div>
    </Header>
  );
}

export default Nav;
