var React = require('react');

module.exports = React.createClass({
  getInitialState: function(data) {

      return {}
    
  },

  componentWillMount: function() {
    //var data = this.props.paymentData;
    this.loadStatementInfo();
  },

  loadStatementInfo: function(){

      {this.props.statementInfo.map(function(account){
        if(account.AccountNumber === this.props.acctno)
        {
          this.setState({
          statementAmt:account.TransactionActivity.statementBalance, 
          statementDate:account.TransactionActivity.lastStatementDate});
        }
      }.bind(this)
      )}

  },
  render: function() {

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Statement Information</h3>
        </div>
        <div className="panel-body">
          <div>
            <center>
              <text>Satement Due: <br/> <small> due </small></text><span>{this.state.statementDate}</span><br/>
              <text>Statement Amount:</text><br/><span>{this.state.statementAmt}</span>
            </center>
          </div>
      </div>
      </div>
      </div>
    );
  }
});
