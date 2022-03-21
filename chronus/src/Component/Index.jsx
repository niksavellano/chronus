import React, { Component } from "react";
import titan from "../pics/Titan.png";
import "./css/Index.css";

import firebase from "firebase";
import { firebaseConfig } from "./Config";

import { Route, Switch } from "react-router-dom";

import AskChronus from "./AskChronus";
import TytanaNewsfeed from "./TytanaNewsfeed";
import CurrentGrades from "./CurrentGrades";
import ClassSchedule from "./ClassSchedule";
import ScholasticRecords from "./ScholasticRecords";
import TuitionBalance from "./TuitionBalance";
import Deficiency from "./Deficiency";
import CalculateGrade from "./CalculateGrade";
import ManageAllowance from "./ManageAllowance";
import MTCFloorPlan from "./MTCFloorPlan";
import Faqs from "./FAQS";
import About from "./About";

firebase.initializeApp(firebaseConfig);

class Index extends Component {
  render() {
    return (
      <div className="container">
        <img src={titan} alt="" className="titan" />
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button type="button" class="btn btn-success">
          Login
        </button>
        <br />
        <button type="button" class="btn btn-success">
          Guest
        </button>
      </div>
    );
  }
}
export default Index;
