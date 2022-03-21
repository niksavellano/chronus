import React, { Component } from "react";

import "./css/Index.css";

import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
import Heading from "./Heading";

import firebaseConfig from "./Config";
import firebase from "firebase/compat/app";

firebase.initializeApp(firebaseConfig);

class Index extends Component {
  state = { isSignedIn: false };

  componentDidMount = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <NavBar />
            <Routes>
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
            </Routes>
          </div>
        ) : (
          <Heading />
        )}
      </div>
    );
  }
}
export default Index;
