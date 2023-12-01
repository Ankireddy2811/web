import React, { useState } from 'react';
import "./index.css"

const doctor = {
  "doctor_id": 101,
  "first_name": "Dr. Smith",
  "last_name": "Johnson",
  "profile_image": "doctor_smith_profile.jpg",
  "email": "drsmith@example.com",
  "contact": "987-654-3210",
  "specialty": "Cardiology",
  "qualification": "MBBS, MD",
  "address": "123 Cardiac Lane, Cityville",
  "department_name": "Cardiology",
  "client_id": 1,
  "registration_number": "N67890",
  "gender": "Male",
  "date_of_birth": "1975-05-15",
  "hospital_name": "City General Hospital",
  "language": "English, हिंदी, తెలుగు",
  "experience": "5 years",
  "about": "HeartCare Hospital is a leading cardiac care center."
}

const DoctorProfile = (props) => {
  console.log(props)
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  console.log("Doctor Profile")

  return (
    <div className="doctor-profile">
      <div className="profile-header">
        <img src={doctor.profile_image} alt={`${doctor.first_name} ${doctor.last_name}`} />
        <h2>{`${doctor.first_name} ${doctor.last_name}`}</h2>
        <p>{doctor.specialty}</p>
      </div>
      <div className="profile-details">
        <p>Email: {doctor.email}</p>
        <p>Contact: {doctor.contact}</p>
        <p>Qualification: {doctor.qualification}</p>
        <p>Address: {doctor.address}</p>
        <p>Department: {doctor.department_name}</p>
        <p>Registration Number: {doctor.registration_number}</p>
        <p>Gender: {doctor.gender}</p>
        <p>Date of Birth: {doctor.date_of_birth}</p>
        <p>Hospital: {doctor.hospital_name}</p>
        <p>Language: {doctor.language}</p>
        <p>Experience: {doctor.experience}</p>
        <button onClick={toggleAbout}>{showAbout ? 'Hide About' : 'Show About'}</button>
        {showAbout && <p>About: {doctor.about}</p>}
      </div>
    </div>
  );
};

export default DoctorProfile;
