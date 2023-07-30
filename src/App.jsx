import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
import Card from "./Card";
import dnatapres from "./assets/dnatapres.jpg";
import sds from "./assets/sds.jpg";
import peer from "./assets/peer.svg";

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
        <div className="whitebgtop"></div>
        <div className="whitebgbot"></div>
        <div className="projectsbg">
          <h1>
            projects <br /> projects
          </h1>
        </div>
        <div className="projectscontent">
          <div className="labeldiv">
            <div className="label">
              <p>projects</p>
            </div>
          </div>
          <div className="cardscontainer">
            <div className="cardsdiv">
              <Card
                title="peer evaluation platform"
                tags="web app,js,react,agile,css,bootstrap,selenium,cucumber,user stories,figma"
                image={peer}
                subtext="Mentored by Google"
                links="https://sites.google.com/view/sds-team-4/home"
                buttons="documentation"
              />
              <Card
                title="handcarry baggage checker"
                tags="product design,3d printing,fusion360,CAD,assembly,lasercut,arduino"
                image={peer}
                subtext="Partnered with dnata"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="ride hailing simulation"
                tags="agent-based simulation,mapbox,css,mantine,react,js"
                image={peer}
                subtext="Partnered with Grab"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              />
              <Card
                title="deadlift form checker"
                tags="react,js,user study,AB testing,hieuristic eval,mantine,css,mobile app"
                image={peer}
                subtext="HCI & AI"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="generative prosthetic design"
                tags="fusion360,generative design, "
                image={peer}
                subtext="HCI & AI"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              />
              <Card
                title="dinosaur quiz game"
                tags="react,js,user study,AB testing,hieuristic eval,mantine,css,mobile app"
                image={peer}
                subtext="HCI & AI"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              />
            </div>
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
