import React from "react";
import "./WorkCardStyles.css";
import pro1 from "../assets/HungryMeals.png";
import pro2 from "../assets/SriFin.jpg";
import pro3 from "../assets/kids game arena.jpeg";
import pro4 from "../assets/EventPlan.jpeg";
import pro5 from "../assets/Fakebook.jpg";
import pro6 from "../assets/portfolio.png";
import pro35 from "../assets/images.jpeg"
import { NavLink } from "react-router-dom";

export default function WorkCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className="project-title">Hungry Meals</h2>
          <div className="pro-details">
            <p>
              "Hungry Meal," an online food ordering and delivery system
              designed to streamline the operations of restaurant chains. With a
              comprehensive set of features, this web application simplifies the
              main administrative functions. You can easily browse the
              menu, place orders, and make payments securely through the
              integrated order management system. We used MERN Stack as our
              technology.
            </p>
            <div className="pro-btns">
              <NavLink to="https://www.linkedin.com/posts/kimuthu-gamage-a8a957215_hungrymeals-mernstack-mongodb-activity-7077490581060403200-jGuF?utm_source=share&utm_medium=member_desktop" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/HungryMeals-MernStack" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="image" />
          <h2 className="project-title">SriFin</h2>
          <div className="pro-details">
            <p>
              ·“SriFin” is a mobile app designed to manage income and expenses
              in day today life. Expenses management, user management, newsfeed
              management and income management are the main functions in app.
              "SriFin" was developed by us for the second year second semester
              Mobile Application Development(MAD) project.We use Kotline as our
              programming language.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/SriFin-MobileApp" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="image" />
          <h2 className="project-title">Kids Game Arena</h2>
          <div className="pro-details">
            <p>
              ·An Online Games for School Kids website called "Kids Game Arena"
              was developed by us for the first year second semester Internet &
              Web Technologies (IWT) project. We use PHP, HTML, CSS, MYSQL,
              JAVASCRIPT as technologies.
            </p>
            <div className="pro-btns">
              <NavLink to="https://www.linkedin.com/posts/kimuthu-gamage-a8a957215_css-html-php-activity-7077489140807700480-TTFq?utm_source=share&utm_medium=member_desktop" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/Kids-Game-Arena-HTML-PHP" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="image" />
          <h2 className="project-title">Event Planning System</h2>
          <div className="pro-details">
            <p>
              The Online Event Planning system was developed by us for the
              second year first semester Object Oriented Programming (OOP)
              project at SLIIT. We used JSP, JAVA, CSS, HTML, MYSQL, APACHE
              TOMCAT SERVER as our technologies
            </p>
            <div className="pro-btns">
              <NavLink to="https://www.linkedin.com/posts/kimuthu-gamage-a8a957215_java-css-html-activity-7077489604030861312---Av?utm_source=share&utm_medium=member_desktop" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/Kids-Game-Arena-HTML-PHP" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro5} alt="image" />
          <h2 className="project-title">Fakebook</h2>
          <div className="pro-details">
            <p>
              "Facebook" is a clone of orginal facebook web app. its contain
              static frontend view of facebook app and I create this for
              practice React.js .
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/FaceBook-React" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro6} alt="image" />
          <h2 className="project-title">Portfolio Website</h2>
          <div className="pro-details">
            <p>
            Built with React.js, my portfolio site showcases my skills, projects, and achievements. It offers a sleek and responsive design, allowing visitors to explore my work and get in touch easily.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/kimuthuUG/FaceBook-React" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
