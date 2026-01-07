import { useState } from "react";

import "./styles/App.css";
import  View  from "./components/View.jsx";
import FormsSection from "./components/FormsSection.jsx"

function App() {
    const [cvData, setCvData] = useState({
        name: "Pablo",
        lastName: "Perez",
        email: "pabloperezzz16@gmail.com",
        phoneNumber: "+598 94 497 982",
        city: "Montevideo",
        country: "Uruguay",
        jobs: [],
    });

    return (
        <>
            <main className="main">
                <aside>
                    <FormsSection cvData={cvData} setCvData={setCvData}/>
                </aside>
                <article>
                    <View cvData={cvData} />
                </article>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default App;
