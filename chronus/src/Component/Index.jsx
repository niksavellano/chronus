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
              <Route exact path="/" element={<AskChronus />} />
              <Route path="/newsfeed" element={<TytanaNewsfeed />} />
              <Route path="/grades" element={<CurrentGrades />} />
              <Route path="/schedule" element={<ClassSchedule />} />
              <Route path="/records" element={<ScholasticRecords />} />
              <Route path="/balance" element={<TuitionBalance />} />
              <Route path="/defeciency" element={<Deficiency />} />
              <Route path="/calculate" element={<CalculateGrade />} />
              <Route path="/allowance" element={<ManageAllowance />} />
              <Route path="/floorplan" element={<MTCFloorPlan />} />
              <Route path="/faq" element={<Faqs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
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
