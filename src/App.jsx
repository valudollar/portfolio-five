import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <hr className="topline"></hr>
      <div className="header">
        <div className="name">
          <p>valu's portfolio</p>
        </div>
        <div className="links">
          <a>
            <p className="linkItem">instagram</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">telegram</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">github</p>
          </a>
          <p>|</p>
          <a>
            <p className="linkItem">email</p>
          </a>
        </div>
      </div>
      <hr className="bottomline"></hr>
      <div className="CardRow">
        <Card title="peer evaluation platform"></Card>
        <Card title="ride hailing simulation"></Card>
        <Card title="handcarry baggage checker"></Card>
        <Card title="deadlift form checker"></Card>
        <Card title="prosthetics generative design"></Card>
        <Card title="kueh lapis keyboard caps"></Card>
        <Card title="bread basket keyboard caps"></Card>
        <Card title="polymer clay keyboard caps"></Card>
        <Card title="polymer clay jewellery"></Card>
        <Card title="dinosaur quiz game"></Card>
        <Card title="quest maker"></Card>
      </div>
    </>
  );
}

export default App;
