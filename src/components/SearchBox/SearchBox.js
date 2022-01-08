import React from 'react'

const SearchBox = ({ onSearch }) => {
    const [searchText, setSearchText] = React.useState('')
    const handleInputChange = e => setSearchText(e.target.value)
    return (
        <div>
            <input onChange={handleInputChange} />
            <button onClick={() => onSearch(searchText)}> Show weather info</button>
        </div>
    )
}

export default SearchBox;