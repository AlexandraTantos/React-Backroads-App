import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            With a wide range of tours and customized packages, we have
            everything you need to satisfy your wanderlust. From vibrant cities
            and cultural attractions to breathtaking landscapes and outdoor
            adventures, you'll find all you desire for a memorable vacation.
          </p>
          <p>
            We're passionate about travel and strive to provide you with
            authentic and unforgettable experiences. With well-trained local
            guides and personalized tours, you'll have the opportunity to
            uncover the culture, history, and traditions of each destination in
            a unique and engaging way.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
