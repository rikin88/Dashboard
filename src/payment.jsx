var React = require('react');

module.exports = React.createClass({
  getInitialState: function(data) {

      return {}
    
  },

  componentWillMount: function() {
    //var data = this.props.paymentData;
    this.loadPaymentInfo();
  },

  loadPaymentInfo: function(){

      {this.props.paymentData.map(function(account){
        if(account.AccountNumber === this.props.acctno)
        {
          this.setState({
            paymentAmt:account.Payments.paymentAmount, 
            paymentDate:account.Payments.paymentDate});
        }
      }.bind(this)
      )}

  },
  render: function() {
    var paymentsPanelStyle = {
      height: "190px", 
      backgroundColor: "white"
    };

    return (
    <div className="col-sm-12">
      <div className={"panel panel-info "} style={paymentsPanelStyle}>
        <div className="panel-heading">
          <h3 className="panel-title">Payment Information</h3>
        </div>
        <div className="panel-body">
            <div>
              <center>
                  <text>Payment Due: <br/> <small> due </small></text><span>{this.state.paymentDate}</span><br/>
                  <text>Payment Due Amount:</text><br/><span>{this.state.paymentAmt}</span>
              </center>
            </div>
        </div>
      </div>
    </div>
    );
  }
});
