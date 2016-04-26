var React = require('react');

module.exports = React.createClass({
   
  render: function() {
    var transactionsPanelStyle = {
      height: "210px", 
      backgroundColor: "white"
    };
    
    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "} style={transactionsPanelStyle}>
        <div className="panel-heading">
          <h3 className="panel-title">Transaction Information</h3>
        </div>
        <div className="panel-body">        
        <div>
             <center>
                  <text>Recent Transactions:</text>&nbsp;<span>{this.props.displayData.activityCount1}</span><br/>
                  <text>Transactions Pending Review:</text>&nbsp;<span>{this.props.displayData.activityCount2}</span><br/>
                  <text>Authorizations:</text>&nbsp;<span>{this.props.displayData.activityCount3}</span><br/>
                  <text>Declines:</text>&nbsp;<span>{this.props.displayData.activityCount4}</span><br/>
                  <text>Transaction Amount:</text><br/><span>{this.props.displayData.transactionAmount}</span><br/>
              </center>
          </div>        
      </div>
      </div>
      </div>
    );
  }
});
