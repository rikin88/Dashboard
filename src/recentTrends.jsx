var React = require('react');
var BarGraph = require('react-chartjs').Bar;

module.exports = React.createClass({

  getInitialState: function() {
  	var data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [1000, 1500, 2000, 2500, 56, 55, 40]
        }
        
    ]
};
    return {
      "chartData": [
        {
        value: 10000,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
        },
        {
            value: 7500,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 2500,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
      ],
      "chartOptions": [],
      "data" : data
    }
  },

  render: function() {
    return (
    <div className="col-sm-12">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Recent Trends</h3>
        </div>
        <div className="panel-body">
          <div className="pull-left">
            <BarGraph data={this.state.data} options={this.state.chartOptions} className="pull-left" />
          </div>
        </div>
      </div>
      </div>
    );
  }
});