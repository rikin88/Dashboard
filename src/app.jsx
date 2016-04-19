var React = require('react');
var ReactDOM = require('react-dom')

 var Badge = React.createClass({
    // Define our render method.  The render method is the only required method
    // in a React component.
    render: function() {
      // Return a snippet of JSX consisting of a button and a span.
      // The button is assigned a class name and a type.  Inside of the button
      // we place both a title and a number.  The number is wrapped inside of a span
      // with class badge.
      return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
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
