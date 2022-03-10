import React from 'react'
import SearchBar from "./SearchBar"
import Filters from './Filters'

export default function Sidebar() {
    return (
        <div>
            <SearchBar/>
            <Filters/>
        </div>
    )
}
