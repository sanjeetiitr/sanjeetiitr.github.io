window.APIDocs=function(){"use strict";function e(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,n||e.apply(i,s)},u=n&&!r;clearTimeout(r),r=setTimeout(o,t),u&&e.apply(i,s)}}function t(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(e){var t=e.querySelectorAll("code");for(var n=0;n<t.length;n++)Prism.highlightElement(t[n])}function b(e){e.removeClass("expanded"),e.next(".method-list-group").css("display","none")}function w(e){e.addClass("expanded"),e.next(".method-list-group").css("display","block")}function E(e){var t=e.querySelectorAll(".method-list-item");for(var n=0;n<t.length;n++){var e=$(t[n]),r=e.attr("id");if(r){var i=$("<a />");i.attr("href","#"+r),i.addClass("header-anchor"),i.on("click",function(e){var t="#"+this.href.split("#")[1];S(t),window.history&&window.history.replaceState&&history.replaceState({},"",t),e.preventDefault()}),e.children("h3").first().prepend(i)}}}function S(e){var e=e.replace(/[^\w\-#.]/g,"");e=e.replace(/\./g,"\\.");if($(e).length==0)return;$(e).parents(".method-list-child").each(function(){w($(this).children(".method-list-title"))});var t=$(e).children(".method-list").children(".method-list-title");t.length>0&&w(t);var n=$(e).offset().top-i.offset().top+i.scrollTop();i.scrollTop(n)}function T(e){e=e.split("-")[0],x=document.querySelector(".method#"+e);var n=c[e];if(n){var r=n.parentId||e;u.val(r);var i=n.$link;if(f!==i){f.removeClass("selected"),f=i.addClass("selected");var s=null;n.isExpandable?l!==i&&(s=i):n.$parent?l!==n.$parent&&(s=n.$parent):s=$();if(s){var o=l.siblings(".sidebar-nav-items"),a=s.siblings(".sidebar-nav-items");l.parent().removeClass("expanded"),s.parent().addClass("expanded"),o.css({height:0}),a.css({height:a.attr("data-height")}),l=s}h&&!t(f[0])&&f[0].scrollIntoView(!1)}}}function N(e){var t=c[e];if(t){var n=t.$link;n.removeClass("disabled");if(t.isExpandable){var r=n.siblings(".sidebar-nav-items").find(".sidebar-nav-item");r.each(function(e,t){$(t).removeClass("disabled")})}}}function C(e){g--,e(),setTimeout(function(){g++},100)}function k(e){C(function(){if(!x)return e();var t=x.parentNode,n=x.getBoundingClientRect().top;e();var r=x.getBoundingClientRect().top,s=i.scrollTop();s+=r-n,i.scrollTop(s)})}function L(e){k(function(){var t=$(".method-example.cards, .method-example.bank-accounts");t.find(".method-example-switcher .method-example-switcher-position a").removeClass("selected"),t.find(".method-example-switcher .method-example-switcher-position a."+e).addClass("selected"),t.find(".method-example-specific").addClass("hide"),t.find(".method-example-specific."+e).removeClass("hide")})}function A(e){window.history&&window.history.replaceState&&history.replaceState({},document.title,e)}function O(e){C(function(){S("#"+e),T(e),A("#"+e)})}function _(){Waypoint.refreshAll()}function D(){if(m)return;m=!0;var t=e(A,50),n=function(){if(g<1)return;var e=this.element.getAttribute("id"),n="#"+e,r;location.hash&&(r=location.hash.split("-")[0]),r!=n&&(t(n),T(e))},r=document.querySelectorAll("#content section[id]");for(var s=0;s<r.length;s++)d.push(new Waypoint({continuous:!1,element:r[s],context:i[0],handler:n}))}function B(e,t){var r=p;$.ajax({type:"GET",url:"/docs/api/"+r+"/sections",dataType:"json",data:{sections:e},beforeSend:function(e){H.push(e)},complete:function(e){var t=H.indexOf(e);t>-1&&H.splice(t,1)},success:function(e){if(r!==p)return;t();var i=Object.keys(e),s=[];for(var o=0;o<i.length;o++){var u=i[o],a=document.createDocumentFragment(),f=$(e[u]);f.each(function(e,t){a.appendChild(t)}),n(a),E(a);var l=document.querySelector(".method#"+u);s.push({fragment:a,parent:l,sectionName:u})}k(function(){for(var e=0;e<s.length;e++){var t=s[e];t.parent.innerHTML="",t.parent.appendChild(t.fragment),N(t.sectionName)}_()}),P&&U&&(D(),location.hash&&S(location.hash),P=!1)}})}function j(e,t){function i(e,s){var o=p,u=e.slice(0,s);u.length>0?B(u,function(){t.progress&&(r+=s,R(r/n)),o===p&&i(e.slice(s),20)}):y=!0}t=t||{},t.progress=t.progress==null?!0:t.progress;var n=e.length+1,r=1;t.progress&&R(r/n),i(e,5)}function F(e){p=e;for(var t=0;t<H.length;t++)H[t].abort();H=[],j(I(v),{progress:!y})}function I(e){var t=location.hash.substring(1).split("-")[0],n=e.indexOf(t),r=e.slice();return r.sort(function(t,r){return Math.abs(e.indexOf(t)-n)>Math.abs(e.indexOf(r)-n)?1:-1}),r}function R(e){e=Math.round(e*100)/100,q.css({width:Math.min(1,e)*100+"%"}),e>=1?q.addClass("hidden"):q.hasClass("hidden")&&(q[0].offsetTop,q.removeClass("hidden"))}Prism.languages.json=Prism.languages.insertBefore("clike","string",{"json-key":/(?:\n\s*)("|')(\\\n|\\?.)*?("|')/g,"json-string":/("|')(\\\n|\\?.)*?\1/g}),Prism.languages.insertBefore("bash","operator",{"api-key":{pattern:/(?:-u )([a-zA-Z0-9_]+)/g,inside:{"request-flag":/(^-u)/g}},"request-param":{pattern:/(?:-d )([a-zA-Z0-9]+)/g,inside:{"request-flag":/(^-d)/g}},"request-value":{pattern:/(?:=)(.*?)(?:\n|\\)/g,inside:{operator:/(^=)|(\\$)/g}}}),Prism.languages.insertBefore("bash","number",{"request-url":{pattern:/(?:^curl )(.*?)(?:\n|\\)/g,inside:{operator:/(\\$)/g,keyword:/(^curl)/g}}});var r=$("body"),i=$("#content"),s=$("#language"),o=$(".method"),u=$(".jump-menu select"),a=$("#sidebar"),f=$(),l=$(),c={},h=a.is(":visible"),p,d=[],v=[],m=!1,g=1,y=!1;r.on("click",".method-list-child .method-list-title",function(){var e=$(this);e.attr("class").indexOf("expanded")!==-1?b(e):w(e),_()}),u.on("change",function(){var e=u.val();S("#"+e)}),a.find(".sidebar-nav-item").each(function(){var e=this.href.split("#")[1],t=$(this);c[e]={$link:t}}),a.find(".sidebar-nav-item.expandable").each(function(){var e=this.href.split("#")[1],t=$(this);c[e].isExpandable=!0;var n=t.siblings(".sidebar-nav-items");n.attr("data-height",n.height());var r=n.find(".sidebar-nav-item");r.each(function(){var n=this.href.split("#")[1];c[n].$parent=t,c[n].parentId=e})}),a.find(".sidebar-nav-items").addClass("loaded");var x=null;r.on("click",".method-example-switcher .method-example-switcher-position a",function(e){e.preventDefault();var t=$(e.currentTarget).attr("class").replace(/method-example-switcher-switch\s*/,"");t.indexOf("selected")===-1&&(L(t),$.cookie("cardType",t,{expires:1825,path:"/",domain:".stripe.com",secure:!0}))}),a.on("click",".sidebar-nav-item",function(e){var t=this.href.split("#")[1];O(t),e.preventDefault()}),r.find("#header .logo .docs").on("click",function(e){O("intro"),e.preventDefault()}),s.on("change",".language-toggle-source",function(e){var t=$(this).data("language"),n="/docs/api/"+t;A(n+window.location.hash),setTimeout(function(){F(t),$.cookie("lang",t,{expires:1825,path:"/",domain:function(){var e=window.location.hostname||"stripe.com";return e.match("stripe.com")?".stripe.com":e}()})},10)}),r.on("click","a.show-parameters",function(e){$(e.currentTarget).parent().parent().removeClass("collapsed")}),r.on("hover",".method-list-item-label-changes",function(e){var t=$(this),n=t.attr("data-changes"),r=t.offset(),i=$(".changes-tooltip");i.find("ul").replaceWith(n),$(document).width()<1030?i.css({top:r.top-i.height()/2-10,left:r.left+25}):i.css({top:r.top+25,left:r.left-i.width()/2-13}),i.show()}),r.on("mouseout",".method-list-item-label-changes",function(e){$(".changes-tooltip").hide()});var M=0;$(window).on("resize",function(){g--,clearTimeout(M),M=setTimeout(function(){location.hash&&S(location.hash),_(),h=a.is(":visible"),g++},100)});var P=!0,H=[],q=$("#loading-bar"),U=!1,z=new FontLoader(["Source Code Pro","Whitney SSm A","Whitney SSm B"],{complete:function(){U=!0,location.hash&&S(location.hash)}},3e3),W={load:function(e){e=e||{},e.lang=e.lang||"curl",e.loadedSections=e.loadedSections||[],p=e.lang,v=Array.prototype.map.call(document.querySelectorAll(".method"),function(e){return e.getAttribute("id")});for(var t=0;t<e.loadedSections.length;t++)N(e.loadedSections[t]);var n=I(v);n=n.filter(function(t){return e.loadedSections.indexOf(t)==-1}),j(n),location.hash&&T(location.hash.substring(1)),z.loadFonts()}};return W}();