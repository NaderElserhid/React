import { useState } from "react";
import Header from "../component/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "../component/CoreConcept.jsx";
import TapBatton from "../component/Tapbutton.jsx";

function App() {
  const [selsctedTopic, setSelesctedTopic] = useState("please click any button");

  function handleSelect(selectedButton) {
    setSelesctedTopic(selectedButton);
    console.log(selsctedTopic);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapBatton
              onSelect={() => {
                handleSelect("Components");
              }}
            >
              Components
            </TapBatton>
            <TapBatton
              onSelect={() => {
                handleSelect("JSX");
              }}
            >
              JSX
            </TapBatton>
            <TapBatton
              onSelect={() => {
                handleSelect("props");
              }}
            >
              props
            </TapBatton>
            <TapBatton
              onSelect={() => {
                handleSelect("State");
              }}
            >
              State
            </TapBatton>
          </menu>
          {selsctedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
