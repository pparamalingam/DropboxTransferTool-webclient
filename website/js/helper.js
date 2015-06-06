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
