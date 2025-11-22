import React from "react";
import { FaSearch } from "react-icons/fa";
import './Search.css'

function Search(){
    return(
        <div className="search-Bar">
            <h2 className="org-text">Organizations</h2>
            
            <div className="input-wrapper">
                <FaSearch id="search-icon"/>
                <input placeholder="Search Organizations..."/>
            </div>
            
        </div>
    )
}

export default Search