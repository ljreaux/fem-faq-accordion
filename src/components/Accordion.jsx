import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="accordion">
      <div className="question" onClick={() => setClicked(!clicked)}>
        <p>{question}</p>
        <button>
          <img
            src={
              clicked
                ? `src/assets/images/icon-minus.svg`
                : `src/assets/images/icon-plus.svg`
            }
            alt="accordion button"
          />
        </button>
      </div>
      {/* {clicked && <p className="answer">{answer}</p>} */}
      <p className={`answer ${!clicked ? "hidden" : ""}`}>{answer}</p>
    </div>
  );
}
