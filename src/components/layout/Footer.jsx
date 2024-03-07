import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BURGER WALA</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>
        <strong>All right reserved &copy;burgarwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
