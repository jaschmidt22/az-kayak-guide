//Imports
import "./Footer.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

//function that renders the footer
const Footer = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <Link to="#">
            <InstagramIcon //link to future instagram profile
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
            />
          </Link>
          <Link to="#">
            <TwitterIcon //link to future Twitter profile
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
            />
          </Link>
          <Link to="mailto:jessicaschmidt22@yahoo.com">
            <EmailIcon
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
