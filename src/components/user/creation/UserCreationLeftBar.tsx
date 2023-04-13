import React from "react";
import styled from "@emotion/styled";

const UserCreationLeftBar = (props: any) => {
  const LeftStyle = styled.div`
    width: 15%;
    height: 87vh;
    background-color: #fff0e6;
    font-family: "NotoSansMedium";
    font-size: 0.8rem;
    text-align: center;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  `;
  const ProcessStyle = styled.div`
    position: relative;
    top: 5%;
    margin-top: 3rem;
    display: block;
    color: #777;
  `;
  return (
    <>
      <LeftStyle>
        {props.orderProcess.map((value: any, index: any) => {
          if (index === props.countStep)
            return (
              <ProcessStyle key={index} style={{ color: "#000" }}>
                {value}
              </ProcessStyle>
            );
          return <ProcessStyle key={index}>{value}</ProcessStyle>;
        })}
      </LeftStyle>
    </>
  );
};

export default UserCreationLeftBar;
