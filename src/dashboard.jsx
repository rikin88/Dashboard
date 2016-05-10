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
    return {
      "accountNum" : this.props.jsonData.Accounts[0].AccountNumber,
      "index": 0,
      "creditSummary": this.props.jsonData.Accounts[0].CreditSummary,
      "transactionSummary": this.props.jsonData.Accounts[0].TransactionActivity,
      "paymentSummary": this.props.jsonData.Accounts[0].Payments,
      "chartData": [
        {
            value: this.props.jsonData.Accounts[0].CreditSummary.CreditLimit,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Credit Limit"
        },
        {
            value: this.props.jsonData.Accounts[0].CreditSummary.AvailableCredit,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Available Balance"
        },
        {
            value: this.props.jsonData.Accounts[0].CreditSummary.CurrentBalance,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Current Amount"
        }
      ]
    };
  },

  updateState: function(item) {
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

    this.setState({
      "accountNum": item,
      "index" : index,
      "creditSummary" : creditSummary,
      "transactionSummary" : transactionSummary,
      "paymentSummary" : paymentSummary,
      "chartData" : [
        {
            value: this.props.jsonData.Accounts[index].CreditSummary.CreditLimit,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Credit Limit"
        },
        {
            value: this.props.jsonData.Accounts[index].CreditSummary.AvailableCredit,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Available Balance"
        },
        {
            value: this.props.jsonData.Accounts[index].CreditSummary.CurrentBalance,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Current Amount"
        }
      ],
    });
  },

  render: function() {

    var dashboardStyle = {
      height: "780px", 
      backgroundColor: "white" 
    };

    var genericStyle = {
      height: "310px", 
      backgroundColor: "white"
    };

    var marginStyle = {
      marginBottom: "15px"
    };

    return (
    <div>
      <div className={"panel panel-info "} style={dashboardStyle}>
        <div className="panel-heading">
          <h4 className="panel-title">Account Information</h4>
        </div>
        <div className="panel-body">

          <div className="row" >
             <AccountSelector selectedIndex={this.state.index} dashboardCallback={this.updateState} jsonData={this.props.jsonData.Accounts} style={marginStyle}  />
             <hr/>  
          </div>

          <div className="row"> 
            <CreditSummary chartData={this.state.chartData} displayData={this.state.creditSummary} selectedIndex={this.state.index} style={genericStyle}/> 
            
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

