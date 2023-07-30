import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
import Card from "./Card";
import peer from "./assets/peer.svg";
import ride from "./assets/ride.svg";
import pds from "./assets/pds.svg";
import star from "./assets/star.svg";

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
            <img src={star} className="landingimage"></img>
            {/* <div className="landingimage"></div> */}
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
                subtext="mentored by Google"
                links="https://sites.google.com/view/sds-team-4/home"
                buttons="project site"
              />
              <Card
                title="handcarry baggage checker"
                tags="product design,3d printing,fusion360,CAD,assembly,lasercut,arduino"
                image={pds}
                subtext="partnered with dnata"
                links="https://dai.sutd.edu.sg/dai-projects/cabin-baggage-detector/"
                buttons="video"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="ride hailing simulation"
                tags="agent-based simulation,mapbox,css,mantine,react,js"
                image={ride}
                subtext="partnered with Grab"
                links="https://github.com/HASSRaccoon/Systems-DS-Grab-Simulation"
                buttons="github"
              />
              <Card
                title="deadlift form checker"
                tags="react,js,user study,AB testing,hieuristic eval,mantine,css,mobile app"
                image={peer}
                subtext="human computer interactions"
                links="https://dai.sutd.edu.sg/dai-projects/weightlift-buddy/,https://github.com/ry2001/WeightliftBuddy1"
                buttons="video,github"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="dinosaur quiz game"
                tags="react,js,netlify,vite,css,pixel art,animation,wip"
                image={peer}
                subtext="passion project"
                links="https://dino-master.netlify.app/,https://github.com/valudollar/dino-master"
                buttons="play the game,github"
              />{" "}
              <Card
                title="quest maker"
                tags="react,js,vite,vercel,css,pixel art,wip"
                image={peer}
                subtext="passion project"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="make your quest,github"
              />
            </div>
            {/* <div className="cardsdiv"> */}
            {/* <Card
                title="dinosaur quiz game"
                tags="react,js,user study,AB testing,hieuristic eval,mantine,css,mobile app"
                image={peer}
                subtext="HCI & AI"
                links="https://sites.google.com/view/sds-team-4/home,https://valuportfolio2023.vercel.app/"
                buttons="documentation,github"
              /> */}
            {/* <Card
                title="airport simulation game"
                tags="react,js,vite,vercel,css,wip"
                image={peer}
                subtext="passion project"
                links=""
                buttons=""
              /> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="connect">
        <div className="connectioncard">
          <div className="cardHeader">
            <div className="cardTitle">
              <p>connection request</p>
            </div>
            <div className="cardCircles">
              <div className="cardcirclew"></div>
              <div className="cardcircley"></div>
              <div className="cardcircleo"></div>
            </div>
          </div>
          <div className="connectioncardbody">
            <p className="connecttext"></p>
            <div className="">
              <button className="infobutton">instagram</button>
              <button className="infobutton">github</button>
              <button className="infobutton">telegram</button>
              <button className="infobutton">email</button>
            </div>
          </div>
        </div>
      </section>
      <section className="other"></section>
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
