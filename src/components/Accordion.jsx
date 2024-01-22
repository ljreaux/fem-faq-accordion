import { useState } from "react";
import plus from "../assets/images/icon-minus.svg";
import minus from "../assets/images/icon-plus.svg";

export default function Accordion({ question, answer }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="accordion">
      <div className="question" onClick={() => setClicked(!clicked)}>
        <p>{question}</p>
        <button>
          <img src={clicked ? plus : minus} alt="accordion button" />
        </button>
      </div>
      {/* {clicked && <p className="answer">{answer}</p>} */}
      <p className={`answer ${!clicked ? "hidden" : ""}`}>{answer}</p>
    </div>
  );
}
