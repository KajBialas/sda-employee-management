import "./Browser.scss";
import React, { useState } from "react";

export const Browser = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = () => {
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search employee"
      />
    </div>
  );
};
