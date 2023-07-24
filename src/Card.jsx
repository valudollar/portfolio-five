function Card(props) {
  return (
    <>
      <div className="CardMain">
        <div className="CardBody">
          <div className="CardTop"></div>
        </div>
        <div className="CardPaper">
          <p className="itemTitle">{props.title}</p>
        </div>
        <div className="CardBottom"></div>
      </div>
    </>
  );
}

export default Card;
