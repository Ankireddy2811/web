import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AppointmentForm = () => {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Date Of BirthDay</Form.Label>
            <Form.Control type="date" placeholder="Enter Contact Number" />
          </Form.Group>
          
        <Form.Group>
          <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
         </fieldset>
        </Form.Group>
          {/* <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label> */}
        </Row>

        {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}

        <Row className="">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div class="container mt-4">
        <button
          onclick="document.getElementById('id01').style.display='block'"
          class="w3-button w3-black w3-round-xlarge"
        >
          Book Appointment
        </button>

        <div id="id01" class="">
          <div class="w3-modal-content w3-animate-zoom w3-card-4">
            <header class="w3-container w3-wwhite">
              <h3 class="text-center">Book Appointment Form</h3>
            </header>
            <div class="w3-container">
              <form id="AppointmentForm" class="form">
                <div class="column mt-5">
                  <div class="input-box">
                    <label for="name">First Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter your Last Name"
                      required
                    />
                  </div>
                </div>

                <div class="input-box">
                  <label for="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div class="column">
                  <div class="input-box">
                    <label for="contact">Phone Number</label>
                    <input
                      id="contact"
                      type="number"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <label>Birth Date</label>
                    <input
                      type="date"
                      name="birthdate"
                      placeholder="Enter birth date"
                      required
                    />
                  </div>
                </div>
                <div class="gender-box">
                  <h3>Gender</h3>
                  <div class="gender-option">
                    <div class="gender">
                      <input
                        type="radio"
                        id="check-male"
                        name="gender"
                        value="male"
                        checked
                      />
                      <label for="check-male">Male</label>
                    </div>
                    <div class="gender">
                      <input
                        type="radio"
                        id="check-female"
                        name="gender"
                        value="female"
                      />
                      <label for="check-female">Female</label>
                    </div>
                  </div>
                </div>
                <div class="input-box address">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    required
                  />
                </div>
                <h5>Do you have any mediacal history ?</h5>

                <label>
                  <input
                    type="radio"
                    name="inputChoice"
                    value="yes"
                    id="yesRadio"
                  />{" "}
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="inputChoice"
                    value="no"
                    id="noRadio"
                  />{" "}
                  No
                </label>

                <div id="inputField">
                  <label for="userInput">Please provide:</label>
                  <input type="text" id="userInput" />
                </div>
                <div class="w3-container mb-4 text-center">
                  <button type="submit" class="w3-button w3-round-xxlarge">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
