$(document).ready(function () {

  //TABLE_ID = '';
  TABLE_ID = 'ga:64507896'

$(".letsgo").click(function() {
 if($("#APIKeyInput").val() == "") {
    alert("You must enter an API Key!");
    return false;
}
 if($("#clientIdInput").val() == "") {
    alert("You must enter a CLIENT ID!");
    return false;
}

API_KEY = $("#APIKeyInput").val();
CLIENT_ID = $("#clientIdInput").val();
$("#consoleDiv").hide();
enterMainPage(); 

});

function enterMainPage () {
$("#firstPage").hide('slide', {direction: 'left'}, "fast");
$("#explain").hide()
 $("#startDiv").hide('slide', {direction: 'left'}, "fast");
$("#lowerTable").hide('slide', {direction:'left'}, "fast");

$(".startbutton").hide();
$(".videobutton").hide();
 $("#imageDiv").hide('slide', {direction: 'left'}, "fast");



$("#header").show('slide', {direction :'right'},"fast");
$("#mainTable").show('slide', {direction :'right'},"fast");

$(".grabcode").css("width", "175px");
$(".grabcode").show();

loadTableIDs();
}

function loadTableIDs () {
	
    $.getScript("js/hello_analytics_api_v3_auth.js");
    $.getScript("js/hello_analytics_api_v3.js");
	$.getScript("https://apis.google.com/js/client.js?onload=handleClientLoad"); 

}

});