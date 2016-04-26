var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

module.exports = React.createClass({

  getInitialState: function() {
      var firstItem = this.props.jsonData[0];
      var index = this.props.selectedIndex;
      var text = firstItem.firstName + " " +  firstItem.lastName; 
      console.log('index in selector is : ' + index);
      return {
        "switcherText" : text,
        "accountNum" : this.props.jsonData[index].accountNum
      }
    },

  loadData: function(info){

    this.setState({
      "switcherText": info.fname + " " + info.lname
    })

  },
  
  render: function() {
    var MenuItems = this.props.jsonData.map(function(account) {
      return (
        <MenuItem eventKey={account.AccountNumber}>{account.firstName} {account.lastName} ({account.AccountNumber}) | {account.AccountStatus} </MenuItem>
      );
    }.bind(this));

    var selectedAccount = this.props.selectedIndex;
    var i = 1;
    return (
      <div className="col-sm-12">
        <DropdownButton onSelect={this.props.dashboardCallback} bsStyle={"primary"} 
          title={this.props.jsonData[selectedAccount].firstName 
            + ' ' + this.props.jsonData[selectedAccount].lastName} 
          key={this.props.jsonData[selectedAccount].AccountNumber} id={`dropdown-basic-${i}`}>
          {MenuItems}
        </DropdownButton>
      </div>
    );  
                
  }
});