import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const QnaIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <FaRegCheckCircle
        size="1rem"
        style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
        className={`icon ${isActive ? "active" : ""}`}
        color={isActive ? "#07858C" : undefined}
        onClick={handleClick}
      />
    </div>
  );
};

export default QnaIcon;
