import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="left">
          <div className="location">
            {/* Location Icon */}
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>No 73, Diamond Park, Warakapitiya</p>
              <p>Sri Lanka</p>
            </div>
          </div>
          <div className="phone">
            {/* Phone Icon */}
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </h4>
            <div>
              <p>+94712886791</p>
            </div>
          </div>
          <div className="email">
            {/* Email Icon */}
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </h4>
            <div>
              <p>kimuthukisal05@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="right">
          <h4>About Me</h4>
          <p>
            As a skilled software developer, I specialize in designing and
            creating innovative software solutions. With expertise in
            programming languages and a passion for problem-solving, I strive to
            deliver efficient and robust applications that meet clients' needs.
          </p>
          {/* Social Icons */}
          <div className="social">
            <div className="linkedin">
              {/* LinkedIn Icon */}
              <a
                href="http://linkedin.com/in/kimuthu-gamage-a8a957215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </h4>
              </a>
            </div>
            <div className="github">
              {/* GitHub Icon */}
              <a
                href="https://github.com/kimuthuUG/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </h4>
              </a>
            </div>
            <div className="facebook">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/kimuthu.gamage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </h4>
              </a>
            </div>
            <div className="instagram">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/_kimuthu_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
