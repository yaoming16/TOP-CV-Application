import { useState, useRef, useEffect } from "react";
import { expandSVG } from "../assets/svgs";
import "../styles/Accordion.css";

function Accordion({ content, title }) {
  // State to open/close
  const [isOpen, setIsOpen] = useState(false);

  //Ref to mesure height
  const contentEl = useRef(null);

  useEffect(() => {
    if (contentEl.current && isOpen) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else if (contentEl.current) {
      contentEl.current.style.height = "0px";
    }
  }, [content, isOpen]);

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
        <span
          aria-label={isOpen ? "Collapse Section" : "Expand Section"}
          className={`svg-span ${isOpen ? "rotate " : ""}`}
        >
          {expandSVG}
        </span>
      </button>
      <div ref={contentEl} className="accordion-content">
        <div className="content">{content}</div>
      </div>
    </section>
  );
}

export default Accordion;
