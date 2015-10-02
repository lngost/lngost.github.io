/* 
The MIT License (MIT)
Copyright (c) 2014 lngost
See http://opensource.org/licenses/MIT

Author @lngost
 */

$(document).ready(function() {
    
    /* http to https redirect - for GitHub Pages only */
    /*
     * Caution: This part of redirect javascript code is 
     *          only used for GitHub Pages. It is NOT recommended
     *          for a client-server web application as an option to
     *          redirect their pages to https, because hackers
     *          may replace the client-side script to continue
     *          the attack.
     */
    /*if(window.location.protocol !== "https:") {
        window.location.protocol = "https:";
    }
    /* end of redirect */
    
    /* using html5 local storage for language set and choice */
    var storage = $.localStorage;
    if(storage.isEmpty('languageControlFlag')) {
        storage.set('languageControlFlag','2');
    }
      
    if( storage.get('languageControlFlag') === 1) {
        $('.language_en').show();
        $('.language_cn').hide();
        $('#enButton span').addClass('glyphicon glyphicon-ok');
        $('#cnButton span').removeClass('glyphicon glyphicon-ok');
    }
    else if( storage.get('languageControlFlag') === 2){
        $('.language_cn').show();
        $('.language_en').hide();
        $('#cnButton span').addClass('glyphicon glyphicon-ok');
        $('#enButton span').removeClass('glyphicon glyphicon-ok');
    }
    /* end of language set and choice */
    
    
    /* language option button */
    $('#enButton').click(function() {
       $('#enButton span').addClass('glyphicon glyphicon-ok');
       $('#cnButton span').removeClass('glyphicon glyphicon-ok');
       $('.language_cn').hide();
       $('.language_en').addClass('animated fadeIn').show();
       $('.language_en').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function() {
           $('.language_en').removeClass('animated fadeIn');
       });
       storage.set('languageControlFlag','1');
       window.top.iframeLoad();
    });
    
    $('#cnButton').click(function() {
       $('#cnButton span').addClass('glyphicon glyphicon-ok');
       $('#enButton span').removeClass('glyphicon glyphicon-ok');
       $('.language_en').hide();
       $('.language_cn').addClass('animated fadeIn').show();
       $('.language_cn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function() {
           $('.language_cn').removeClass('animated fadeIn');
       });
       storage.set('languageControlFlag','2');
       window.top.iframeLoad();
    });
    /* end of language option button */
    
});


