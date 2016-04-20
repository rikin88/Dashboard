var React = require('react');
var ReactDOM = require('react-dom')
var Menu = require('./menu')
var LeftSide = require('./leftSide')
var Dashboard = require('./dashboard')
//var ActionItems = require('./actionItems')
//var Alerts = require('./alerts')

 var App = React.createClass({
    render: function() {
      return( <div>
        <Menu data="NewSection"/>
        <LeftSide messages="messages" />
        
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
  var element = React.createElement(App, options);

  // React, after you render this class, please place it in my body tag
  ReactDOM.render(element, document.getElementById('container'));

