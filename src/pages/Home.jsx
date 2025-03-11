import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="mt-16">
<div className="bg-[url(assets/images/heropic.png)] h-[500px] bg-cover bg-center">
<h1 className="flex ">Welcome to EdenBOOKS | Your Smart Library Companion 
</h1>
<h2>Effortless Library Management, Anytime, Anywhere</h2>
</div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
