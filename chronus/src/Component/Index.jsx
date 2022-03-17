import React, { Component } from "react";
import titan from "../pics/Titan.png";
import "./css/Index.css";

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
