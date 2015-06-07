 var linksArray = new Array();
    var jsonLinks={title: "DropboxTransferTool Data",
    description: "Bunch of dropbox links",
    items:[]
};
var request = new XMLHttpRequest();
request.onload = function(){
    var status = request.status;
    var data   = request.responseText;
}
request.open('POST','http://requestb.in/ru17yvru',true);
request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
request.setRequestHeader("Access-Control-Allow-Origin", "http://dbtestapp.tk");
document.getElementById("db-button").onclick = function () {
Dropbox.choose({
    linkType: "direct",
    success: function (files) {
    	for(var i in files) {
        var item = files[i];
     jsonLinks.items.push({ 
          "link" : item.link,   });
    }
   JSON.stringify(jsonLinks);
    console.log(jsonLinks);
    request.send(jsonLinks);
    }, cancel(){},
    multiselect:true,
    extensions:['video','images'] });
    };
       
var url = window.location.href;
//var url ='http://dbtestapp.tk/#access_token=ya29.igHX4GPRTO6W8ilvcg9jcl1QK-QMQvuJf4knZJHok51JqK5ttAN3Sre-ao15uog2hQL38fLfqaJSqg&token_type=Bearer&expires_in=3600'
var token = url.substring(url.lastIndexOf('access_token')+13);
var urlJunk = token.substring(token.lastIndexOf('&token_type')).length;
token = token.slice(0,token.length-urlJunk);
console.log(token);

