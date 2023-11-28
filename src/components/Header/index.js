import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/img/Orionqo.png"
import './index.css'
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
   return (
    <>
    <section>
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
                </li> */}
              </ul>

              <span><FontAwesomeIcon icon={faUser} /></span>

              <span>
              <form className="d-flex" role="search">
               <input className="form-control me-2" id='navSearchbox' type="search" placeholder="Hospitals, Doctors, diease" aria-label="Search" /> 
               <span><FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
               {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
              </span>

               {/* <span className='ms-3'>
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </span> */}
            </div>
          </span>
        </div>
      </nav>
    </section>
     
     <section>
      <div>
        <div id='header-image'></div>
      </div>
     </section>
    </>

    // <nav className="nav-header">
    //   <div className="nav-content">
    //     <div className="nav-bar-mobile-logo-container">
    //       <Link to="/">
    //         <img
    //           className="website-logo"
    //           src={logo}
    //           alt="website logo"
    //         />
    //       </Link>

    //       <button type="button" className="nav-mobile-btn">
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
    //           alt="nav logout"
    //           className="nav-bar-image"
             
    //         />
    //       </button>
    //     </div>

    //     <div className="nav-bar-large-container">
    //       <Link to="/">
    //         <img
    //           className="website-logo"
    //           src={logo}
    //           alt="website logo"
    //         />
    //       </Link>
    //       <ul className="nav-menu">
    //         <li className="nav-menu-item">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li>

    //         <li className="nav-menu-item">
    //           <Link to="/products" className="nav-link">
    //             Hospitals
    //           </Link>
    //         </li>

    //         <li className="nav-menu-item">
    //           <Link to="/cart" className="nav-link">
    //             Doctors
    //           </Link>
    //         </li>
    //       </ul>
    //       <button
    //         type="button"
    //         className="logout-desktop-btn"
           
    //       >
    //         Login
    //       </button>
    //     </div>
    //   </div>
    //   <div className="nav-menu-mobile">
    //     <ul className="nav-menu-list-mobile">
    //       <li className="nav-menu-item-mobile">
    //         <Link to="/" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
    //             alt="nav home"
    //             className="nav-bar-image"
    //           />
    //         </Link>
    //       </li>

    //       <li className="nav-menu-item-mobile">
    //         <Link to="/products" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
    //             alt="nav products"
    //             className="nav-bar-image"
    //           />
    //         </Link>
    //       </li>
    //       <li className="nav-menu-item-mobile">
    //         <Link to="/cart" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
    //             alt="nav cart"
    //             className="nav-bar-image"
    //           />
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Header




