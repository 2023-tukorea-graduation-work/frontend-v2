import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const TestIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
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
  );
};

export default TestIcon;
