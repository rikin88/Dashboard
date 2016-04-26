var React = require('react');

module.exports = React.createClass({
  
  render: function() {

    var statementsPanelStyle = {
      height: "210px", 
      backgroundColor: "white"
    };

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "} style={statementsPanelStyle}>
        <div className="panel-heading">
          <h3 className="panel-title">Statement Information</h3>
        </div>
        <div className="panel-body">
          <div>
            <center>
              <text>Satement Due: <br/> <small> due </small></text><span>{this.props.displayData.lastStatementDate}</span><br/>
              <text>Statement Amount:</text><br/><span>{this.props.displayData.statementBalance}</span>
            </center>
          </div>
      </div>
      </div>
      </div>
    );
  }
});
