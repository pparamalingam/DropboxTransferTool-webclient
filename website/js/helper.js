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
//request.setRequestHeader("Access-Control-Allow-Origin", "*");
//request.setRequestHeader("Content-type", "application/json;charset=UTF-8");

document.getElementById("db-button").onclick = function () {
Dropbox.choose({
    linkType: "direct",
    success: function (files) {
    	for(var i in files) {
        var item = files[i];
     jsonLinks.items.push({ 
          "link" : item.link,   });
    }
    console.log(JSON.stringify(jsonLinks));
    request.send(JSON.stringify(jsonLinks));
    $('#db-button').prop('disabled', true);
    }, cancel(){},
    multiselect:true,
    extensions:['video','images'] });
    };
       
var url = window.location.href;
var token = url.substring(url.lastIndexOf('access_token')+13);
var urlJunk = token.substring(token.lastIndexOf('&token_type')).length;
token = token.slice(0,token.length-urlJunk);
console.log(token);

