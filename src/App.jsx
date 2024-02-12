import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES, NAMEHANDLE } from "./data";

function App() {

  const [selectTopic, SetSelectTopic] = useState()
  function handlesSelect(selectButton) {
    SetSelectTopic(selectButton);
    
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <CoreConcept key={concept.title} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {NAMEHANDLE.map((handle)=> {
              return <TabButton key={handle.value} isSelected={selectTopic === handle.value} onSelect={()=> handlesSelect(handle.value)}>{handle.name}</TabButton>
            })}
          </menu>
          {!selectTopic ? <p>Please select a topic.</p> :
          <div id='tab-content'>
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectTopic].code}
              </code>
            </pre>
          </div> }
        </section>
      </main>
    </div>
  );
}

export default App;
