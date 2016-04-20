var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
      <div className="col-md-6">
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Alerts</h3>
        </div>
        <div className="panel-body">
        </div>
          <ul>
            {this.props.alertList.map(function(alerts) {
              return <ListItemWrapper data={alerts.alertsText}/>;
            })
            }
          </ul>
      </div>
      </div>
    );
  }
});

var ListItemWrapper = React.createClass({
  render: function() {
    return <li><a>{this.props.data}</a></li>;
  }
});
