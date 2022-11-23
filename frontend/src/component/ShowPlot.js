import React, { useState } from "react";
import styled from "styled-components";
import RadioContext from "./RadioContext";

const Div = styled.div`
  padding: 2rem 4rem;
  margin-left: 3.8em;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ShowPlot(props) {
  console.log("in show plot address");
  console.log(props.address);

  if (props.address) {
    // id_plot.html
    //http://172.20.36.226:5000
    return (
      <Div>
        <div>
          <iframe src={props.address} width="700px" height="480px"></iframe>
        </div>
        <RadioContext></RadioContext>
      </Div>
    );
  }
}

export default ShowPlot;
