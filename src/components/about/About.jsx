import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/My Photo.jfif";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burgar Wala</h4>
          <p>
            We are burgar wala. The place for most tasty burgar on the entire
            planet
          </p>
          <p>
            Explore the various types of food and burgar. Click below to see the
            menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="founder" />
              <h3>Javed Akhtar</h3>
            </div>

            <p>
              I am Javed Akhtar.The Founder of Burgar Wala.I am software
              developer also.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
