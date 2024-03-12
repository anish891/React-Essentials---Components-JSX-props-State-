import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function hanleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic) {
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>{EXAMPLES[selectedTopic].code}</code>
</pre>
</div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)  =>  <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic === 'components'} onSelect={() => hanleSelect('components')}>Components</TabButton>
            <TabButton isSelected ={selectedTopic === 'jsx'} onSelect={() => hanleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic === 'props'} onSelect={() => hanleSelect('props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic === 'state'} onSelect={() => hanleSelect('state')}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;