var React = require('react');

module.exports = React.createClass({
  render: function() {
    var messagePanelStyle = {
      height: "375px",
      backgroundColor: "white"
    };

    return (
      <div className="col-md-12">
        <div className={"panel panel-info"} style={messagePanelStyle}>
          <div className="panel-heading">
            <h3 className="panel-title">Messages</h3>
          </div>
          <div className="panel-body">
          </div>
            <ul>
            
              {this.props.msgList.map(function(msg) {
                return <ListItemWrapper data={msg.messageText}/>;
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
    return <li>{this.props.data}</li>;
  }
});
