var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
      var firstItem = this.props.switcherData[0];
      var text = firstItem.firstName + " " +  firstItem.lastName; 
      return {
        "switcherText" : text
      }
    },

  loadData: function(fname){

    console.log("alerts: " + fname);
    this.setState({switcherText: fname})

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

  propTypes: {
    updateSwitcher: React.PropTypes.func
  },

  changeHandler: function() {
    /*if(typeOf this.props.onChange === 'function'){
      this.props.onChange(fname);
    }*/
    console.log("asdfasfdasfd ");
    this.props.updateSwitcher("123");
  },

  render: function() {
  var fname=this.props.data.firstName;
    return <li><a onClick={this.changeHandler}>{fname}</a></li>;
  }
});