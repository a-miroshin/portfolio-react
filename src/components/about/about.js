import React from "react";
import Footer from "./footer/footer";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <h1>About me</h1>
      <article>
        <p>
          My name is Alexander Miroshin. I'm an architect and concept artist who
          strives for clean, functional, and attractive designs.
        </p>
        <p>
          My location is Nizhniy Novgorod, Russia, and I'm ready to work all
          over the world.
        </p>
      </article>
      <Footer />
    </section>
  );
};

export default About;
