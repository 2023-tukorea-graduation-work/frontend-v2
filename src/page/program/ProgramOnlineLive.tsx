import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import React from "react";
import OnlineLive from "../../components/program/progress/onlineclass/OnlineLive";

const ProgramOnlineLivePage = () => {
  return (
    <Grid container>
      <Grid xs={1}></Grid>
      <Grid xs={10} sx={{ display: "flex" }}>
        <OnlineLive></OnlineLive>
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
};

export default ProgramOnlineLivePage;
