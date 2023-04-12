import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Mainpage = () => {
  return (
    <MainForm>
      <p style={{ fontSize: "6rem" }}>
        Welcome<p>to this page!</p>
      </p>
      <MainCa1>
        <p>box</p>
      </MainCa1>
    </MainForm>
  );
};
const MainForm = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #ffeee3;
  text-align: center;
`;
const MainCa1 = styled.div``;
export default Mainpage;