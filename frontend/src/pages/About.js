import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div style={styles.page} >
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>About the Treasure Hunt Game</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Explore the Campus:</strong> Explore hidden secrets all around your campus and uncover treasures in fun challenges. <em>"Campus ke secrets ko jaano!"</em>
          </li>
          <li style={styles.listItem}>
            <strong>Create Hunt:</strong> Easily design your own treasure hunt challenges for friends and family.
          </li>
          <li style={styles.listItem}>
            <strong>Check Live Hunt:</strong> See active hunts happening right now and join in on the excitement.
          </li>
          <li style={styles.listItem}>
            <strong>Upcoming Hunts:</strong> Stay updated on future treasure hunts so you never miss a chance to compete.
          </li>
          <li style={styles.listItem}>
            <strong>Your Hunts:</strong> Track all your created and joined hunts in one place.
          </li>
          <li style={styles.listItem}>
            <strong>How to Win:</strong> Hunt the treasure in your campus and upload your picture to score points. Quick submissions earn more points—first come, first serve! Use hints to solve clues, and remember: faster answers mean higher scores!
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #205781, #4F959D, #98D2C0, #F6F8D5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    paddingTop:"70px",
    fontFamily: "'Roboto', sans-serif",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    padding: "30px",
    maxWidth: "800px",
    width: "90%",
    margin: "20px 0 80px  0",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  title: {
    color: "#205781",
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    backgroundColor: "#F6F8D5",
    margin: "10px 0",
    padding: "15px",
    borderRadius: "10px",
    color: "#205781",
    fontSize: "18px",
    lineHeight: "1.6",
  },
};

export default About;
