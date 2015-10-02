/* 
The MIT License (MIT)
Copyright (c) 2014 lngost
See http://opensource.org/licenses/MIT

Author @lngost
 */


$(document).ready(function() {

    /* carousel function */
    //carouselDefault();
    //carouselAction();
    /* end of carousel function */

    /* article button - technology */
    $('#article-tech').click(function() {
        $('#container-centre-main').html('<div class="row"><div class="col-xs-12 col-sm-12 col-md-12"><iframe id="frame-centre-main" frameBorder="0" src="pages/articles.html" onload="iframeLoad();"></iframe></div></div>');
        var stor = $.sessionStorage;
        stor.set('articleTabFlag','0');
    });
    
    /* article button - others */
    $('#article-others').click(function() {
        $('#container-centre-main').html('<div class="row"><div class="col-xs-12 col-sm-12 col-md-12"><iframe id="frame-centre-main" frameBorder="0" src="pages/articles.html" onload="iframeLoad();"></iframe></div></div>');
        var stor = $.sessionStorage;
        stor.set('articleTabFlag','1');
    });
    
    /* demo button - game */
    $('#demo-game').click(function() {
        $('#container-centre-main').html('<div class="row"><div class="col-xs-12 col-sm-12 col-md-12"><iframe id="frame-centre-main" frameBorder="0" src="projects/" onload="iframeLoad();"></iframe></div></div>');
    });
    
    /* leave message button */
    $('#leave-message').click(function() {
        $('#index-right-col').html('<div class="row"><div class="col-xs-12 col-sm-12"><iframe id="theInnerFrame" frameBorder="0" src="pages/leaveMessage.html"></iframe></div></div>');
    });
    

});
