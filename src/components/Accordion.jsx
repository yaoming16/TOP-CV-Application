import { useState, useRef, useEffect } from "react";

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
      >
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
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
