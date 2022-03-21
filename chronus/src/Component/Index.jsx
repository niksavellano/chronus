import React, { Component } from "react";
import titan from "../pics/Titan.png";
import "./css/Index.css";

import firebase from "firebase";
import { firebaseApp } from "./Config";

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
import ContactUs from "./ContactUs";
import About from "./About";
import NavBar from "./Navigation";

firebaseApp();

class Index extends Component {
  state = { isSignedIn: false };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={AskChronus} />
              <Route path="/newsfeed" component={TytanaNewsfeed} />
              <Route path="/grades" component={CurrentGrades} />
              <Route path="/schedule" component={ClassSchedule} />
              <Route path="/records" component={ScholasticRecords} />
              <Route path="/balance" component={TuitionBalance} />
              <Route path="/deficiency" component={Deficiency} />
              <Route path="/calculate" component={CalculateGrade} />
              <Route path="/allowance" component={ManageAllowance} />
              <Route path="/floorplan" component={MTCFloorPlan} />
              <Route path="/faq" component={Faqs} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}
export default Index;
