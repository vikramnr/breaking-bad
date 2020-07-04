import React,{useState} from 'react'

const Search = ({getQuery}) => {
    const [searchText, setSearchText] = useState('')
    const searchOnChange = (text) => {
        setSearchText(text)
        getQuery(text)
    }
    return (
        <section className='search'>
            <input type="text" value={searchText} className='form-control' onChange={(e)=> searchOnChange(e.target.value)} placeholder='search characters' autoFocus/>
        </section>
    )
}

export default Search
