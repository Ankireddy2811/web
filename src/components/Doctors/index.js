import React, { useState } from "react";
import DoctorData from "../../Data/Doctors.json";
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg from "../../assets/img/nurse.jpg";
import AppointmentForm from "../AppointmentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGlobe,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Doctor"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
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
                  <img
                    src={eachItem.gender === "Male" ? DoctorImg : NurseImg}
                    className="custom-doctor-image"
                    alt="..."
                  />
                  <div className="custom-doctor-details">
                    <h5 className="text-body-emphasis fw-bold">
                      {eachItem.first_name} {eachItem.last_name}
                    </h5>
                    <span className="text-danger fw-bold">{eachItem.specialty} </span>
                    <span className="text-body-secondary">
                      ({eachItem.qualification})
                    </span>
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={faAward}
                        style={{ color: "#eabd1a" }}
                      /> <span className="fw-semibold">
                        {eachItem.experience} experience
                      </span>
                    </div>

                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#213454" }}
                      />{" "}
                      <span className="custom-doctor-hospital text-success fw-medium">
                        {eachItem.hospital_name}
                      </span>
                    </div>
                    <div className="mt-1">
                       <p>
                      <span>
                        <FontAwesomeIcon icon={faGlobe} />
                        <span className="text-primary">
                          {" "}
                          {eachItem.language}
                        </span>
                      </span>
                    </p> 
                    </div>
                    
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
