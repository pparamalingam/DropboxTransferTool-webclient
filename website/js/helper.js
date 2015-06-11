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
request.open('POST','fillin',true);
//request.setRequestHeader("Access-Control-Allow-Origin", "*");
//request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
function dropboxSucess(){
    $('#db-button').prop('disabled', true);
    $('#db-button').css('background-color','#00C853');
    $('#db-success-alert').fadeIn();
}
//  $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);    

var image = new Image();
function getThumbnails(){
    
    image.src=thumbnails[0];
    $(image).load(function(){
        $('#imageRow').append($(this));
        $('#imageContainer').fadeIn(600);
    })
}
var thumbnails=[];
document.getElementById("db-button").onclick = function () {
Dropbox.choose({
    linkType: "direct",
    success: function (files) {
    	for(var i in files) {
        var item = files[i];
     jsonLinks.items.push({ 
          "link" : item.link,   });
    thumbnails[i] = item.thumbnailLink;
    }
    console.log(JSON.stringify(jsonLinks));
    request.send(JSON.stringify(jsonLinks));
    dropboxSucess();
    getThumbnails();
    }, cancel(){},
    multiselect:true,
    extensions:['video','images'] });
    };
       
var url = window.location.href;
var token = url.substring(url.lastIndexOf('access_token')+13);
var urlJunk = token.substring(token.lastIndexOf('&token_type')).length;
token = token.slice(0,token.length-urlJunk);
console.log(token);

