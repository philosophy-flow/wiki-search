import React, {useState} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

const App = function() {
  const [results, setResults] = useState('');

  function handleUserInput(input) {
    if (input) {
      (async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            gpslimit: 100,
            srsearch: input
          }
        });
        setResults(data.query.search)
      })();
    }
  }

  return (
    <div className="ui container">
      <SearchBar
        handleUserInput={handleUserInput}
      />
      <ResultsContainer
        results={results}
      />
    </div>
  );
}

export default App;
