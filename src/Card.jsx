import { useEffect } from "react";
import { motion } from "framer-motion";
import dnatapres from "./assets/dnatapres.jpg";

function Card(props) {
  let tags = props.tags.split(",");

  return (
    <>
      <div className="CardMain">
        <div className="CardBody">
          <div className="CardTop"></div>
          <div className="CardBottom">
            <img className="image" src={props.image}></img>
            <p className="subtext">{props.subtext}</p>
            <p className="description">
              Project spanned across 14 weeks and 4 sprint cycles using Agile
              Methology. ject spanned across 14 weeks and 4 sprint cycles using
              Agile Methology. using Agile Methology
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
          </div>
        </div>
        <div className="CardPaper">
          <p className="itemTitle">{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
