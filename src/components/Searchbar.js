import React from 'react'

const Searchbar = ({handleInput, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} className="search" type="text" placeholder="Search for a movie..." />
            <input className="submit" type="submit" value="Search"/>
        </form>
    )
}

export default Searchbar
