import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAppSelector } from "../../../../store/hooks";

const TestIcon = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {user_gb === "MENTO" && (
        <div>
          <FaCheckCircle
            size="40"
            style={{
              marginTop: "38%",
              marginLeft: "32%",
              cursor: "pointer",
            }}
            className={`icon ${isActive ? "active" : ""}`}
            color={isActive ? "#07858C" : "#d6d6d6"}
            onClick={handleClick}
          />
        </div>
      )}
      {user_gb === "MENTEE" && (
        <div>
          <FaCheckCircle
            size="40"
            style={{
              marginTop: "38%",
              marginLeft: "32%",
              cursor: "pointer",
            }}
            className={`icon ${isActive ? "active" : ""}`}
            color={isActive ? "#FF8E41" : "#d6d6d6"}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default TestIcon;
