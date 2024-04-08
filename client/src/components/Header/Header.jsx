// Imports

import Navigation from "../Navigation/Navigation";
import "./Header.css";

// Function that renders the header & exports

export default function Header() {
  return (
    <div className="wrapper">
      <div className="headerParent" style={{ padding: "0px 0px 0px 60px" }}>
        <p id="header-text">AZ Kayak Guide</p>

        <Navigation />
      </div>
    </div>
  );
}
