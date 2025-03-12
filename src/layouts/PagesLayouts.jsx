import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const PagesLayouts = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default PagesLayouts;
