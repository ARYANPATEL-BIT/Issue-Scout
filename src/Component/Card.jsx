import { data } from './data.js'
import { FaSearch } from "react-icons/fa";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go"
import { FaRegCircle } from "react-icons/fa";
import './Card.css'

function Card(){
    return(
        <div className="organization-list">
            <h1 className="org-name">Organization name</h1>
            <p className="org-details">organization details</p>
            <div className="issue-details">
                <span className="open-issue"><GoIssueOpened color="#56d364" />ewesdf</span>
                <span className="close-issue"><GoIssueClosed color="#8250df" />sdfwwer</span>
                <span className="contributors">👥sdffer</span>
            </div>
        </div>
    )
}

export default Card