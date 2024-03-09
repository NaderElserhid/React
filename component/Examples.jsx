import { useState } from "react";
import { EXAMPLES } from "../src/data.js";
import TapBatton from "./TapButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export function Examples() {
  const [selsctedTopic, setSelesctedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelesctedTopic(selectedButton);
  }
  let tabContent = <p>please select a topic</p>;
  if (selsctedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selsctedTopic].title}</h3>
        <p>{EXAMPLES[selsctedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selsctedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TapBatton
              isSelsected={selsctedTopic === "components"}
              onClick={() => {
                handleSelect("components");
              }}
            >
              Components
            </TapBatton>
            <TapBatton
              isSelsected={selsctedTopic === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TapBatton>
            <TapBatton
              isSelsected={selsctedTopic === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              props
            </TapBatton>
            <TapBatton
              isSelsected={selsctedTopic === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TapBatton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
