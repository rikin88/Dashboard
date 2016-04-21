var React = require('react');

module.exports = React.createClass({

  getInitialState: function(data) {

      return {}
    
  },

  componentWillMount: function() {
    //var data = this.props.paymentData;
    this.loadCreditInfo();
  },

  loadCreditInfo: function(){
    
      {this.props.creditInfo.map(function(account){
        if(account.AccountNumber === this.props.acctno)
        {
          this.setState({
            creditLimit:account.CreditSummary.CreditLimit, 
            currentBal:account.CreditSummary.CurrentBalance,
            availableCredit:account.CreditSummary.AvailableCredit});
            }
        }.bind(this)
      )}

  },
  render: function() {

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Credit Summary</h3>
        </div>
        <div className="panel-body">
          <div>
             <center>
                  <text>Credit Limit:</text><br/><span>{this.state.creditLimit}</span><br/>
                  <text>Available Balance:</text><br/><span>{this.state.availableCredit}</span><br/>
                  <text>Current Amount:</text><br/><span>{this.state.currentBal}</span>
              </center>
          </div>

      </div>
      </div>
      </div>
    );
  }
});

var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data}</li>;
  }
});
