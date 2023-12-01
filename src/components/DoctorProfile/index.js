// DoctorProfile.js

import React, { useState, useEffect } from 'react';
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg from "../../assets/img/nurse.jpg";
import DoctorData from "../../Data/Doctors.json";
import "./index.css";

const DoctorProfile = (props) => {
  const [DoctorProfile, setDoctorProfile] = useState({});

  useEffect(() => {
    const { match } = props;
    const { doctors } = DoctorData;
    const filteredDoctorProfile = doctors.filter(eachItem => eachItem.doctor_id == match.params.id);
    setDoctorProfile(filteredDoctorProfile[0]);
  }, [props.match.params.id]);

  return (
    <div className="doctor-profile">
      <div className="profile-header">
        <img src={DoctorProfile.gender === "Male" ? DoctorImg : NurseImg} alt={`${DoctorProfile.first_name} ${DoctorProfile.last_name}`} />
        <h2>{`${DoctorProfile.first_name} ${DoctorProfile.last_name}`}</h2>
        <p className="label">Specialty: {DoctorProfile.specialty}</p>
     
      </div>
      <div className="profile-details">
        <p className="label email">Email: {DoctorProfile.email}</p>
        <p className="label contact">Contact: {DoctorProfile.contact}</p>
        <p className="label qualification">Qualification: {DoctorProfile.qualification}</p>
        <p className="label address">Address: {DoctorProfile.address}</p>
        <p className="label department">Department: {DoctorProfile.department_name}</p>
        <p className="label reg-number">Registration Number: {DoctorProfile.registration_number}</p>
        <p className="label gender">Gender: {DoctorProfile.gender}</p>
        <p className="label dob">Date of Birth: {DoctorProfile.date_of_birth}</p>
        <p className="label hospital">Hospital: {DoctorProfile.hospital_name}</p>
        <p className="label language">Language: {DoctorProfile.language}</p>
        <p className="label experience">Experience: {DoctorProfile.experience}</p>

      </div>
    </div>
  );
};

export default DoctorProfile;
