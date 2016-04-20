var React = require('react');

module.exports = React.createClass({
	render: function() { 
		return (
			  <div className="col-sm-10 col-md-3">
			    <div className="thumbnail">
			      <h4>Panel 1</h4>
			      <div className="caption">
			        <h3>Thumbnail label</h3>
			        <p>This </p>
			        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>
		);
	}
});


