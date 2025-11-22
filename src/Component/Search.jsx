import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './Search.css'
import Card from './Card.jsx'
import { data } from './data.js'


function Search(){

    // const [searchOrg, setSearchOrg] = useState("");
    // const filterData = data.filter((org) =>
    //    org.organizationName.toLowerCase().includes(searchOrg.toLowerCase()))

    return(

        <div className="search-Bar">
            <h2 className="org-text">Organizations</h2>
            
            <div className="input-wrapper">
                <FaSearch id="search-icon" color="#c9d1d9" size={21}/>
                <input 
                    className="input"  
                    placeholder="Search Organizations..."
                    onChange={(e) => setSearchOrg(e.target.value)}
                    />
            </div>

            <div>
                {filterData.map((org) => (
                    <Card 
                        organizationName ={org.organizationName}
                        description = {org.description}
                        openIssues = {org.openIssues}
                        closedIssues = {org.closedIssues}
                        contributors = {org.contributors}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search