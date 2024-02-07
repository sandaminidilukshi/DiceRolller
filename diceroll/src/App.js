import "./App.css";
import { useState } from "react";

import dice1 from "./Images/dice1.png";
import dice2 from "./Images/dice2.png";
import dice3 from "./Images/dice3.png";
import dice4 from "./Images/dice4.png";
import dice5 from "./Images/dice5.png";
import dice6 from "./Images/dice6.png";

function App() {
  const images = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [img1, setImg1] = useState(images[0]);
  const [img2, setImg2] = useState(images[1]);

  const imagedice1 = Math.floor(Math.random() * 6);
  const imagedice2 = Math.floor(Math.random() * 6);

  const handleClick = () => {
    setImg1(images[imagedice1]);
    setImg2(images[imagedice2]);
  };

  return (
    <div className="App">
      <div className="page">
        <center>
          <div className="container">
            <h1>Dice Roller</h1>

            <img className="square" src={img1} alt="First dice"></img>

            <div className="space"></div>

            <img className="square" src={img2} alt="Second dice "></img>
          </div>
          <button onClick={handleClick}>Click me to rock & roll</button>
        </center>
      </div>
    </div>
  );
}

export default App;
