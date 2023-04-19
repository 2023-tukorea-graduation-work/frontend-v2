import React from "react";
import styled from "@emotion/styled";
import { useAppSelector } from "../../../store/hooks";
interface Props {
  orderProcess: Array<string>;
  countStep: number;
}
const LeftBar = (props: Props) => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <>
      <LeftStyle user_gb={user_gb}>
        {props.orderProcess.map((value, index) => {
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
const LeftStyle = styled.div<{ user_gb: string }>`
  width: 15%;
  height: 87vh;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#fff0e6" : "#e6f3f3"};

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
export default LeftBar;
// 주황색 #fff0e6
// 푸른색 #e6f3f3
