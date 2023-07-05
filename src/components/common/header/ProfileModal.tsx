import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
interface Props {
  dropDownOff: () => void;
  dropDownState: boolean;
  children: React.ReactNode;
}
const ProfileModal = (props: Props) => {
  const profileRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        props.dropDownOff();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [profileRef]);
  return (
    <ProfileStyle ref={profileRef}>
      {props.dropDownState && props.children}
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 7.5%;
  right: 8.5%;
  width: 12rem;
  box-shadow: 3px 4px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 20px;
`;
export default ProfileModal;
