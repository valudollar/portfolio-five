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
import quest from "./assets/quest.svg";
import smile from "./assets/smile.svg";
import dino from "./assets/dino.svg";
import key from "./assets/keycap.svg";
import dl from "./assets/deadlift.svg";
import pixel from "./assets/pixel.svg";
import cat from "./assets/cat.svg";
import valubahloo from "./assets/valubahloo.svg";
import airsim from "./assets/airsim.svg";
import tss from "./assets/tss.svg";
import aiforgood from "./assets/aiforgood.svg";

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
                image={dl}
                subtext="human computer interactions"
                links="https://dai.sutd.edu.sg/dai-projects/weightlift-buddy/,https://github.com/ry2001/WeightliftBuddy1"
                buttons="video,github"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="dinosaur quiz game"
                tags="react,js,netlify,vite,css,pixel art,animation,wip"
                image={dino}
                subtext="passion project"
                links="https://dino-master.netlify.app/,https://github.com/valudollar/dino-master"
                buttons="play the game,github"
              />{" "}
              <Card
                title="quest maker"
                tags="react,js,vite,vercel,css,pixel art,wip"
                image={quest}
                subtext="passion project"
                links="https://quest-maker.vercel.app/,https://github.com/valudollar/quest-maker"
                buttons="make a quest,github"
              />
            </div>
            <div className="cardsdiv">
              <Card
                title="airport delays simulation"
                tags="CAST, R, python, excel, simulation, forecasting, scenario generation "
                image={airsim}
                subtext="San Diego International Airport"
                links="https://drive.google.com/file/d/10MJLGkFGDp97mIOmbG9S4F3O4ohkR9lf/view?usp=sharing"
                buttons="project slides"
              />{" "}
              <Card
                title="forest change detection"
                tags="nextjs, tailwindcss, SegmentAnything, vercel, sentinel 2, earth engine "
                image={aiforgood}
                subtext="Partnered with AiforGood"
                links="https://forestfind.vercel.app/,https://github.com/stjianqing/aiforevil"
                buttons="front-end prototype, github"
              />
            </div>
            <div className="cardsdiv">
              {/* <Card
                title="intent detection chatbot"
                tags="react,js,netlify,vite,css,pixel art,animation,wip"
                image={dino}
                subtext="passion project"
                links="https://dino-master.netlify.app/,https://github.com/valudollar/dino-master"
                buttons="play the game,github"
              />{" "} */}
              <Card
                title="ai-driven task to job matching "
                tags="nextjs,framer motion,figma,tailwindcss,js,api,onet,vercel"
                image={tss}
                subtext="Lee Kuan Yew Centre for Innovative Cities"
                links="https://tss-demo-ecru.vercel.app/,https://github.com/asycodes/tss-demo"
                buttons="prototype, github"
              />
            </div>
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
              <a href="https://drive.google.com/file/d/1g3ElCiDuqhZM3DUlwS-NPmFK4dqaECoh/view?usp=sharing">
                <button className="infobutton">resume</button>
              </a>
              <a href="http://tinyurl.com/valufoliojan2024">
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
            image={key}
            tags="epoxy resin,keycaps,small business"
            links="https://www.instagram.com/grapefoot.studio/"
            buttons="instagram"
          />
          <OtherCard
            title="pixel art zoo"
            image={pixel}
            tags="pixel art,animation,procreate"
            links="https://pixel-zoo.vercel.app/,https://www.instagram.com/bubble_pixels/"
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
            image={cat}
            tags="watercolour,painting"
            links="https://www.instagram.com/sheeshcat/"
            buttons="instagram"
          />
          <OtherCard
            title="valubahloo"
            image={valubahloo}
            tags="small business,polymer clay,uv resin,jewellery,keycaps"
            links="https://www.instagram.com/valubahloo"
            buttons="instagram"
          />
        </div>
      </section>
    </>
  );
}

export default App;
