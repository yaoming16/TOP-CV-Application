import "./styles/App.css";
import "./styles/Accordion.css";
import "./styles/FormsSection.css";
import View from "./components/View.jsx";
import FormsSection from "./components/FormsSection.jsx";
import CustomizationSection from "./components/CustomizationSection.jsx";
import { CvProvider, useCv } from "./context/CvContext.jsx";

import { useState } from "react";

function AppContent() {
  let [showForm, setShowForm] = useState(true);
  const { resetCv } = useCv();
  return (
    <main className="main">
      <div className="main-container">
        <aside className="w-1/3">
          <div>
            <button onClick={() => setShowForm(!showForm)}>
              Customization
            </button>
            <button onClick={resetCv}>Load example</button>
          </div>
          {showForm ? <FormsSection /> : <CustomizationSection />}
        </aside>
        <article className="w-2/3">
          <View />
        </article>
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
