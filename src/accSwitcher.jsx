var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
    <div className="col-sm-12">

  <div className="dropdown">
   <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
           Dropdown
    <span class="caret"></span>
  </button> 
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu3">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
      </div>

      </div>
    );
  }
});




