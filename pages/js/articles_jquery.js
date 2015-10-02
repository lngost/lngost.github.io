/* 
The MIT License (MIT)
Copyright (c) 2014 lngost
See http://opensource.org/licenses/MIT

Author @lngost
 */


$(document).ready(function() {
    
    /* page onload */
    var storage = $.sessionStorage;
    if(storage.isEmpty('articleTabFlag')) {
        storage.set('articleTabFlag','0');
    }
    if(storage.get('articleTabFlag') === 0) {
        showTech();
    } else if(storage.get('articleTabFlag') === 1) {
        showOthers();
    }
    /* end of page onload */
    
    /* nav tab click */
    $('.navtab-li-tech').click(function(){
        showTech();
        storage.set('articleTabFlag','0');
        window.parent.iframeLoad();
    });
    
    $('.navtab-li-others').click(function(){
        showOthers();
        storage.set('articleTabFlag','1');
        window.parent.iframeLoad();
    });
    /* end of nav tab click */
    
});

function showTech() {
    $('.bread-li-tech').show();
    $('.navtab-li-tech').addClass('active');
    $('.bread-li-others').hide();
    $('.navtab-li-others').removeClass('active');
    
    $('.container-jumbotron-tech').show();
    $('.container-jumbotron-others').hide();
}

function showOthers() {
    $('.bread-li-tech').hide();
    $('.navtab-li-tech').removeClass('active');
    $('.bread-li-others').show();
    $('.navtab-li-others').addClass('active');
    
    $('.container-jumbotron-tech').hide();
    $('.container-jumbotron-others').show();
}

