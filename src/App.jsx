import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import Card from "./Card";
import OtherCard from "./OtherCard";
import peer from "./assets/peer.svg";
import ride from "./assets/ride.svg";
import pds from "./assets/pds.svg";
import star from "./assets/star.svg";
import smile from "./assets/smile.svg";

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
            {/* <img src={star} className="landingimage"></img> */}
            <motion.img
              src={smile}
              className="landingimage"
              animate={
                {
                  // scale: [1, 2, 1],
                  // rotate: [0, 180],
                }
              }
              transition={
                {
                  // duration: 2,
                  // ease: "easeInOut",
                  // times: [0, 0.2, 0.5, 0.8, 1],
                  // repeat: Infinity,
                  // repeatDelay: 1,
                }
              }
            />
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
          <div className="mobilelabeldiv">
            <div className="mobilelabel">
              <p>projects</p>
            </div>
          </div>
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
                tags="agent-based simulation,mapbox,css,mantine,react,js, web app"
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
                links="https://quest-maker.vercel.app/,https://github.com/valudollar/quest-maker"
                buttons="make a quest,github"
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
        {/* <div className="connectbg">
          <p>connection</p>
        </div> */}
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
            <div className="connecttextdiv">
              <p className="connecttext">
                hi, thanks for making it here, i would love to connect with you!
              </p>
            </div>
            <div className="connectbuttons">
              {/* <button className="infobutton">instagram</button> */}
              <a href="https://github.com/valudollar/">
                <button className="infobutton">github</button>
              </a>
              <a href="https://t.me/grapejiz">
                <button className="infobutton">telegram</button>
              </a>
              <a href="mailto:valerie.luxuanhui@gmail.com">
                <button className="infobutton">email</button>
              </a>
              <a href="https://drive.google.com/file/d/1UvSV8TL7j0i87jH0pNXCGJpQx29jl0TB/view?usp=sharing">
                <button className="infobutton">resume</button>
              </a>
              <a href="https://drive.google.com/file/d/1e40EUTIy0DJ74HZ-9KNRANaOsmhy4EOG/view?usp=sharing">
                <button className="infobutton">portfolio</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="other">
        <div className="othertitle">
          <p>see more of my work </p>
        </div>
        <div className="othercardsrow">
          <OtherCard
            title="grapefoot studio"
            // image={peer}
            tags="epoxy resin,keycaps,small business"
            links="https://www.instagram.com/grapefoot.studio/"
            buttons="instagram"
          />
          <OtherCard
            title="pixel art zoo"
            // image={peer}
            tags="pixel art,animation"
            links="https://quest-maker.vercel.app/,https://www.instagram.com/bubble_pixels/"
            buttons="visit my zoo,instagram"
          />
        </div>
        <div className="othercardsrow">
          {/* <OtherCard
            title="illustrations"
            // image={peer}
            tags="digital,procreate,line art"
            links="https://quest-maker.vercel.app/"
            buttons="work in progress"
          /> */}
          <OtherCard
            title="cat paintings"
            // image={peer}
            tags="watercolour,painting"
            links="https://www.instagram.com/sheeshcat/"
            buttons="instagram"
          />
          <OtherCard
            title="valubahloo"
            // image={peer}
            tags="small business,polymer clay,uv resin,jewelley,keycaps"
            links="https://www.instagram.com/valubahloo"
            buttons="instagram"
          />
        </div>
      </section>
    </>
  );
}

export default App;
