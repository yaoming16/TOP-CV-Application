import "./styles/App.css";
import View from "./components/View.jsx";
import FormsSection from "./components/FormsSection.jsx";
import Certifications from "./components/Forms/Certifications.jsx";
import { CvProvider } from "./context/CvContext.jsx";

function App() {
  return (
    <CvProvider>
      <main className="main">
        <aside>
          <FormsSection />
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
