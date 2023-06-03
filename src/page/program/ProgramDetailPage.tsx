import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramDetail from "../../components/program/detail/ProgramDetail";
import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
const ProgramListDetailPage = () => {
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
            <ProgramDetail></ProgramDetail>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </Color>
    </>
  );
};

export default ProgramListDetailPage;
