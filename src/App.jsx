import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
import Card from "./Card";

function App() {
  return (
    <>
      <hr className="topline"></hr>
      <div className="header">
        <div className="name">
          <p>valu's portfolio</p>
        </div>
        <div className="links">
          <a>
            <p className="linkItem">instagram</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">telegram</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">github</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">email</p>
          </a>
        </div>
      </div>
      <hr className="bottomline"></hr>
      <section className="landing">
        <div className="hello">
          <p className="helloText">hello, valu here. </p>
        </div>
        <div className="transition">
          <div className="transitionText">
            <p>front-end development,</p>
            <p>user-centric design</p>
            <p>& illustration.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="yellow"></div>
        <div className="sectionContent">
          <div className="left">
            <div className="subtitleBox">
              <div className="subtitleBot"></div>
              <div className="subtitleTop">
                {" "}
                <p>projects</p>
              </div>
            </div>
          </div>

          {/* <div className="section"> */}
          <div className="CardBox">
            <Card
              title="peer evaluation platform"
              tags="bootstrap,css,javascript,reactjs,selenium,cucumber"
            ></Card>
            <Card
              title="ride hailing simulation"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="handcarry baggage checker"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            {/* <Card
              title="deadlift form checker"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="prosthetics generative design"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="kueh lapis keyboard caps"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="bread basket keyboard caps"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="polymer clay keyboard caps"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="polymer clay jewellery"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card
              title="dinosaur quiz game"
              tags="tag 1,tag 2,tag 3,tag 4"
            ></Card>
            <Card title="quest maker" tags="tag 1,tag 2,tag 3,tag 4"></Card> */}
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default App;
