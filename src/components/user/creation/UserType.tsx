import React from "react";
import styled from "@emotion/styled";

const UserType = (props) => {
  return (
    <BasicForm>
      <HellowStyle>환형합니다. 멘토/멘티를 선택해주세요</HellowStyle>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "center",
        }}
      >
        <Test
          onClick={() => {
            props.isMento();
            props.increaseStep();
          }}
        >
         <ImageStyle>
               <img
                src="/images/mento.png"
                alt="logo"
                style={{ height: "24vh", objectFit: "contain"}}
              /> 
            </ImageStyle>

          <Testbox2>
          멘토
          </Testbox2>
        </Test>
        <Test onClick={props.increaseStep} style={{ marginLeft: "5rem" }}>

        <ImageStyle>
               <img
                src="/images/mentee.png"
                alt="logo"
                style={{ height: "24vh", objectFit: "contain" }}
              /> 
            </ImageStyle>
          
          <Testbox>
          멘티
          </Testbox>

        </Test>
      </div>
    </BasicForm>
  );
};

const ImageStyle = styled.div`
height: calc();
width: 100%;
object-fit: contain;
`;
const BasicForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
`;
const HellowStyle = styled.div`
  margin-bottom: 7%;
  font-family: "NotoSansMedium";
  font-size: 1rem;
  color: #000;
  font-weight:normal;
`;
const Test = styled.div`
width: 35%;
height: 80%;
box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
background-color: #fff;
border-top-right-radius: 4rem;
cursor: pointer;
text-align: center;
font-size:1rem;
font-weight:bold;
`;
const Testbox = styled.div`
  width:100%;
  height:30%;
  background-color:#FFB07A;
  color:#FFFFFF;
  line-height:10vh;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  `;
  const Testbox2 = styled.div`
  width:100%;
  height:30%;
  background-color:#83C2C5;
  color:#FFFFFF;
  line-height:10vh;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  `;

export default UserType;