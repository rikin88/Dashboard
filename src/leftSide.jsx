var React = require('react');
var ActionItems = require('./actionItems')
var Alerts = require('./alerts')
var Messages = require('./messages')

module.exports = React.createClass({
	render: function() { 
		return (
			<div>
				<div className="row">
				  <ActionItems />
				  <Alerts />
				</div>
				<div className="row">
				  <Messages messages={this.props.messages} />
				</div>
			</div>
		);
	}
});


