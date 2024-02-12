import { useState } from "react";
import { EXAMPLES, NAMEHANDLE } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";

export default function Examples() {
    const [selectTopic, SetSelectTopic] = useState()
    function handlesSelect(selectButton) {
      SetSelectTopic(selectButton);
      
    }
  return (
    <Section title={Examples} id="examples">
      <menu>
        {NAMEHANDLE.map((handle) => {
          return (
            <TabButton
              key={handle.value}
              isSelected={selectTopic === handle.value}
              onClick={() => handlesSelect(handle.value)}
            >
              {handle.name}
            </TabButton>
          );
        })}
      </menu>
      {!selectTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
