import "./styles/App.css";
import View from "./components/View.jsx";
import FormsSection from "./components/FormsSection.jsx";
import CustomizationSection from "./components/CustomizationSection.jsx";
import { CvProvider } from "./context/CvContext.jsx";

import { useState } from "react";

function App() {
  let [showForm, setShowForm] = useState(true);
  return (
    <CvProvider>
      <main className="main">
        <aside>
          <button onClick={() => setShowForm(!showForm)}>Customization</button>
          {
            showForm? <FormsSection /> : <CustomizationSection />
          }
        </aside>
        <article>
          <View />
        </article>
      </main>
      <footer></footer>
    </CvProvider>
  );
}

export default App;
