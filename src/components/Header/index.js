import "./index.css";
import Logo from "../../assets/img/Orionqo 2.png";

const Header = () => {
  return (
    <>
      <div id="header-image">
        <div className="logo-text">
          <img src={Logo} alt="" width="200" />
        </div>
      </div>
    </>
  );
};

export default Header;
