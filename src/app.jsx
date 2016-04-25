var React = require('react');
var ReactDOM = require('react-dom')
var Menu = require('./menu')
var LeftSide = require('./leftSide')
var Dashboard = require('./dashboard')

var DashBoardData =require('../dashboard2.json')

var PageHeader = React.createClass({
  render: function(){
    return(
      <div class="page-header">
      <center><h2>HackSlash <small>Corporation</small></h2></center>
      </div>
      )
  }
});

 var WelcomePage = React.createClass({
    render: function() {
      return( <div>
        <PageHeader/>
        <Menu/><br/>
        <div className="col-sm-10 col-md-6">
        <LeftSide jsonData={DashBoardData} />
        </div>
        <div className="col-sm-10 col-md-6">
        <Dashboard jsonData={DashBoardData} podStyleInfo="infoPods"/>
        </div>
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

  var element = React.createElement(WelcomePage, options);


  // React, after you render this class, please place it in my body tag
  ReactDOM.render(element, document.getElementById('container'));

