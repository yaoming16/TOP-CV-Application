import "./styles/App.css";
import "./styles/Accordion.css";
import "./styles/FormsSection.css";
import View from "./components/View.jsx";
import FormsSection from "./components/FormsSection.jsx";
import CustomizationSection from "./components/CustomizationSection.jsx";
import { CvProvider, useCv } from "./context/CvContext.jsx";

import { useState, useEffect } from "react";

function AppContent() {
  let [showForm, setShowForm] = useState(true);
  let [showOnlyOne, setShowOnlyOne] = useState(false);
  let [showView, setShowView] = useState(true);
  const { resetCv } = useCv();

  useEffect(() => {
    if(window.innerWidth < 500) {
      setShowOnlyOne(true);
    }
  }, [])

  function formSectionToShow() {
    let component = null;
    if (showOnlyOne) {
      if (showForm && !showView) {
        component = <FormsSection />;
      } else if (!showForm && !showView) {
        component = <CustomizationSection />;
      } else {
        return null;
      }
    } else {
      component = showForm ? <FormsSection /> : <CustomizationSection />;
    }
    return (
      <section className={!showOnlyOne ? "w-1/3" : "only"}>{component}</section>
    );
  }

  return (
    <main className="main w-full">
      <div className="w-full">
        <div className="btn-div">
          <button className="option-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Change to Customization" : "Change to Form"}
          </button>
          <button className="option-btn" onClick={resetCv}>
            Load example
          </button>
          <button
            className="option-btn"
            onClick={() => setShowOnlyOne(!showOnlyOne)}
          >
            {showOnlyOne ? "Show form and view" : "Show only view"}
          </button>
          {showOnlyOne ? (
            <button
              className="option-btn"
              onClick={() => setShowView(!showView)}
            >
              Change to {showView ? "Form" : "View"}
            </button>
          ) : null}
        </div>
        <div className={`main-container ${showOnlyOne ? "show-only-one" : ""}`}>
          {formSectionToShow()}
          {showOnlyOne && !showView ? null : (
            <section className={!showOnlyOne ? "w-2/3" : "only"}>
              <View />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <CvProvider>
      <AppContent />
      <footer></footer>
    </CvProvider>
  );
}

export default App;
