import React from "react";
import DoctorData from "../../Data/Doctors.json";
import DoctorImg from "../../assets/img/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {
  const { doctors } = DoctorData;

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <span>
            <p>All Doctors (30)</p>
          </span>
          <span>
            <input
              type="search"
              width="200"
              placeholder="Search Doctor, Diesases"
              name=""
              id=""
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>


        {/* All Doctors here */}
        {doctors.map((eachItem) => (
          <div className="mt-2">
            <div class="card">
              <img
                src={DoctorImg}
                width="80px"
                height="80px"
                className=""
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{eachItem.first_name} {eachItem.last_name}</h5>
                <p class="card-text">
                  {eachItem.profile_image}
                </p>
                <p>
                  {eachItem.hospital_name}
                </p>
                <p>
                  {eachItem.email}
                </p>
                <p>
                  {eachItem.contact}
                </p>
                  {eachItem.specialty}
                <span>
                  <button href="#" className="btn btn-primary">
                    Full Profle
                  </button>
                  <button href="#" className="btn btn-primary">
                    Appointment Book
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Doctors;
