var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
      var firstItem = this.props.switcherData[0];
      var text = firstItem.firstName + " " +  firstItem.lastName; 
      return {
        "switcherText" : text
      }
    },

  loadData: function(info){

    this.setState({
      "switcherText": info.fname + " " + info.lname
    })

  },

  render: function() {

   // this.props.loaddashboard = this.loadData();

    return (
    <div className="col-sm-12">
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          {this.state.switcherText} <span className="caret"></span></button>
          <ul className="dropdown-menu">         
            {this.props.switcherData.map(function(account) {
              return <ListItemWrapper updateSwitcher={this.loadData} data={account}/>;
            }.bind(this))
            }
          </ul>
      </div>
    </div>
    );            
  }
});

var ListItemWrapper = React.createClass({

  changeHandler: function(info) {
    this.props.updateSwitcher(info);
  },

  render: function() {
    var info = {
      "fname" : this.props.data.firstName,
      "lname" : this.props.data.lastName,
      "accountNumber" : this.props.data.AccountNumber,
      "accountStatus" : this.props.data.AccountStatus
    }

    return <li><a onClick={this.changeHandler.bind(this, info)}>{info.fname}&nbsp;{info.lname}&nbsp;({info.accountNumber})&nbsp;&nbsp;|&nbsp;{info.accountStatus}</a></li>;
  }
});