// DoctorProfile.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg from "../../assets/img/nurse.png";
//import DoctorData from "../../Data/Doctors.json";

import "./index.css";
//import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../AppointmentForm";


const DoctorProfile = (props) => {
  const [DoctorProfile, setDoctorProfile] = useState({});
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    const { match } = props;
   
    console.log(match.params.id);
    const headersPart = {
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNTI2NjI5LCJpYXQiOjE3MDE3OTg2MjksImp0aSI6IjQzMDBhYWFlNmE1YzRiM2M4ODI3ODYyMmM2MjI2ZTM2IiwiY2xpZW50X2lkIjoiSElEMDAwMDEifQ.fygOVusWrVFuWRLunV7GBWi8XfdKbgMc31T9C9ucukY `,
      },
    };
    const formData = {
      doctor_id:match.params.id,
      client_id:'HID00004'

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
        department:Data[0].department,
        contactNumber:Data[0].contact_number,
        dateOfBirth: Data[0].date_of_birth,
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
                  <div className="col-md-4 gradient-custom text-center text-white pb-2">
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
                      
                      <div className="row pt-1">
                        <div className="mb-1">
                          <h6  className="text-muted">Date of Birth: {DoctorProfile.dateOfBirth}</h6>
                        
                        </div> 
                      </div> 
                      <div className="row pt-1">
                        <div className="mb-1">
                          <h6  className="text-muted">Email: {DoctorProfile.email}</h6>
                        
                        </div> 
                      </div> 

                      <div className="row pt-1">
                        <div className="mb-1">
                          <h6  className="text-muted">Contact Number: {DoctorProfile.contactNumber}</h6>
                        
                        </div> 
                      </div> 

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

