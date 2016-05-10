var React = require('react');
var PieChart = require('react-chartjs').Pie;


module.exports = React.createClass({
  
  getInitialState: function() {
    console.log(this.props.chartData);
    return {
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
            <PieChart data={this.props.chartData} options={this.state.chartOptions} className="pull-left" />
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
