import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
    gender: "male",
    dob: "",
    hasHistory: false,
    historyDetails: "",
  });

  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const calculateAge = () => {
    // Calculate age based on Date of Birth
    if (formData.dob) {
      const dobDate = new Date(formData.dob);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobDate.getFullYear();
      return age;
    }
    return "";
  };

  return (
    <div>
      <div>
        <div className="container">
          <form>
            <div className="mb-2 d-flex justify-content-around">
              <span>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </span>

              <span>
                <label htmlFor="firstName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </span>
            </div>

            <div className="mb-2">
              <label htmlFor="contact" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="contact"
                name="contactNumber"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <div className="d-flex justify-content-sm-between">
                <span>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </span>
                <span className="me-5">
                  <p className="mt-2">Age: {calculateAge()}</p>
                </span>
              </div>
            </div>

            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="hasHistory"
                name="hasHistory"
                checked={formData.hasHistory}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="hasHistory">
                Do you have any history?
              </label>
            </div>

            {formData.hasHistory && (
              <div className="mb-3">
                <label htmlFor="historyDetails" className="form-label">
                  History Details
                </label>
                <textarea
                  className="form-control"
                  id="historyDetails"
                  name="historyDetails"
                  value={formData.historyDetails}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <textarea
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mx-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;