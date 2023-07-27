import { useEffect } from "react";
import { motion } from "framer-motion";

function Card(props) {
  let tags = props.tags.split(",");

  return (
    <>
      <div className="CardMain">
        <div className="CardBody">
          <div className="CardTop"></div>
          <div className="CardBottom">
            <div className="image"></div>
            <div className="tagBox">
              {tags.map((tag, id) => (
                <div className="tag">
                  <p className="tagTitle" key={id} value={tag}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <p className=""> Mentored by Google</p>
            <p className="description">
              Project spanned across 14 weeks and 4 sprint cycles using Agile
              Methology. ject spanned across 14 weeks and 4 sprint cycles using
              Agile Methology. using Agile Methology
            </p>
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
