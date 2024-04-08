import "./About.css";
import AboutImage from "../../assets/AboutImage.jpg";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// Function that renders the about page & exports
const regions = ["Northern Arizona", "Central Arizona", "Southern Arizona"];
export default function About() {
  return (
    <>
      <div className="region">
        <div className="about-title"> Come Yak with Zak! </div>
        <Autocomplete
          disablePortal
          id="region-menu"
          style={{ padding: "10px 0px 0px 0px" }}
          options={regions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Region" />
          )}
        />
      </div>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "0px",
          }}
          image={AboutImage}
          alt="Hero Image"
        />

        <div style={{ width: "70%", margin: "0 auto" }}>
          <p id="p-about">
            We are AZ Kayak Guide and we specialize in guided kayak tours in the
            beautiful state of Arizona. Our tours are perfect for all ages and
            skill levels. We offer a variety of tours that range from beginner
            to advanced. Our tours are perfect for families, couples, and solo
            adventurers. We provide all the equipment you need for a fun and
            safe adventure. Our guides are experienced and knowledgeable about
            the area and will make sure you have a great time. We are committed
            to providing a fun and safe experience for all of our guests. Check
            out our blog to see what our customers are saying and drop a line of
            your own! We look forward to seeing you on the water!
          </p>
        </div>
      </div>
    </>
  );
}
