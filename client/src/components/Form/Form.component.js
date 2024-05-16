import React, { useState } from "react";
import UserService from "../../Service/User.service";

import "./Form.styles.css";

const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    favSport: "",
    gender: "",
    state: "",
    ageConfirmation: "",
    car1: "",
    car2: "",
    car3: "",
    car4: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    // console.log(user);
    UserService.saveUser(user)
      .then((res) => {
        console.log("User Added Successfully");
        setMsg("Used Added Sucessfully");
        setUser({
          firstName: "",
          lastName: "",
          favSport: "",
          gender: "",
          state: "",
          ageConfirmation: "",
          car1: "",
          car2: "",
          car3: "",
          car4: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="personal-details">
      <div className="heading">
        <h1>Personal Details Form</h1>
      </div>
      {msg && <p className="message">{msg}</p>}
      <div className="form">
        <form
          onSubmit={(e) => {
            RegisterUser(e);
          }}
        >
          <label htmlFor="firstname" className="heading-label">
            First name:{" "}
          </label>
          <input
            id="firstname"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br></br>

          <label htmlFor="lastname" className="heading-label">
            Last name:{" "}
          </label>
          <input
            id="lastname"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br></br>

          <label htmlFor="favsport" className="heading-label">
            Favorite sport:{" "}
          </label>
          <select
            id="favsport"
            name="favSport"
            onChange={(e) => {
              handleChange(e);
            }}
            value={user.favSport}
          >
            <option>Select One</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Cricket">Cricket</option>
            <option value="Kabbadi">Kabbadi</option>
            <option value="Basketball">Basketball</option>
          </select>
          <br></br>

          <p className="heading-label">Gender: </p>
          <input
            className="radio-btn"
            type="radio"
            id="male"
            value="Male"
            name="gender"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="male">Male</label>
          {/* <br></br> */}
          <input
            className="radio-btn"
            type="radio"
            id="female"
            value="Female"
            name="gender"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="female">Female</label>
          {/* <br></br> */}
          <input
            className="radio-btn"
            type="radio"
            id="notsure"
            value="Not Sure"
            name="gender"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="notsure">Not Sure</label>
          <br></br>

          <label htmlFor="state" className="heading-label">
            Select State of Residency:{" "}
          </label>
          <select
            id="state"
            name="state"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option>Select One</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamilnadu">Tamilnadu</option>
          </select>
          <br></br>

          <input
            className="checkbox-btn"
            id="age-confirmation"
            type="checkbox"
            value="21 Years or Older"
            name="ageConfirmation"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="age-confirmation">21 Years or older</label>
          <br></br>

          <p className="heading-label">Car models owned: </p>
          <input
            className="checkbox-btn"
            id="car1"
            type="checkbox"
            name="car1"
            value="Toyota"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="car1">Toyota</label>
          {/* <br></br> */}
          <input
            className="checkbox-btn"
            id="car2"
            type="checkbox"
            name="car2"
            value="Honda"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="car2">Honda</label>
          {/* <br></br> */}
          <input
            className="checkbox-btn"
            id="car3"
            type="checkbox"
            name="car3"
            value="Ford"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="car3">Ford</label>
          {/* <br></br> */}
          <input
            className="checkbox-btn"
            id="car4"
            type="checkbox"
            name="car4"
            value="Hundai"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="car4">Hundai</label>
          <br></br>
          <div className="button">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
