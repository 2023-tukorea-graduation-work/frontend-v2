import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramListDetail from "../components/ProgramListDetail/ProgramListDetail";

const ProgramListDetail = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "25vh",
          backgroundColor: "#FFB07A",
        }}
      >
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <ProgramListDetail></ProgramListDetail>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProgramListDetail;