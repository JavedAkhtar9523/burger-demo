import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/My Photo.jfif";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="founder" height={200} width={200} />
        <h3>Javed Akhtar</h3>
        <p>
          Hey, Everyone i am Javed Akhtar,the founder of Burger wala. <br />
          Our aim is to create most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
