import "./IssueList.css"


function IssueList({  }) {
 
  return (
    <div className="issue-container">
      <h1 className="myh1">Issues</h1>
      <div className="input-container">
        <input
          className="input-issue"
          placeholder="Search issues..."
        />
      </div>

      <div className="issue-card">
          <div className="issue-row" >
            <div className="issue-Details">
              <h1 className="issueName">{}Issue Title</h1>
              <p className="issueDetails">{}This is where the Issue Description is going to display</p>
            </div>
            <div className="tag">
              <p className="change">{}close</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default IssueList;
