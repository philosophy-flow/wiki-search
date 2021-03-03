import React, {useState} from 'react';

const SearchBar = function(props) {
  const [term, setTerm] = useState('');

  function handleInputChange(e) {
    setTerm(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    props.handleUserInput(term)
  }


  return (
      <form
        className="ui form ui segment"
        style={{margin: "10px"}}
        onSubmit={handleFormSubmit}
      >
        <div className="field">
          <label>Enter a search term:</label>
          <div className="ui action input">
            <input
              className="ui input"
              value={term}
              onChange={handleInputChange}
            />
            <button className="ui button">Search</button>
          </div>
        </div>
      </form>
  );
}

export default SearchBar;
