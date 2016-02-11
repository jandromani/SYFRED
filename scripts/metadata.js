define(function(){
    return {
        pageGroups: [{"id":"0e986ff0-7ec0-b73c-8421-e2c5fdcd3d2a","name":"Default group","pages":[{"id":"c5aec4cd-71fb-ec77-102d-db73432e42d7","name":"Page 1"},{"id":"f3f85697-609a-0c77-6120-145474c8705f","name":"Page 2"},{"id":"904c5c71-2846-e214-2526-1f095d5333c1","name":"Page 3"},{"id":"14206e4f-aba6-3503-19cd-45b377989105","name":"Page 4"},{"id":"9d847de5-2278-b954-bd7e-99363f0ac207","name":"Page 5"},{"id":"84fc854e-6e41-4af1-2d51-7545ed24b97f","name":"Page 6"},{"id":"0ab2373e-025a-05a4-94de-74b5ac3ce0a9","name":"Page 7"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=HS5GS&projectName=shareyourfreedom",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
