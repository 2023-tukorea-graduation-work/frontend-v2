import React from "react";
import styled from "@emotion/styled";

const UserProfileProgram = () => {
  return <Preview></Preview>;
};

const Preview = styled.div`
  width: 30%;
  height: 13.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  margin: 1.75rem 1.75rem 1.875rem 0;
  background-color: white;
  border-top-right-radius: 4rem;
  @media (max-width: 2000px) {
  }
  @media (max-width: 1580px) {
    width: 45%;
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export default UserProfileProgram;
