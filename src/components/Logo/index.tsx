import "./Logo.scss";
import React from "react";

export const Logo = () => {
  const logoURL =
    "https://www.canva.com/design/DAFzbQhQdDE/DiZBpd9eXoLFbcNTbAxg7A/view?utm_content=DAFzbQhQdDE&utm_campaign=designshare&utm_medium=link&utm_source=editor";

  return (
    <div className="logoEM">
      <img src={logoURL} alt="Logo Employee Management App" />
    </div>
  );
};
