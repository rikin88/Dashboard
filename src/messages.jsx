var React = require('react');

module.exports = React.createClass({
	render: function() { 
		return (
			<div className="col-sm-20 col-md-6 " >
			    <div className={"thumbnail " + this.props.messages}>
			      <h4>Messages</h4>
			      <div className="caption">
			        <h3>Thumbnail label: {this.props.messages}</h3>
			        <p>This </p>
			        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>
		);
	}
});


