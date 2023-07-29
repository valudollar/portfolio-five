import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
import Card from "./Card";
import dnatapres from "./assets/dnatapres.jpg";
import sds from "./assets/sds.jpg";

function App() {
  return (
    <>
      <header className="header">
        <div className="headercontent">
          <div className="titlediv">
            <p className="titletext">valu's portfolio</p>
          </div>
          <div className="circles">
            <div className="headercirclew"></div>
            <div className="headercircley"></div>
            <div className="headercircleo"></div>
          </div>
        </div>
      </header>
      <section className="landing">
        <div className="landingbg">
          <h1>valu's portfolio</h1>
        </div>
        <div className="landingcontent">
          <div className="landingtextdiv">
            <p className="hello">hello, valu here.</p>
            <p className="intro">
              front-end development, <br></br> user-centric design <br></br> &
              illustration
            </p>
          </div>
          <div className="landingimagediv">
            <div className="landingimage"></div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="whitebg"></div>
        <div className="projectscontent">
          <div className="labeldiv">
            <div className="label">
              <p>projects</p>
            </div>
          </div>
          <div className="cardsdiv">
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

{
  /* <Card
              title="peer evaluation platform"
              tags="bootstrap,css,javascript,reactjs,selenium,cucumber"
              image={sds}
              subtext="Mentored by Google"
              buttons="documentation,github"
            ></Card>
            <Card
              title="ride hailing simulation"
              tags="tag 1,tag 2,tag 3,tag 4"
              image={dnatapres}
              subtext="Partnered with Grab"
              buttons="github"
            ></Card>
            <Card
              title="handcarry baggage checker"
              tags="tag 1,tag 2,tag 3,tag 4"
              image={dnatapres}
              subtext="Partnered with dnata"
              buttons="video"
            ></Card> */
}
