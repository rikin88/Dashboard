var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-12">

      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          Switcher <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Text1</a></li>
          </ul>
      </div>
    
    </div>
    );
  }
});




