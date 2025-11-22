import React from "react";
import './Search.css'
import Card from './Card.jsx'
import { FaSearch } from "react-icons/fa";


function Search(){
    return(

        <div className="search-Bar">
            <h2 className="org-text">Organizations</h2>
            
            <div className="input-wrapper">
                <FaSearch id="search-icon" color="#c9d1d9" size={21}/>
                <input className="input" placeholder="Search Organizations..."/>
            </div>

            <div>
                <Card />
            </div>
        </div>
    )
}

export default Search