import { useState } from 'react';
import "./IssueList.css";

function IssueList({ issues }) {

  const[searchIssue, setSearchIssue] = useState("");

  const filterIssue = issues.filter((issue)=>
    issue.title?.toLowerCase().includes(searchIssue.toLowerCase())
  );
  
  return (
    <div className="issue-container">
      <h1 className="myh1">Issues</h1>
      <div className="input-container">
        <input
          className="input-issue"
          placeholder="Search issues..."
          onChange={(e)=> setSearchIssue(e.target.value)}
        />
      </div>

      <div className="issue-card">
        {filterIssue.map((issue) =>

          <div className="issue-row" key={issue.id}>
            <div className="issue-Details">
              <h1 className="issueName">{issue.title}</h1>
              <p className="issueDetails">{issue.description}</p>
            </div>
            <div className="tag">
              <p className="change">{issue.status}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IssueList;

