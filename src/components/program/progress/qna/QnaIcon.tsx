import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useAppSelector } from "../../../../store/hooks";

const QnaIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <div>
      {user_gb === "MENTO" && (
        <FaRegCheckCircle
          size="1rem"
          style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
          className={`icon ${isActive ? "active" : ""}`}
          color={isActive ? "#07858C" : undefined}
          onClick={handleClick}
        />
      )}
      {user_gb === "MENTEE" && (
        <FaRegCheckCircle
          size="1rem"
          style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
          className={`icon ${isActive ? "active" : ""}`}
          color={isActive ? "#FF8E41" : undefined}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default QnaIcon;
