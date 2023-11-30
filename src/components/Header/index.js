import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/Orionqo.png";
import "./index.css";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/img/Orionqo 2.png";

const Header = () => {
  return (
    <>
      <section>
        <div className="">
          <div id="header-image">
            <div className="container">
              <div className="logo-text">
                <img src={Logo} alt="" width="200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-space-between">
          <span classNameName="navbar-brand">
            <img src={logo} alt="" width="150px" />
          </span>
          <a classNameName="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="">
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}
      {/* <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Hospitals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Doctors
                  </a>
                </li> 
              </ul>

              <span><FontAwesomeIcon icon={faUser} /></span>

              <span>
              <form className="d-flex" role="search">
               <input className="form-control me-2" id='navSearchbox' type="search" placeholder="Hospitals, Doctors, diease" aria-label="Search" /> 
               <span><FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
               {/* <button className="btn btn-outline-success" type="submit">Search</button> 
              </form>
              </span>

               {/* <span className='ms-3'>
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </span>
            </div>
          </span>
        </div>
      </nav>
    </section>
      */}
    </>
  );
};

export default Header;
