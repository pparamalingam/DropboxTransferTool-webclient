 var linksArray = new Array();
    var jsonLinks={title: "DropboxTransferTool Data",
    description: "Bunch of dropbox links",
    items:[]
};
    	document.getElementById("db-button").onclick = function () {
        Dropbox.choose({
            linkType: "direct",
            success: function (files) {
            	for(var i in files) {
                var item = files[i];
             jsonLinks.items.push({ 
                  "link" : item.link,   });
        }
            }, cancel(){},
            multiselect:true,
            extensions:['video','images'] });
		    };
        if(jsonLinks.items.length >0){
          JSON.stringify(jsonLinks);
        }
//var url = window.location.pathname;
var url = 'https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=662147109054-0k37pvm818fjdr06emtuldcsaihlde9i.apps.googleusercontent.com&redirect_uri=https:localhost:8001=https://picasaweb.google.com/data/'
var token = url.substring(url.lastIndexOf('id=')+3);
var urlJunk = token.substring(token.lastIndexOf('.apps')).length;
token = token.slice(0,token.length-urlJunk);
console.log(token);

