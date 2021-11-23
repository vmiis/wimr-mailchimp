(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"campaign-list"]                ={url:H+"/business/campaign-list/page.html",form_module:'jsonv',prefix:p};
    m[p+"search-audience"]              ={url:H+"/business/search-audience/page.html",form_module:'jsonv',prefix:p};
})();
