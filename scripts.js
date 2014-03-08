/**
 * @author Prisca Pointdujour
 */
/*
 * Project steps:
 * 1. Set up document ready
 * 2. Load Google charting package
 * 3. Load data
 * 4. Render chart
*/

function infoLoaded(UEMP270V){
	var Observe = UEMP270V.observations;
	
	console.log(UEMP270V);
	
	var Containerlist = [];
	//to create my visualization, I need to convert
	//my JSON data to an array of arrays, using a for loop
	//I need headers to be first
	var myHeader = ["Date", "Value"];
	Containerlist.push(myHeader);
	
	//specify starting point, ending point
	for(var i=0; i<Observe.length; i++){
		//create reference to current object in list
		var object = Observe[i];
		//Create little array with date and value
		var array = [object.date, Number (object.value)];
		//Put array into Containerlist
		Containerlist.push(array);
	}
	//at end of for loop, Containerlist should be populated with 
	//array of arrays that is date and value of observations
	console.log(Containerlist);
	//feed data to visualization library
	var DataTable = google.visualization.arrayToDataTable(Containerlist);
	
	//create options object to customize chart look
	var options = {
		title: "Unemployment: 1980 - 2013"
	}
	
	//equivalent to jQuery $("#divName")
	var chart = new google.visualization.LineChart(document.getElementById("EmptyDiv"));
		chart.draw(DataTable, options);
}

//defining my google.load callback
function Pkgloaded(){
	console.log("Google pkg loaded");
	//setting up jQuery "get" call to load data
	//$.get("UEMP270V_data.json", infoLoaded, "json");
}

//defining document ready callback
function Polo(){
	console.log("page done");
	//load Google charting package
	google.load("visualization", "1", {packages:["corechart"], "callback": Pkgloaded});
}

/*document ready function */
$(document).ready(Polo)

console.log("js loaded");
 
