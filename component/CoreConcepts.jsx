import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../src/data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concepetItem) => (
          <CoreConcept key={concepetItem.title} {...concepetItem} />
        ))}
      </ul>
    </section>
  );
}
