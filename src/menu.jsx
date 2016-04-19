var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<ul className="nav nav-pills">
				  <li role="presentation" className="active"><a href="#">Home</a></li>
				  <li role="presentation"><a href="#">Transactions</a></li>
				  <li role="presentation"><a href="#">Reports</a></li>
				  <li role="presentation"><a href="#">Text1</a></li>
				  <li role="presentation"><a href="#">Text2</a></li>
				  <li role="presentation"><a href="#">Text3</a></li>
				  <li role="presentation"><a href="#">Help</a></li>
				  <li role="presentation"><a href="#">{this.props.data}</a></li>
				</ul>
			</div>
		);
	}
});


