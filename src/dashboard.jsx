var React = require('react');

var CreditSummary = require('./creditInfo') 
var Payments = require('./payment') 
var Transaction = require('./transaction') 
var Statement = require('./statement') 
var AccSwitcher = require('./accSwitcher') 
var AccountSelector = require('./accountSelector')

var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

module.exports = React.createClass({
  getInitialState : function() {
    //console.log("Dashboard initial state: " + this.props.jsonData.Accounts[0].AccountNumber);
    //console.log("Dashboard initial state: " + this.props.jsonData.Accounts[0].CreditSummary.CreditLimit);
    console.log("Dashboard initial state: " + this.props.jsonData.Accounts[0].TransactionActivity.activityCount1);
    return {
      "accountNum" : this.props.jsonData.Accounts[0].AccountNumber,
      "index": 0,
      "creditSummary": this.props.jsonData.Accounts[0].CreditSummary,
      "transactionSummary": this.props.jsonData.Accounts[0].TransactionActivity,
      "paymentSummary": this.props.jsonData.Accounts[0].Payments
    };
  },

  updateState: function(item) {
    //console.log('entering here!!!' + item);
    var index = -1;
    var data = this.props.jsonData.Accounts;

    for (var i =0;i<data.length; i++) {
      if(data[i].AccountNumber === item) {
        console.log('found matching index ' + i);
        index = i;
        break;
      }
    }

    var creditSummary = data[i].CreditSummary;
    var transactionSummary = data[i].TransactionActivity;
    var paymentSummary = data[i].Payments;
    //console.log('test1 ' + creditSummary.CreditLimit);
    //console.log('index in dashboard: ' + index);
    console.log('test3  updateState' + transactionSummary.activityCount1);
    this.setState({
      "accountNum": item,
      "index" : index,
      "creditSummary" : creditSummary,
      "transactionSummary" : transactionSummary,
      "paymentSummary" : paymentSummary
    });
    //console.log("updated state in dashboard : " + this.state.accountNum);
  },

  componentDidMount: function() {
    //console.log('component did mount: ' + this.state.accountNum);
  },

  render: function() {
    var dashboardStyle = {
      height: "820px", 
      backgroundColor: "white" 
    };

    var genericStyle = {
      height: "310px", 
      backgroundColor: "white"
    };

    var accountNum = this.state.accountNum;

    //console.log('test 2 ' + this.state.creditSummary.CreditLimit);

    return (
    <div>
      <div className={"panel panel-info "} style={dashboardStyle}>
        <div className="panel-heading">
          <h4 className="panel-title">Account Information</h4>
        </div>
        <div className="panel-body">

          <div className="row">
             <AccountSelector selectedIndex={this.state.index} dashboardCallback={this.updateState} jsonData={this.props.jsonData.Accounts}  />
          </div>

          <div className="row"> 
            <CreditSummary displayData={this.state.creditSummary} selectedIndex={this.state.index} style={genericStyle}/> 
            
          </div>

          <div className="row"> 
            <Transaction displayData={this.state.transactionSummary} selectedIndex={this.state.index} style={genericStyle} />
            <Statement displayData={this.state.transactionSummary} selectedIndex={this.state.index} style={genericStyle} />
          </div> 

          <div className="row">
            <Payments displayData={this.state.paymentSummary} selectedIndex={this.state.index} style={genericStyle} />
          </div>
        </div>
         
      </div>
    </div>
    );
  }
});

