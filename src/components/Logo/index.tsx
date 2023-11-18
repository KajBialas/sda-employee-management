import "./Logo.scss";

const logoURL = "/LogoEM.png";

export const Logo = () => {
  return (
    <div>
      <img src={logoURL} alt="Logo Employee Management App" />
    </div>
  );
};
