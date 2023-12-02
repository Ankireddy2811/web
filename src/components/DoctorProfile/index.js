// DoctorProfile.js

import React, { useState, useEffect } from "react";
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg from "../../assets/img/nurse.png";
import DoctorData from "../../Data/Doctors.json";
import "./index.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faGraduationCap, faIdCard, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../AppointmentForm";


const DoctorProfile = (props) => {
  const [DoctorProfile, setDoctorProfile] = useState({});

  useEffect(() => {
    const { match } = props;
    const { doctors } = DoctorData;
    const filteredDoctorProfile = doctors.filter(
      (eachItem) => eachItem.doctor_id == match.params.id
    );
    setDoctorProfile(filteredDoctorProfile[0]);
  }, [props.match.params.id]);

  return (
    <>
      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white">
                    <img
                      className="img-fluid my-3"
                      src={
                        DoctorProfile.gender === "Male" ? DoctorImg : NurseImg
                      }
                      alt={`${DoctorProfile.first_name} ${DoctorProfile.last_name}`}
                    />
                    <span>
                      <h5>{`${DoctorProfile.first_name} ${DoctorProfile.last_name}`}</h5>
                      <FontAwesomeIcon icon={faGraduationCap} /> ({DoctorProfile.qualification})
                    </span>
                    <div className="mt-3">
                      <button
                        type="button"
                        className="both-buttons appointment-button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Appointment Book
                      </button>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4 ">
                      <h6 className="mb-3">
                        {DoctorProfile.specialty} | {DoctorProfile.experience}
                      </h6>
                      <hr className="mt-0 mb-2" />
                      <div className="row pt-1">
                        <div className="mb-4">
                          <h6>
                            Registration Number{" "}</h6>
                            <span className="text-muted mt-3">
                            <FontAwesomeIcon icon={faIdCard} /> : {DoctorProfile.registration_number}
                            </span>{" "}
                        </div>
                      </div>
                      <h6><FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#213454" }}
                    /> {DoctorProfile.hospital_name}</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="mb-3">
                          <h6><FontAwesomeIcon icon={faGlobe} /> Language</h6>
                          <p className="text-muted"> {DoctorProfile.language}</p>
                        </div>
                      </div>

                      <div className="row">
                         <h6>about</h6>
                         <p className="text-muted">{DoctorProfile.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </section>
    </>
  );
};

export default DoctorProfile;

/**
 
   <div className="doctor-profile">
        <div className="profile-header">
          <img
            src={DoctorProfile.gender === "Male" ? DoctorImg : NurseImg}
            alt={`${DoctorProfile.first_name} ${DoctorProfile.last_name}`}
          />
          <h2>{`${DoctorProfile.first_name} ${DoctorProfile.last_name}`}</h2>
          <p className="">Specialty: {DoctorProfile.specialty}</p>
        </div>
        <div className="profile-details">
          <p className=" email">Email: {DoctorProfile.email}</p>
          <p className=" contact">Contact: {DoctorProfile.contact}</p>
          <p className="qualification">
            Qualification: {DoctorProfile.qualification}
          </p>
          <p className=" address">Address: {DoctorProfile.address}</p>
          <p className=" department">
            Department: {DoctorProfile.department_name}
          </p>
          <p className=" reg-number">
            Registration Number: {DoctorProfile.registration_number}
          </p>
          <p className=" gender">Gender: {DoctorProfile.gender}</p>
          <p className=" dob">Date of Birth: {DoctorProfile.date_of_birth}</p>
          <p className=" hospital">
            Hospital Name: {DoctorProfile.hospital_name}
          </p>
          <p className="language">Language: {DoctorProfile.language}</p>
          <p className=" experience">Experience: {DoctorProfile.experience}</p>
          <p className=" registration_number">
            registration_number: {DoctorProfile.registration_number}
          </p>
          <p className=" date_of_birth">
            Date Of Birth: {DoctorProfile.date_of_birth}
          </p>
          <p className=" hospital_name">
            hospital Name: {DoctorProfile.hospital_name}
          </p>
          <p className=" about">About: {DoctorProfile.about}</p>
        </div>
      </div>
 */
