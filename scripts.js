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
	
	console.log(UEMP270V);
	
	
	//I need headers to be first
	var myHeader = UEMP270V.columns;
	
	//Using documentation, construct dataTable element to make better use of format
	var dataTable = new google.visualization.DataTable();
	//Date - String will be first element of header array
	dataTable.addColumn('string', myHeader[0]);
	//Value - Second element of header array:
	dataTable.addColumn('number', myHeader[1]);
	//"Add rows" will point to rows from json
	dataTable.addRows(UEMP270V.rows);
	
	
	
	
	//create options object to customize chart look
	var options = {
		title: "Unemployment"
	}
	
	//equivalent to jQuery $("#divName")
	var chart = new google.visualization.LineChart(document.getElementById("EmptyDiv"));
		chart.draw(dataTable, options);
		
}

//defining my google.load callback
function Pkgloaded(){
	console.log("Google pkg loaded");
	//setting up jQuery "get" call to load data
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1SYj4ZtlF7Z_HLZEeqM5Kuq00uac-VB5X8mXgUryW+WHERE+DATE%3E'1979-12-01'&key=AIzaSyBlA0mcZv-0_h1v-oB1ayLAWK6zQ8CCSnc", infoLoaded, "json");
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
 
