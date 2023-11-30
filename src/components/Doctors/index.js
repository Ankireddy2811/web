import React, { useState } from "react";
import DoctorData from "../../Data/Doctors.json";
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg  from "../../assets/img/nurse.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner";
import "./index.css"; 

const Doctors = () => {
  const { doctors } = DoctorData;
  const [loading, setLoading] = useState(false);
  const DoctorCount = doctors.length;

  return (
    <>
      <div className="custom-container">
        <div className="custom-header">
          <span>
            <p>All Doctors ({DoctorCount})</p>
          </span>
          <span>
            <input
              type="search"
              width="200"
              placeholder="Search Doctor, Diseases"
              name=""
              id=""
              className="custom-search-input"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="custom-search-icon" />
          </span>
        </div>

        {/* All Doctors here */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="custom-doctor-container">
            {doctors.length === 0 ? (
              <p className="custom-no-data">NO Data Found</p>
            ) : (
              doctors.map((eachItem, index) => (
                <div className="custom-doctor-card" key={index}>
                  <img src={eachItem.gender === "Male" ? DoctorImg : NurseImg} className="custom-doctor-image" alt="..." />
                  <div className="custom-doctor-details">
                    <h5 className="custom-doctor-title">
                      {eachItem.first_name} {eachItem.last_name}
                    </h5>
                    <p className="custom-doctor-hospital">{eachItem.hospital_name}</p>
                    <p className="custom-doctor-specialty">{eachItem.specialty}</p>
                    <span  className="experience-container">
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/award.svg" className="exp-icon"/>
                    <p className="custom-doctor-experience">Overall {eachItem.experience} experience</p>
                    </span>
                    <span className="custom-doctor-buttons">
                      <button href="#" className="both-buttons profile-button">
                        Full Profile
                      </button>
                      <button href="#" className="both-buttons appointment-button">
                        Appointment Book
                      </button>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Doctors;
