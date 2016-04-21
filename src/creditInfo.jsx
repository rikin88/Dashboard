var React = require('react');
var PieChart = require('react-chartjs').Pie;


module.exports = React.createClass({
  getInitialState: function() {
    return {
      "chartData": [
        {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
      ],
      "chartOptions": []
    }
  },
  render: function() {
    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Credit Summary</h3>
        </div>
        <div className="panel-body">
          Credit
          <PieChart data={this.state.chartData} options={this.state.chartOptions} />

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
