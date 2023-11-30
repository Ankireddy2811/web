import React from "react";
import Doctors from "../components/Doctors";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSideBar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">

          {/* Left Side Content 
          <div>
            <LeftSidebar/>
          </div> *}
          
          {/* Mian Content */}
          <div>
            <Doctors/>
          </div>
          
          {/* Right side Content 
          <div>
            <RightSidebar/>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
