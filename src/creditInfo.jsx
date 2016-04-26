var React = require('react');
var PieChart = require('react-chartjs').Pie;


module.exports = React.createClass({

  getInitialState: function() {
    //console.log('inCreditSummary selected index' + this.props.selectedIndex);
    //console.log('displayData ' + this.props.displayData.CreditSummary);

    return {
      "chartData": [
        {
        value: 10000,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Credit Limit"
        },
        {
            value: 7500,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Available Balance"
        },
        {
            value: 2500,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Current Amount"
        }
      ], 
      "chartOptions": []
    }
  },

  render: function() {
    return (
    <div className="col-sm-12">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Credit Summary</h3>
        </div>
        <div className="panel-body">
          <div className="pull-left">
            <PieChart data={this.state.chartData} options={this.state.chartOptions} className="pull-left" />
          </div>
          <div>
             <center>
                  <text>Credit Limit:</text><br/><span>{this.props.displayData.CreditLimit}</span><br/>
                  <text>Available Balance:</text><br/><span>{this.props.displayData.AvailableCredit}</span><br/>
                  <text>Current Amount:</text><br/><span>{this.props.displayData.CurrentBalance}</span>
              </center>
          </div>
        </div>
      </div>
      </div>
    );
  }
});
