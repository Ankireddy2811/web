import { Link } from "react-router-dom"
import DoctorImg from "../../assets/img/doctor.png";
import NurseImg from "../../assets/img/nurse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./index.css"


const DoctorsCard = (props) => {
    const { eachItem } = props
    return (
       <div className="custom-doctor-card">
            <img
                src={eachItem.gender === "Male" ? DoctorImg : NurseImg}
                className="custom-doctor-image"
                alt="..."
            />
            <div className="custom-doctor-details">
                <h5 className="custom-doctor-title">
                    {eachItem.first_name} {eachItem.last_name}
                </h5>
                <span className="text-danger fw-bold custom-doctor-specialty">{eachItem.specialty} </span>
                <span className="text-body-secondary">
                    ({eachItem.qualification})
                </span>
                <div className="mt-1">
                    <FontAwesomeIcon
                        icon={faAward}
                        style={{ color: "#eabd1a" }}
                    /> <span className="fw-semibold">
                        {eachItem.experience} experience
                    </span>
                </div>

                <div className="mt-1">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#213454" }}
                    />{" "}
                    <span className="text-success fw-medium custom-doctor-hospital">
                        {eachItem.hospital_name}
                    </span>
                </div>
                <div className="mt-1">
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faGlobe} />
                            <span className="text-primary">
                                {" "}
                                {eachItem.language}
                            </span>
                        </span>
                    </p>
                </div>

                <span className="custom-doctor-buttons">
                    <Link to={`/doctors/${eachItem.doctor_id}`} className="both-buttons profile-button">
                        Full Profile
                    </Link>

                    <button
                        type="button"
                        className="both-buttons appointment-button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Appointment Book
                    </button>
                </span>
            </div>
        </div>
    )
}

export default DoctorsCard