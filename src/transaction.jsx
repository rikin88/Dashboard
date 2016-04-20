var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-6">
      <div className={"panel panel-info "+ this.props.styleInfo}>
        <div className="panel-heading">
          <h3 className="panel-title">Transaction Information</h3>
        </div>
        <div className="panel-body">
        
        Transaction
         

      </div>
      </div>
      </div>
    );
  }
});
