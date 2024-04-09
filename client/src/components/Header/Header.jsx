// Imports
import KayakingIcon from "@mui/icons-material/Kayaking";
import Navigation from "../Navigation/Navigation";
import { deepOrange } from "@mui/material/colors";

import "./Header.css";

// Function that renders the header & exports

export default function Header() {
  return (
    <div className="wrapper">
      <div className="headerParent" style={{ padding: "0px 10px 0px 50px" }}>
        <p id="header-text">
          AZ Kayak Guide{" "}
          <KayakingIcon sx={{ color: deepOrange[500] }} fontSize="Large" />
        </p>

        <Navigation />
      </div>
    </div>
  );
}
