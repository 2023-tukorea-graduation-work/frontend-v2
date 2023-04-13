import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramDetail from "../../components/program/detail/ProgramDetail";

const ProgramListDetailPage = () => {
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
            <ProgramDetail></ProgramDetail>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProgramListDetailPage;
