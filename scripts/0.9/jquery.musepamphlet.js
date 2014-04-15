/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){a.fn.musePamphlet=function(b){b=a.extend({},b);return this.each(function(){var c=a(this),d=function(b,c,d,e){return b.find(c).filter(function(){return a(this).closest(d).get(0)==e.get(0)})},e=d(c,".ContainerGroup",".PamphletWidget",c),f=d(e,".Container",".PamphletWidget",c),g=d(c,".ThumbGroup",".PamphletWidget",c),h=d(g,".Thumb",".ThumbGroup",g),g=d(c,".PamphletPrevButton",".PamphletWidget",c),i=d(c,".PamphletNextButton",".PamphletWidget",c),j=d(c,".PamphletCloseButton",".PamphletWidget",
c),k=d(c,".PamphletLightboxPart",".PamphletWidget",c),l,o=!1,m=0,p=b.hideAllContentsFirst,c=f.outerWidth(),d=f.outerHeight(),r=b.event==="mouseover_canRollout"?"mouseover":b.event;if(b.contentLayout_runtime==="lightbox"){var q=f.offset();k.each(function(b,c){var d=a(c),e=d.offset();d.css({left:e.left-q.left,top:e.top-q.top})});var k=e.clone().css({left:0,top:0,width:"auto",height:"auto",padding:0,margin:0}),s=a("<div class='overlayWedge'></div>");k.find(".Container").parent().append(s);k.find(".Container").remove();
k.css({visibility:"hidden"}).appendTo("body");var t=k.outerWidth(),v=k.outerHeight();k.detach().css({visibility:""});e.css({padding:0,left:0,top:0,width:c,height:d,borderWidth:0,background:"none"});f.css({left:0,top:0,position:"absolute"});var u=-c/2,z=-d/2;l=a("<div class='LightboxContent'></div>").css({position:"absolute"}).append(e).append(i.addClass("popup_element")).append(g.addClass("popup_element")).append(j.addClass("popup_element")).museOverlay({autoOpen:!1,offsetLeft:u,offsetTop:z,overlayExtraWidth:t,
overlayExtraHeight:v,$overlaySlice:k,$overlayWedge:s})}var n=a.noop,w=a.noop,x=function(a){n(m===f.length-1?0:m+1,a)};if(b.transitionStyle==="horizontal"||b.transitionStyle==="vertical"){var A=b.transitionStyle==="horizontal"?c:0,B=b.transitionStyle==="vertical"?d:0,C=a("<div></div>").css({width:1,height:1,overflow:"visible",position:"absolute",left:0,top:0}).appendTo(e).append(f),D=b.hideAllContentsFirst&&b.transitionStyle==="horizontal"?c:0,E=b.hideAllContentsFirst&&b.transitionStyle==="vertical"?
d:0;e.css({width:c,height:d,overflow:"hidden"});f.each(function(b,c){a(c).css({left:D+b*A,top:E+b*B})});n=function(c,d){Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);var d=a.extend({transitionDuration:b.transitionDuration,continuation:a.noop},d),e=f.eq(c).position();C.animate({left:-e.left,top:-e.top},{queue:!1,duration:d.transitionDuration,complete:d.continuation});h.removeClass(function(a){return a==m?"PamphletThumbSelected":""});h.addClass(function(a){return a==c?"PamphletThumbSelected":""});
m=c};w=function(){}}else e.css({width:0,height:0}),f.each(function(){a(this).data("originalOpacity",a(this).css("opacity"))}),f.slice(b.hideAllContentsFirst===!0?0:1).hide(),n=function(c,d){Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);d=a.extend({transitionDuration:b.transitionDuration,continuation:a.noop},d);f.eq(m).stop(!0).fadeOut(d.transitionDuration);var e=f.eq(c).data("originalOpacity"),g=f.eq(c).css("opacity"),g=g==="1"?"0":g;f.eq(c).stop(!0).show().css({opacity:g}).animate({opacity:e},
{queue:!1,duration:d.transitionDuration,complete:function(){a(this).css({opacity:""});d.continuation()}});h.removeClass(function(a){return a==m?"PamphletThumbSelected":""});h.addClass(function(a){return a==c?"PamphletThumbSelected":""});m=c},w=function(a){Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);f.eq(a).stop(!0).fadeOut(b.transitionDuration);h.removeClass(function(b){return b==a?"PamphletThumbSelected":""})};g.click(function(a){n(m===0?f.length-1:m-1,a)});i.click(x);j.click(function(){l.museOverlay("close")});
h.bind(r,function(){o=!1;var c=a(this).attr("href");if(r==="click"&&typeof c==="string"&&c.length>0)window.location=c;else if(b.contentLayout_runtime==="lightbox")l.museOverlay("open"),n(h.index(this),{transitionDuration:0});else if(h.index(this)!==m||p)n(h.index(this)),p=!1});(b.deactivationEvent==="mouseout_trigger"||b.deactivationEvent==="mouseout_both")&&h.bind("mouseenter",function(){var c=a(this),d=function(a,b){b.outerWidth()===0&&(b=b.children(".popup_anchor").children(".popup_element").eq(0));
var c=b.offset(),c={x:c.left,y:c.top,width:b.outerWidth(),height:b.outerHeight()};return a.pageX>=c.x&&a.pageX<=c.x+c.width&&a.pageY>=c.y&&a.pageY<=c.y+c.height},e=function(g){var i=d(g,c);b.deactivationEvent==="mouseout_both"&&(i=i||d(g,f.eq(h.index(c))));i||(a(document).unbind("mousemove",e),p=!0,w(h.index(c)))};a(document).bind("mousemove",e)});if(b.autoPlay===!0){var o=!0,F=function(){o===!0&&x({continuation:y})},y=function(){setTimeout(F,b.displayInterval)};n(0,{continuation:y})}else b.hideAllContentsFirst==
!1&&n(0)})}})(jQuery);
