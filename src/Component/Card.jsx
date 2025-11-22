import { GoIssueOpened, GoIssueClosed } from "react-icons/go"
import { FaRegCircle } from "react-icons/fa";
import './Card.css'

function Card({ organizationName, description , openIssues , closedIssues, contributors}){
    return(
        <div className="org-container">
            <div className="organization-list">
                <h1 className="org-name">{ organizationName }</h1>
                <p className="org-details">{ description }</p>
                <div className="issue-details">
                    <span className="open-issue"><GoIssueOpened color="#56d364" />{ openIssues } Open</span>
                    <span className="close-issue"><GoIssueClosed color="#8250df" />{ closedIssues } Closed</span>
                    <span className="contributors">👥{ contributors } Contributors</span>
                </div>
            </div>
        </div>
    )
}

export default Card