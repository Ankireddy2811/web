import React from "react";
import HospitalData from "../../Data/HospitalData.json"
import DoctorImg from "../../assets/img/doctor.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {


    // const {Doctors} = HospitalData;

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
            <span>
                <p>All Doctors (30)</p>
            </span>
            <span>
                <input type="search" width="200" placeholder="Search Doctor, Diesases" name="" id="" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
        </div>

        {/* All Doctors here */}

        <div>
      {/* <h2>{hospital_name}</h2> */}

    {/*  <h3>Doctors:</h3>
       <ul>
        {HospitalData.AllDoctors.map(doctorGroup => (
          doctorGroup.doctors.map(doctor => (
            <li key={doctor.doctor_id}>
              <p>{`${doctor.first_name} ${doctor.last_name}`}</p>
              <p>Email: {doctor.email}</p>
              <p>Contact: {doctor.contact}</p>
              <p>Specialty: {doctor.specialty}</p>
            </li>
          ))
        ))}
      </ul> */}
    </div>
        {/* {Doctors.map(eachItem=>( */}
        <div>
          <div class="card">
            <img src={DoctorImg} width="80px" height="80px" className="" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dctor Name</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <span>
              <a href="#" className="btn btn-primary">
                Full Profle
              </a>
              <a href="#" className="btn btn-primary">
                Appointment Book
              </a>
              </span>
            </div>
          </div>
        </div>
        {/* )) } */}
      </div>
    </>
  );
};

export default Doctors;
