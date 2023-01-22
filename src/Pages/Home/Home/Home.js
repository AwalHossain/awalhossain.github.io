import React from "react";
import TechStacks from "../../TechStacks/TechStacks";
import Education from "../Education/Education";
import Hero from "../Hero/Hero";
import HomeProjects from "../HomeProjects/HomeProjects";
import Header from "./../Header/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <HomeProjects />
      <TechStacks />
      <Education />
    </main>
  );
};

export default Home;
