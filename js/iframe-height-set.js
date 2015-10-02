/* 
The MIT License (MIT)
Copyright (c) 2014 lngost
See http://opensource.org/licenses/MIT

Author @lngost
 */

function iframeLoad() {
    /* adjusting iframe height */
    var subFrame = document.getElementById('frame-centre-main');
    //var subBody = subFrame.contentWindow.document.body;
    var subHtml = subFrame.contentWindow.document.documentElement;
    //var frameHeight = Math.max(subBody.clientHeight, subBody.scrollHeight, subBody.offsetHeight, subHtml.clientHeight, subHtml.scrollHeight, subHtml.offsetHeight);
    var frameHeight = subHtml.offsetHeight;
    subFrame.style.height = frameHeight + 'px';

}