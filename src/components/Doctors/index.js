import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import DoctorData from "../../Data/Doctors.json";
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg  from "../../assets/img/nurse.jpg";
import AppointmentForm from "../AppointmentForm";
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
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Appointment Form
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="custom-header">
          <span>
            <p>All Doctors ({DoctorCount})</p>
          </span>
          <span>
            <form class="d-flex" role="search">
              <div className="search-input-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                 />
                <BsSearch className="search-icon" />
               </div>
            </form>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
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
                      
                      <button
                            type="button"
                            className="both-buttons appointment-button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
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
