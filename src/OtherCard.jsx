import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sds from "./assets/sds.jpg";

function OtherCard(props) {
  let tags = props.tags.split(",");
  let buttons = props.buttons.split(",");
  let links = props.links.split(",");

  // Use the useState hook to manage the combined_arr state
  const [combined_arr, setCombinedArr] = useState([]);

  useEffect(() => {
    let combinedArr = []; // Create a local variable to hold the combined array
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const button = buttons[i];
      const list = [link, button];
      combinedArr.push(list);
    }
    // Update the state using the local variable
    setCombinedArr(combinedArr);
    console.log(combinedArr);
  }, []);
  return (
    <>
      <div className="othercardMain">
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
        <div className="othercardBody">
          <img className="othercardImage" src={props.image}></img>
          <div className="othercardtagdiv">
            {tags.map((tag, id) => (
              <div className="tag" key={id} value={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="othercardbuttons">
            {combined_arr.map(([link, button], id) => (
              <a href={link} value={link} key={id} target="_blank">
                <button key={id} value={button} className="infobutton">
                  {button}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherCard;
