
var React = require('react'); 
 var ActionItems = require('./actionItems') 
 var Alerts = require('./alerts') 
 var Message = require('./messages') 
 var RecentTrends = require('./recentTrends')
 
 
 module.exports = React.createClass({ 
 	render: function() {  
 		return ( 
 			<div> 
 				<div className="row"> 
 				  <ActionItems itemList={this.props.jsonData.ActionItems}/> 
 				  <Alerts alertList={this.props.jsonData.Alerts}/> 
 				</div> 
 				<div className="row"> 
 				  <Message msgList={this.props.jsonData.Messages} styling={this.props.styleInfo}/> 
				</div> 
				<div className="row">
				  <RecentTrends />
				</div>

			</div> 
 		); 
 	} 
 }); 
  
