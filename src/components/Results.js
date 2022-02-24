import React from "react";
import Result from "./Result";

const Results = ({ results, openPopup, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/spinner.gif" alt="" className="spinner" />
        </div>
      ) : (
        <div className="results-container">
          {results.map((result) => (
            <Result key={result.imdbID} result={result} openPopup={openPopup} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
