import "./About.css";
import Hero from "../../assets/Hero.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
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
          image={Hero}
          alt="Hero Image"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">Come Yak with Zak!!</h1>
        <p id="p-about">
          We are AZ Kayak Guide and we specialize in guided kayak tours in the
          beautiful state of Arizona. Our tours are perfect for all ages and
          skill levels. We offer a variety of tours that range from beginner to
          advanced. Our tours are perfect for families, couples, and solo
          adventurers. We provide all the equipment you need for a fun and safe
          adventure. Our guides are experienced and knowledgeable about the area
          and will make sure you have a great time. We are committed to
          providing a fun and safe experience for all of our guests. We look
          forward to seeing you on the water!
        </p>
      </div>
    </>
  );
}
