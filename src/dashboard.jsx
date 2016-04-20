var React = require('react');

var CreditSummary = require('./creditInfo') 
var Payments = require('./payment') 
var Transaction = require('./transaction') 
var Statement = require('./statement') 
var AccSwitcher = require('./accSwitcher') 


module.exports = React.createClass({
  render: function() {

    return (
    <div>
      <div className={"panel panel-info " +this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Dashboard</h3>
        </div>
        <div className="panel-body">
          <div className="row"> 
            <AccSwitcher/>          
          </div>
          <div className="row"> 
            <CreditSummary styleInfo={this.props.podStyleInfo}/> 
            <Payments styleInfo={this.props.podStyleInfo}/> 
          </div>
          <div className="row"> 
            <Transaction styleInfo={this.props.podStyleInfo}/> 
            <Statement styleInfo={this.props.podStyleInfo}/> 
          </div> 
        </div>
         
      </div>
    </div>
    );
  }
});

