var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-6">
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Items Awaiting Your Action</h3>
        </div>
        <div className="panel-body">
        </div>
          <ul>
            {this.props.itemList.map(function(items) {
              return <ListItemWrapper data={items.actionText}/>;
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
    return <li><a href="">{this.props.data}</a></li>;
  }
});