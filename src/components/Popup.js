import React from 'react'

const Popup = ({selected, closePopup}) => {
    return (
        <div className="popup">
            <div className="popup-container">
                <h1>{selected.Title} <span>({selected.Year})</span></h1>
                <div className="description">
                    <img src={selected.Poster}  />
                    <p>{selected.Plot}</p>
                </div>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    )
}

export default Popup
