import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import DoctorData from "../../Data/Doctors.json";
import AppointmentForm from "../AppointmentForm";
import DoctorsCard from "../DoctorsCard"
import Spinner from "../Spinner";
import "./index.css";

const Doctors = () => {
  const { doctors } = DoctorData;
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const DoctorCount = doctors.length;

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="custom-container mt-3 me-4">
        <div className="custom-header">
          <span>
            <p className="all-doctors-text">All Doctors ({DoctorCount})</p>
          </span>
          <span>
            <form class="d-flex" role="search">
              <div className="search-input-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                 />
                <BsSearch className="search-icon" />
               </div>
            </form>
          
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
              filteredDoctors.map(eachContent=> (
               <DoctorsCard key={eachContent.doctor_id} eachItem={eachContent}/>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Doctors;
