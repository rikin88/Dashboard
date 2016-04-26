var React = require('react');

module.exports = React.createClass({
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
                  <text>Payment Due: <br/> <small> due </small></text><span>{this.props.displayData.paymentDate}</span><br/>
                  <text>Payment Due Amount:</text><br/><span>{this.props.displayData.paymentAmount}</span>
              </center>
            </div>
        </div>
      </div>
    </div>
    );
  }
});
