import React, { Component } from "react";
import { getAuth, signOut } from "firebase/auth";

import MyLink from "./MyLink";

class NavBar extends Component {
  state = {
    menuItems: [
      { key: 1, title: "Ask Chronus", to: "/", exact: true },
      { key: 2, title: "Tytana Newsfeed", to: "/newsfeed", exact: false },
      { key: 3, title: "Current Grades", to: "/grades", exact: false },
      { key: 4, title: "Class Schedule", to: "/schedule", exact: false },
      { key: 5, title: "Scholastic Records", to: "/records", exact: false },
      { key: 6, title: "Tuition Balance", to: "/balance", exact: false },
      { key: 7, title: "Defeciency", to: "/defeciency", exact: false },
      { key: 8, title: "Calculate Grade", to: "/calculate", exact: false },
      { key: 9, title: "ManageAllowance", to: "/allowance", exact: false },
      { key: 10, title: "MTC Floor Plan", to: "/floorplan", exact: false },
      { key: 11, title: "FAQ's", to: "/faq", exact: false },
      { key: 12, title: "Contact Us", to: "/contact", exact: false },
      { key: 13, title: "About", to: "/about", exact: false },
      {
        key: 14,
        title: "Sign out",
        to: "/",
        exact: false,
        onClick: () => {
          const auth = getAuth();
          signOut(auth);
          alert("Signed out!");
        },
      },
    ],
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <br />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.state.menuItems.map((menuItem) => (
                <MyLink
                  key={menuItem.key}
                  text={menuItem.title}
                  to={menuItem.to}
                  exact={menuItem.exact}
                  onClick={menuItem.onClick}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
