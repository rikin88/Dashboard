var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<ul className="nav nav-pills">
				  <li role="presentation" className="active"><a href="#">Home</a></li>
				  <li role="presentation"><a href="#">Transactions</a></li>
				  <li role="presentation"><a href="#">Reports</a></li>
				  <li role="presentation"><a href="#">MyAccounts</a></li>
				  <li role="presentation"><a href="#">Help</a></li>
				</ul>
			</div>
		);
	}
});


