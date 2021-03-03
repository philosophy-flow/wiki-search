import React from 'react';

const ResultsContainer = function({results}) {
  if (!results) {
    return (
      <div className="ui segment">
        Results will be displayed here.
      </div>);
  }

  const renderedResults = results.map(result => {
    // Replaces span tags with empty strings for clean rendering
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = result.snippet.replace(regex, '');

    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui blue button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go
          </a>
        </div>

        <div className="content">
          <div className="header">{result.title}</div>
          {cleanSnippet}
        </div>
      </div>
    );
  });

  return (
    <div className="ui celled list" style={{paddingBottom: "10px"}}>
    {renderedResults}
    </div>
  );
}

export default ResultsContainer;
