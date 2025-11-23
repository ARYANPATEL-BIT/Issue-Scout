import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import IssueList from "../Component/IssueList.jsx";
import { data } from '../Component/data.js';
import './OrganizationPage.css'
import { GoIssueOpened, GoIssueClosed } from "react-icons/go"

function OrganizationPage(){

    const { orgId } = useParams();
    const navigate = useNavigate();

    const org = data.find(o => o.id === orgId );

    return (
        <div>
            <Navbar />

            <div className='details'>
                <div className='container'>
                    <div className="back-class">
                        <button className="back"  onClick={() => navigate("/organization")} >← Back to Organizations</button>
                    </div>
                    <div className="org-per-detials">
                        <h1 className="org-name">{org.organizationName}</h1>
                        <p className="org-info">{org.description}</p>
                        <div className="org-issue-info">
                            <span className='open-issue'><GoIssueOpened color="#56d364"/>{ org.openIssues } Open</span>
                            <span className='close-issue'><GoIssueClosed color="#8250df"/>{ org.closedIssues } Closed</span>
                            <span className='contributors'>👥{ org.contributors } Contributor</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <IssueList issues={org.issues}/>
            </div>
        </div>

    )
}

export default OrganizationPage