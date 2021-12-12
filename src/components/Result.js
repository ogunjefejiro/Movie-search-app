import React from 'react'

const Result = ({result, openPopup}) => {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster}/>
            <p>{result.Title}</p>
        </div>
    )
}

export default Result
