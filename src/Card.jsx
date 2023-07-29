import { useEffect } from "react";
import { motion } from "framer-motion";
import dnatapres from "./assets/dnatapres.jpg";

function Card(props) {
  //   let tags = props.tags.split(",");
  //   let buttons = props.buttons.split(",");

  return (
    <>
      <div className="cardMain">
        <div className="cardHeader">
          <div className="cardTitle">
            <p>peer evaluation platform</p>
          </div>
          <div className="cardCircles">
            <div className="cardcirclew"></div>
            <div className="cardcircley"></div>
            <div className="cardcircleo"></div>
          </div>
        </div>
        <div className="cardBody"></div>
      </div>
      {/* <div className="CardMain">
        <div className="CardBody">
          <div className="CardTop"></div>
          <div className="CardBottom">
            <img className="image" src={props.image}></img>
            <p className="subtext">{props.subtext}</p>
            <p className="description">
              a platform for instructors to manage evaluations, monitor
              students' progress and for students to complete evaluations
              conducively
            </p>
            <div className="tagBox">
              {tags.map((tag, id) => (
                <div className="tag">
                  <p className="tagTitle" key={id} value={tag}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <div className="linkbox">
              {buttons.map((b, id) => (
                <button className="linkbutton" key={id} value={b}>
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="CardPaper">
          <p className="itemTitle">{props.title}</p>
        </div>
      </div> */}
    </>
  );
}

export default Card;
