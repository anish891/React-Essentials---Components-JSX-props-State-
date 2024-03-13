import { useState } from "react";
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => hanleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => hanleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => hanleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => hanleSelect('state')}>State</TabButton>
      </menu>
      {tabContent}
    </section>
  );
}