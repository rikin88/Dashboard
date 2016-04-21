var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Credit Summary</h3>
        </div>
        <div className="panel-body">
    Credit
          <ul>
          
            {this.props.creditInfo.map(function(account) {
              return <ListItemWrapper data={account.CreditSummary.CreditLimit}/>;
            })
            }
          </ul>

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
