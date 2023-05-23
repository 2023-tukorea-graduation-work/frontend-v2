import React from "react";
import Main from "../../components/main/Main";
import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
const MainPage = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Main></Main>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div<{ user_gb: string }>`
  width: 100%;
  height: 30vh;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#399DA3"};
`;
export default MainPage;
