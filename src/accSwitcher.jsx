var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-12">
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          Switcher <span className="caret"></span></button>
          <ul className="dropdown-menu">         
            {this.props.switcherData.map(function(account) {
              return <ListItemWrapper data={account}/>;
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
    return <li><a>{this.props.data.firstName}&nbsp;{this.props.data.middleInitial}&nbsp;{this.props.data.lastName}</a></li>;
  }
});


