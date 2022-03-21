import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import titan from "../pics/Titan.png";
import "./css/Index.css";

class Heading extends Component {
  login = () => {
    let userEmail = document.getElementById("floatingInput").value;
    let userPass = document.getElementById("floatingPassword").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {});

    console.log(userEmail, userPass);
  };

  render() {
    return (
      <div>
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
          <button type="button" class="btn btn-success" onClick={this.login}>
            Login
          </button>
          <br />
          <button type="button" class="btn btn-success">
            Guest
          </button>
        </div>
      </div>
    );
  }
}
export default Heading;
