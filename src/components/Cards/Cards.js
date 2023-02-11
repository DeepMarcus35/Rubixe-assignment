import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards_container">
      <div className="techforteens">
        <h1>TECH FOR TEENS - A RUBIXE ® INITATIVE</h1>
      </div>

      <div className="cards_div ">
        <div className="cards one">
          <div className="card_1">
            {" "}
            <div className="number">
              <h2>01</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Introducing AI to children in an age appropriate manner.</p>
            <img src={require("../../images/icons/1.jpg")} />
          </div>
          <div className="card_3"></div>
        </div>
        <div className="cards two">
          <div className="card_1"></div>
          <div className="card_2">
            <p>Gain awareness on AI and build an intractive story around it.</p>
            <img src={require("../../images/icons/2.jpg")} />
          </div>
          <div className="card_3">
            <div className="number">
              <h2>02</h2>
            </div>
          </div>
        </div>
        <div className="cards three">
          <div className="card_1">
            <div className="number">
              <h2>03</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Acquire programming skills in a user friendly format.</p>
            <img src={require("../../images/icons/3.jpg")} />
          </div>
          <div className="card_3"></div>
        </div>
        <div className="cards four">
          <div className="card_1"></div>
          <div className="card_2">
            <p>Exposure to mini projects on diverse topics.</p>
            <img src={require("../../images/icons/4.jpg")} />         
          </div>
          <div className="card_3">
            <div className="number">
              <h2>04</h2>
            </div>
          </div>
        </div>
        <div className="cards five">
          <div className="card_1">
            <div className="number">
              <h2>05</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Train the teachers programme.</p>
            <img src={require("../../images/icons/5.jpg")} />
          </div>
          <div className="card_3"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
