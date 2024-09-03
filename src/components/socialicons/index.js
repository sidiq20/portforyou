import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.twitter || "#"}>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={socialprofils.github || "#"}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialprofils.facebook || "#"}>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href={socialprofils.linkedin || "#"}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={socialprofils.youtube || "#"}>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href={socialprofils.twitch || "#"}>
            <FaTwitch />
          </a>
        </li>
        <li>
          <a href={socialprofils.instagram || "#"}>
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
