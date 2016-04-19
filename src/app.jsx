var React = require('react');
var ReactDOM = require('react-dom')
var Menu = require('./menu')

 var Badge = React.createClass({
    render: function() {
      return( <div>
        <Menu data="NewSection"/>

        <button className="btn btn-primary" type="button">
          {this.props.title}<span className="badge">{this.props.number}</span>
        </button>

      </div>
      );
    }
  });

  // Initial setup options provided to the Badge componenet
  var options = {
    title: 'Inbox',
    number: 12
  };

  // React, please render this class
  var element = React.createElement(Badge, options);

  // React, after you render this class, please place it in my body tag
  ReactDOM.render(element, document.body);
