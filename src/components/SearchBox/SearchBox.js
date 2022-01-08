import React from 'react'

const SearchBox = ({ onSearch }) => {
    const [searchText, setSearchText] = React.useState('')
    const handleInputChange = e => setSearchText(e.target.value)
    return (
        <div style={{ marginTop: '20px' }}>
            <input style={{ marginRight: '5px' }} onChange={handleInputChange} placeholder='Enter city name' />
            <button onClick={() => onSearch(searchText)}> Show weather info</button>
        </div>
    )
}

export default SearchBox;