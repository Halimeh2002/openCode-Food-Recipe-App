import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const Navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Navigate(`/search?q=${term}`);
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit }>
                <label htmlFor='search'>Search:</label>
                <input
                    id='search'
                        type='text'
                        onChange={(e) => setTerm(e.target.value)}
                        required
                    />
            </form>
        </div>
    )
}