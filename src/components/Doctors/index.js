import React, { useState } from "react";
import DoctorData from "../../Data/Doctors.json";
import DoctorImg from "../../assets/img/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner";

const Doctors = () => {
  const { doctors } = DoctorData;
  const [loading, setLoading] = useState(false);
  const DoctorCount = doctors.length;
  

  return (
    <>
      <div className="d-flex flex-column justify-content-start">
        <div className="d-flex justify-content-between">
          <span>
            <p>All Doctors ({DoctorCount})</p>
          </span>
          <span>
            <input type="search" width="200" placeholder="Search Doctor, Diesases" name="" id=""/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        {/* All Doctors here */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="d-flex flex-row flex-wrap">
            {doctors.length === 0
              ? "NO Data Found"
              : doctors.map((eachItem,index) => (
                  <div className="mt-2 col-md-6" key={index}>
                    <div className="card me-4 d-flex flex-row">
                      <img
                        src={DoctorImg}
                        className="p-3 w-25 h-25"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>
                          {eachItem.first_name} {eachItem.last_name}
                        </h5>
                         <p style={{ fontSize: '1em', color: '#ea4335' }}>{eachItem.hospital_name}</p>
                         <p style={{ fontSize: '1em', fontStyle: 'italic', color: '#795548' }}>{eachItem.specialty}</p>
                        <span>
                          <button href="#" className="btn btn-primary text-center m-1">
                            Full Profle
                          </button>
                          <button href="#" className="btn btn-success text-center m-1">
                            Appointment Book
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Doctors;
