// DoctorProfile.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorImg from "../../assets/img/doctor.png";

import NurseImg from "../../assets/img/nurse.png";
//import DoctorData from "../../Data/Doctors.json";

import "./index.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faGraduationCap, faIdCard, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../AppointmentForm";


const DoctorProfile = (props) => {
  const [DoctorProfile, setDoctorProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
    const { match } = props;
    const access = JSON.parse(localStorage.getItem("access_token"));
    const id = JSON.parse(localStorage.getItem("client_id"));
    console.log(match.params.id);
    const headersPart = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };
    const formData = {
      doctor_id:match.params.id,
      client_id:id

    }

    try {
      const response = await axios.post("https://www.iyrajewels.com/api/doctor/details-By",formData,headersPart);
      const data = await response.data;
      const {Data} = data 
      const specificData = {
        firstName:Data[0].first_name,
        lastName:Data[0].last_name,
        address:Data[0].address,
        email:Data[0].email,
        gender:Data[0].gender,
        specialty: Data[0].specialty,
        qualifications: Data[0].qualifications,
        department:Data[0].department
      }
      setDoctorProfile(specificData);
    } catch (error) {
      throw new Error(error);
    }
  
  }
  fetchData();
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
                        DoctorProfile.gender === "male" ? DoctorImg : NurseImg
                      }
                      alt={`${DoctorProfile.firstName} ${DoctorProfile.lastName}`}
                    />
                    <span>
                      <h5>{`${DoctorProfile.firstName} ${DoctorProfile.lastName}`}</h5>
                      <FontAwesomeIcon icon={faGraduationCap} /> ({DoctorProfile.qualifications})
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
                        {DoctorProfile.specialty}
                      </h6>
                    
                     {/* <div className="row pt-1">
                        <div className="mb-4">
                          <h6>
                            Registration Number{" "}</h6>
                            <span className="text-muted mt-3">
                            <FontAwesomeIcon icon={faIdCard} /> : {DoctorProfile.registration_number}
                            </span>{" "}
                        </div>
                    </div> */}
                      <h6><FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#213454" }}
                    /> {DoctorProfile.address}</h6>
                      
                      {/* <div className="row pt-1">
                        <div className="mb-3">
                          <h6><FontAwesomeIcon icon={faGlobe} /> Language</h6>
                          <p className="text-muted"> {DoctorProfile.language}</p>
                        </div> 
                  </div> */}

                      {/* <div className="row">
                         <h6>about</h6>
                         <p className="text-muted">{DoctorProfile.about}</p>
                      </div> */}
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

