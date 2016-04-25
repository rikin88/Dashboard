var React = require('react');

module.exports = React.createClass({
   getInitialState: function(data) {

      return {}
    
  },

  componentWillMount: function() {
    //var data = this.props.paymentData;
    this.loadTxnInfo();
  },

  loadTxnInfo: function(){
    
      {this.props.txnInfo.map(function(account){
        if(account.AccountNumber === this.props.acctno)
        {
          this.setState({
            recentTxn:account.TransactionActivity.activityCount1, 
            txnPendingReview:account.TransactionActivity.activityCount2,
            auths:account.TransactionActivity.activityCount3,
            declines:account.TransactionActivity.activityCount4,
            txnAmt:account.TransactionActivity.transactionAmount});
            }
        }.bind(this)
      )}

  },
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
                  <text>Recent Transactions:</text>&nbsp;<span>{this.state.recentTxn}</span><br/>
                  <text>Transactions Pending Review:</text>&nbsp;<span>{this.state.txnPendingReview}</span><br/>
                  <text>Authorizations:</text>&nbsp;<span>{this.state.auths}</span><br/>
                  <text>Declines:</text>&nbsp;<span>{this.state.declines}</span><br/>
                  <text>Transaction Amount:</text><br/><span>{this.state.txnAmt}</span><br/>
              </center>
          </div>        
      </div>
      </div>
      </div>
    );
  }
});
