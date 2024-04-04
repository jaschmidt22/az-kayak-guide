// Imports
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

// Function that renders the header & exports

export default function Header() {
  const regions = ["Northern", "Central", "Southern"];

  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 40px" }}>
      <p id="header-text">AZ Kayak Guide</p>
      <div>
        <Autocomplete
          disablePortal
          id="region-menu"
          style={{ padding: "0px 0px 10px 40px" }}
          options={regions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Region" />
          )}
        />
      </div>
      <Navigation />
    </div>
  );
}
