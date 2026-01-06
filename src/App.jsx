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
    });

    return (
        <>
            <main className="main">
                <section>
                    <FormsSection cvData={cvData} setCvData={setCvData}/>
                </section>
                <section>
                    <View cvData={cvData} />
                </section>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default App;
