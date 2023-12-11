import React, { useState,useEffect } from "react";
import {BsSearch} from 'react-icons/bs'
import DoctorData from "../../Data/Doctors.json";
import AppointmentForm from "../AppointmentForm";
import DoctorsCard from "../DoctorsCard"
import axios from "axios";
import Spinner from "../Spinner";
import "./index.css";

const Doctors = () => {
  const [doctorsData,setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API call using axios
        const response = await axios("https://www.iyrajewels.com/api/doctor/list");
        
        // Log the entire response
        console.log(response);
  
        // Extract the data from the response
        const data = await response.data;
        // Log the data
        
        const {Data} = data 
        console.log(Data);
        // Map the data to a new format
        const allDoctorsData = Data.map(eachItem => ({
          doctor_id: eachItem.doctor_id,
          firstName: eachItem.first_name,
          lastName: eachItem.last_name,
          profileImage: eachItem.profile_image,
          gender: eachItem.gender,
          email: eachItem.email,
          contactNumber: eachItem.contact_number,
          dateOfBirth: eachItem.date_of_birth,
          specialty: eachItem.specialty,
          qualifications: eachItem.qualifications,
          address: eachItem.address,
          department: eachItem.department,
          createdAt: eachItem.created_at,
          updatedAt: eachItem.updated_at,
          clientId: eachItem.client_id
        }));
  
        // Set the processed data in the state
      setDoctorsData(allDoctorsData);
      } catch (error) {
        // Handle any errors that might occur during the API call or data processing
        console.error("Error fetching or processing data:", error);
      }
    };
  
    // Call the fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []);
  

  // const filteredDoctors = doctorsData.filter(
  //   (doctor) =>
  //     doctor.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     doctor.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const renderFailureView = () => (
    <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
  )

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
            <p className="all-doctors-text">All Doctors ({doctorsData.length})</p>
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
        
          <div className="custom-doctor-container">
            {doctorsData.length === 0 ? (
              <div className="no-products-view">
              <img
                src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1701504842/not_data_found_n5z2iq.png"
                className="no-products-img"
                alt="no products"
              />
              <h1 className="no-products-heading">No Doctors Found</h1>
              <p className="no-products-description">
                We could not find any doctors.Try again!!
              </p>
            </div>
            ) : (
              doctorsData.map(eachContent=> (
               <DoctorsCard key={eachContent.doctor_id} eachItem={eachContent}/>
              ))
            )}
          </div>
        
      </div>
    </>
  );
};

export default Doctors;
