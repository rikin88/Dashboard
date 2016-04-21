var React = require('react');

module.exports = React.createClass({
  getInitialState: function(data) {

      console.log("Here");

      return {
        
      }
  },

  

  componentWillMount: function() {
    var data = this.props.paymentData;
    this.loadPaymentInfo();
  },

  loadPaymentInfo: function(){
    this.setState({paymentAmt:453});
      {this.props.paymentData.map(function(pay){
        if(pay.AccountNumber === this.props.acctno)
        {
          this.setState({paymentAmt:pay.Payments.paymentAmount, 
          paymentDate:pay.Payments.paymentDate});
        }
      }.bind(this)
      )}

  },
  render: function() {

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Payment Information</h3>
        </div>
        <div className="panel-body">
            <div>
             <center>
                  <text>Payment Due Date: </text><br/><span>{this.state.paymentDate}</span><br/>
                  <text>Payment Due Amount: </text><br/><span>{this.state.paymentAmt}</span>
              </center>

            </div>
        </div>
      </div>
    </div>
    );
  }
});
