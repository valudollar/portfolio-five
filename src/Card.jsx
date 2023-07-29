import { useEffect } from "react";
import { motion } from "framer-motion";
import sds from "./assets/sds.jpg";

function Card(props) {
  let tags = props.tags.split(",");
  console.log(tags, "hello");
  let buttons = props.buttons.split(",");

  return (
    <>
      <div className="cardMain">
        <div className="cardHeader">
          <div className="cardTitle">
            <p>{props.title}</p>
          </div>
          <div className="cardCircles">
            <div className="cardcirclew"></div>
            <div className="cardcircley"></div>
            <div className="cardcircleo"></div>
          </div>
        </div>
        <div className="cardBody">
          <img className="cardImage" src={props.image}></img>
          {/* <div className="overlay"></div> */}
          <div className="subtext"> {props.subtext}</div>
          <div className="tagdiv">
            {tags.map((tag, id) => (
              <div className="tag" key={id} value={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="infodiv">
            {/* <button className="infobutton">documentation</button> */}
            {buttons.map((b, id) => (
              <button key={id} value={b} className="infobutton">
                {b}
              </button>
            ))}
          </div>
        </div>
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
