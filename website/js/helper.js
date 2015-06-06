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
var url = window.location.pathname;
//var url ='http://dbtestapp.tk/#access_token=ya29.igHX4GPRTO6W8ilvcg9jcl1QK-QMQvuJf4knZJHok51JqK5ttAN3Sre-ao15uog2hQL38fLfqaJSqg&token_type=Bearer&expires_in=3600'
var token = url.substring(url.lastIndexOf('access_token')+13);
var urlJunk = token.substring(token.lastIndexOf('&token_type')).length;
token = token.slice(0,token.length-urlJunk);
console.log(token);

