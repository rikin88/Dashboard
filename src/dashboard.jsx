var React = require('react');

var CreditSummary = require('./creditInfo') 
var Payments = require('./payment') 
var Transaction = require('./transaction') 
var Statement = require('./statement') 
var AccSwitcher = require('./accSwitcher') 


module.exports = React.createClass({
  render: function() {
    var dashboardStyle = {
      height: "775px", 
      backgroundColor: "white" 
    };

    var genericStyle = {
      height: "310px", 
      backgroundColor: "white"
    };

    return (
    <div>
      <div className={"panel panel-info "} style={dashboardStyle}>
        <div className="panel-heading">
          <h3 className="panel-title">Account Information</h3>
        </div>
        <div className="panel-body">
          <div className="row"> 
            <AccSwitcher switcherData={this.props.jsonData.Accounts}/>    
          </div>
          <br/>
          <div className="row"> 
            <CreditSummary creditInfo={this.props.jsonData.Accounts} acctno="1234567890123451" style={genericStyle}/> 
            
          </div>

          <div className="row"> 
            <Transaction txnInfo={this.props.jsonData.Accounts} acctno="1234567890123451" style={genericStyle}/> 
            <Statement statementInfo={this.props.jsonData.Accounts} acctno="1234567890123451" style={genericStyle}/> 
          </div> 

          <div className="row">
            <Payments paymentData={this.props.jsonData.Accounts} acctno="1234567890123451" style={genericStyle}/> 
          </div>
        </div>
         
      </div>
    </div>
    );
  }
});

