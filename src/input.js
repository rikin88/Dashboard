/*var fs = require('fs');
var DATA = "../dashboard.json";
console.log('hello');
var readInput = 
	fs.readFile(DATA, function(err, data) {
		if(err) {
			console.error(err);
			process.exit(1);
		}
		var input = JSON.parse(data);
		console.log(input);
	};
*/

var fs = require ('fs');
console.log("\n *START* \n");

var content = fs.readFileSync("../dashboardData.json");
console.log("Output Content : \n" + content);
console.log("\n *EXIT* \n");

