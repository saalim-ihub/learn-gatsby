import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Homepage = () => {
  return (
    <Layout pageTitle="Home" pageHeading="Welcome to my homepage">
      <p>This is an image of protein!</p>
      <StaticImage
        src="../images/fancyProtein.png"
        alt="A fancy Protein"
        loading="eager"
        layout="fullWidth"
      />
      <StaticImage src="../images/Myoglobin.png" alt="Structure of Myoglobin" />
    </Layout>
  );
};

export default Homepage;
