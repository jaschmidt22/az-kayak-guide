import "./Lakes.css";
import Canyon from "./LAKES_images/Canyon-Lake-central.jpeg";
import LakePowell from "./LAKES_images/Lake-Powell-northern.jpeg";
import Alamo from "./LAKES_images/Alamo-Lake-central.jpeg";
import Apache from "./LAKES_images/Apache-Lake-central.jpeg";
import ParkerCanyon from "./LAKES_images/Parker-Canyon-Lake-southern.jpg";
import Patagonia from "./LAKES_images/Patagonia-Lake-southern.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function Lakes() {
  return (
    <>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">Northern Arizona</h1>

        <h4 className="Lakes-Heading">Lake Powell (Northern AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={LakePowell}
            alt="LakePowell Image"
          />
        </div>

        <h1 id="about-me-title">Central Arizona</h1>

        <h4 className="Lakes-Heading">Alamo Lake (Central AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={Alamo}
            alt="Alamo Image"
          />
        </div>

        <h4 className="Lakes-Heading">Apache Lake (Central AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={Apache}
            alt="Apache Image"
          />
        </div>

        <h4 className="Lakes-Heading">Canyon Lake (Central AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={Canyon}
            alt="Canyon Image"
          />
        </div>

        <h1 id="about-me-title">Southern Arizona</h1>

        <h4 className="Lakes-Heading">Parker Canyon Lake (Southern AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={ParkerCanyon}
            alt="ParkerCanyon Image"
          />
        </div>

        <h4 className="Lakes-Heading">Patagonia Lake (Southern AZ)</h4>
        <div className="image-container">
          <CardMedia
            component="img"
            className="color-img"
            style={{
              height: "auto",
              width: "50%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
            image={Patagonia}
            alt="Patagonia Image"
          />
        </div>
      </div>
    </>
  );
}
