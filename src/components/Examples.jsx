import { useState } from "react";
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState();

  function hanleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={<><TabButton isSelected={selectedTopic === 'components'} onClick={() => hanleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => hanleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => hanleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => hanleSelect('state')}>State</TabButton></>}>
        {tabContent}
      </Tabs>
      <menu>

      </menu>
    </Section>
  );
}