import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramList from "../components/ProgramList/ProgramList";
import styled from "@emotion/styled";
import { useAppSelector } from "../app/hook";

const ProgramList = () => {
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const Color = styled.div`
    width: 100%;
    height: 25vh;
    background-color: ${userGb === "MENTO" ? "#399DA3" : "#ffb07a"};
  `;
  return (
    <>
      <Color>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <ProgramList></ProgramList>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </Color>
    </>
  );
};

export default ProgramList;