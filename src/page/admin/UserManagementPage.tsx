import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import Management from "../../components/admin/userManagement/Management";
const UserManagementPage = () => {
  return (
    <div style={{ backgroundColor: "#FFB07A", display: "flex" }}>
      <Block />
      <WhiteBox>
        <Management></Management>
      </WhiteBox>
      <Block />
    </div>
  );
};

const WhiteBox = styled.div`
  height: 90vh;
  width: 100rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-top-right-radius: 4rem;
`;
const Block = styled.div`
  height: 90vh;
  width: 10rem;
`;
export default UserManagementPage;
