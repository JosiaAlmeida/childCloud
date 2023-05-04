import "./index.css";
import logo from "../../assets/logo.png";

export const Menu = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="img-fluid-logo" />
      <button className="btn btn-login">Log In</button>
    </nav>
  );
};
