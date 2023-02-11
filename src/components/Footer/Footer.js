import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_about">
          <h4>ABOUT US</h4>
          <p>
            Rubixe<sup>TM</sup> is a global technologycompany specializingin
            distruptive technologies - Artificial Intelligence,Machine Learning,
            Robotic Process Automation,BlockChain and Internet of Things.Rubixe
            mission to enable businesses to leverage the full potential of
            disruptive technoligies to stay competitive in the market.
          </p>
        </div>
        <div className="footer_menu">
          <h4>MENUS</h4>
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Services</li>
            </a>
            <a href="">
              <li>Products</li>
            </a>
            <a href="">
              <li>Careers</li>
            </a>
          </ul>
        </div>
        <div className="footer_learn">
          <h4>LEARN MORE</h4>
          <ul>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="footer_address">
          <h4>ADDRESS</h4>
          <p>
            Noval Tech Park, 1st floor, Hosur Rd,
            <br />
            Kudlu gate, Bengaluru, Karnataka
            <br />
            560068
            <br />
            Phone: 0804-717-8999
            <br />
            Email: hi@rubixe.com
            <br />
            <br />
            SOCIAL MEDIA
            <img src="../../images/icons/fb.png" />
            <img src="../../images/icons/linkedin.png "/>
            <br />
          </p>
        </div>
      </div>

      <div className="footer_bottom">
        <p>
          © Copyright 2017-2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS
          PVT. LTD. | All RIghts Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
