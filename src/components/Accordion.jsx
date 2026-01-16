import { useState, useRef } from "react";
import {expandSVG} from "../assets/svgs";
import "../styles/Accordion.css"

function Accordion({ content, title }) {
  // State to open/close
  const [isOpen, setIsOpen] = useState(false);

  //Ref to mesure height
  const contentEl = useRef(null);

  let currentHeight = contentEl.current?.scrollHeight || 0;

  return (
    <section className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button
        type="button"
        className="accordion-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Expand ${title} section`}
      >
        <h3>{title}</h3>
        <span className={`svg-span ${isOpen? "rotate " :""}`} >{expandSVG}</span>
      </button>
      <div
        ref={contentEl}
        className="accordion-content"
        style={{ height: isOpen ? currentHeight : 0 }}
      >
        <div className="content">{content}</div>
      </div>
    </section>
  );
}

export default Accordion;
