if("undefined"==typeof unityObject)var unityObject=function(){function C(a,b,c){if("installed"==a){if(null==w||"installed"==w)return}else if(null!=w)return;w=a;P.send(a,b,c)}function I(a,b,c,d){w=a;P.send(a,b,c,d)}function $(a){a=new RegExp(escape(a)+"=([^;]+)");return a.test(g.cookie+";")?(a.exec(g.cookie+";"),RegExp.$1):!1}function Q(a){z?a():J[J.length]=a}function x(){if(!z){try{var a=g.getElementsByTagName("body")[0],b=a.appendChild(g.createElement("span"));a.removeChild(b)}catch(c){return}z=
!0;for(a=0;a<J.length;++a)J[a]()}}function R(a){if("undefined"!=typeof p.addEventListener)p.addEventListener("load",a,!1);else if("undefined"!=typeof g.addEventListener)g.addEventListener("load",a,!1);else if("undefined"!=typeof p.attachEvent)aa(p,"onload",a);else if("function"==typeof window.onload){var b=window.onload;p.onload=function(){b();a()}}else p.onload=a}function aa(a,b,c){a.attachEvent(b,c);K[K.length]={target:a,type:b,event:c}}function ba(a){var b=0;if(a){var c=a.toLowerCase().match(/^(\d+)(?:\.(\d+)(?:\.(\d+)([dabfr])?(\d+)?)?)?$/);
if(c&&c[1]){a=c[1];var d=c[2]?c[2]:0,e=c[3]?c[3]:0,l=c[4]?c[4]:"r",c=c[5]?c[5]:0,b=b|a/10%10<<28|a%10<<24,b=b|d%10<<20,b=b|e%10<<16,b=b|{d:8192,a:16384,b:24576,f:32768,r:32768}[l],b=b|c/100%10<<8,b=b|c/10%10<<4,b=b|c%10}}return b}function S(a,b){var c=g.getElementsByTagName("body")[0],d=g.createElement("object");if(c&&d){d.setAttribute("type","application/vnd.unity");d.style.visibility="hidden";c.appendChild(d);var e=0;(function(){if("undefined"==typeof d.GetPluginVersion)10>e++?setTimeout(arguments.callee,
10):(c.removeChild(d),a(null));else{var l={};if(b)for(var h=0;h<b.length;++h)l[b[h]]=d.GetUnityVersion(b[h]);l.plugin=d.GetPluginVersion();c.removeChild(d);a(l)}})()}else a(null)}function T(a,b){var c="missing",d;q.plugins.refresh();if("undefined"!=typeof q.plugins&&q.plugins["Unity Player"]&&"undefined"!=typeof q.mimeTypes&&q.mimeTypes["application/vnd.unity"]&&q.mimeTypes["application/vnd.unity"].enabledPlugin){c="installed";if(f.sf&&/Mac OS X 10_6/.test(q.appVersion)){S(function(b){b&&b.plugin||
(c="broken",d="OSX10.6-SFx64");C(c,D,d);a(c,b)},b);return}if(f.mac&&f.ch){S(function(b){b&&ba(b.plugin)<=ba("2.6.1f3")&&(c="broken",d="OSX-CH-U<=2.6.1f3");C(c,D,d);a(c,b)},b);return}if(b){S(function(b){C(c,D,d);a(c,b)},b);return}}else if("undefined"!=typeof p.ActiveXObject)try{var e=new ActiveXObject("UnityWebPlayer.UnityWebPlayer.1"),l=e.GetPluginVersion();if(b){for(var h={},k=0;k<b.length;++k)h[b[k]]=e.GetUnityVersion(b[k]);h.plugin=l}c="installed";if("2.5.0f5"==l){var n=/Windows NT \d+\.\d+/.exec(q.userAgent);
n&&0<n.length&&6<=parseFloat(n[0].split(" ")[2])&&(c="broken",d="WIN-U2.5.0f5")}}catch(g){f.win&&f.ie&&f.x64&&(c="unsupported",d="WIN-IEx64")}C(c,D,d);a(c,h)}function s(a){/^[-+]?[0-9]+$/.test(a)&&(a+="px");return a}function U(a,b,c,d){var e=g.getElementById(a);if(e){if(f.win&&f.ie){var l="",h;for(h in b)b[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?l+=' class="'+b[h]+'"':"classid"!=h.toLowerCase()&&(l+=" "+h+'="'+b[h]+'"'));var k="";for(h in c)c[h]!=Object.prototype[h]&&"classid"!=h.toLowerCase()&&
(k+='<param name="'+h+'" value="'+c[h]+'" />');e.outerHTML='<div id="'+a+'" style="width: '+s(b.width)+"; height: "+s(b.height)+'; visibility: hidden;"><object classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" style="display: block; width: 100%; height: 100%;"'+l+">"+k+"</object></div>";L[L.length]=a}else{l=g.createElement("div");l.setAttribute("id",a);l.style.width=s(b.width);l.style.height=s(b.height);l.style.visibility="hidden";k=g.createElement("embed");k.setAttribute("type","application/vnd.unity");
k.style.display="block";k.style.width="100%";k.style.height="100%";for(h in b)b[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?k.setAttribute("class",b[h]):"classid"!=h.toLowerCase()&&k.setAttribute(h,b[h]));for(h in c)c[h]!=Object.prototype[h]&&"classid"!=h.toLowerCase()&&k.setAttribute(h,c[h]);l.appendChild(k);e.parentNode.replaceChild(l,e)}ca(a,function(b){b?(b.parentNode.style.visibility="visible",b.focus()):V(a);if(d){var c;b||(c="UnityElementNotFound");d({success:Boolean(b),id:a,ref:b,
type:D,error:c})}})}else d&&d({success:!1,id:a,type:D,error:"UnityElementNotFound"})}function G(a,b){for(var c in a)if(c.toLowerCase()==b){c=a[c];if(/^((?:[\da-f]){2}){3,4}$/i.test(c))return c.substr(0,6);break}return null}function qa(a,b,c,d,e){var l=g.getElementById(a);if(l){var h=s(b.width);b=s(b.height);var k=G(c,"backgroundcolor"),n=G(c,"textcolor"),m=G(c,"bordercolor");f.win&&f.ie&&(c="font-family: Verdana; font-size: 12px; text-align: center;",k&&(c+=" background-color: #"+k+";"),n&&(c+=" color: #"+
n+";"),m&&(c+=" border: 1px solid #"+m+";"),k="",F&&(c+=" width: "+h+"; height: "+b+";",k="width: "+h+"; line-height: "+b+";"),l.outerHTML='<div id="'+a+'" style="'+c+'"><span style="'+k+'">'+e+"</span></div>")}d&&d({success:!1,id:a,error:e})}function da(a,b,c,d,e,l,h){preInstallCallback=ea[a];var k=g.getElementById(a);if(k){var n="standard";if(fa&&f.java&&!ga&&!$("_unity_triedjava")){W[a]={attributes:b,params:c,callback:d,broken:e};var m="javascript:unityObject.doJavaInstall('"+a+"');",n="java"}else ha&&
f.co?(m=u+"3.0/co/UnityWebPlayer.application?installer="+encodeURIComponent(u+M()),n="clickonce"):f.win?m=u+M():"MacIntel"==q.platform?(m=u+(N?"webplayer-i386.dmg":"webplayer-mini.dmg"),y&&(m+="?referrer="+y)):"MacPPC"==q.platform?(m=u+(N?"webplayer-ppc.dmg":"webplayer-mini.dmg"),y&&(m+="?referrer="+y)):(m='javascript:window.open("http://unity3d.com/webplayer/");',n="unsupported");I("ready",n);if(e){var p="Unity Web Player. Install now! Restart your browser after install.",w="http://webplayer.unity3d.com/installation/getunityrestart.png";
e=190;var r=75}else p="Unity Web Player. Install now!",w="http://webplayer.unity3d.com/installation/getunity.png",e=193,r=63;var v=b.width||e;b=b.height||r;var z=s(-parseInt(r/2)),t="unityObject.notifyBeginInstall('"+a+"','"+n+"');unityObject.setInstallStatus('start','"+n+"',null",t="clickonce"!=n?t+(",'"+m.replace(/'/g,"\\'")+"');"):t+(");doc.location='"+m+"';"),t=t+"return false;",x=G(c,"backgroundcolor"),A=G(c,"textcolor");c=G(c,"bordercolor");var C=a+"_img";if(f.win&&f.ie){var E='<img id="'+C+
'" alt="'+p+'" src="'+w+'" width="'+e+'" height="'+r+'" style="border-width: 0px;" />',m='<a href="'+m+'" title="'+p+'" onclick="'+t+'"';F&&(m+=' style="display: block; height: '+s(r)+"; position: relative; top: "+z+';"');m+=">"+E+"</a>";r="";x&&(r+=" background-color: #"+x+";");A&&(r+=" color: #"+A+";");c&&(r+=" border: 1px solid #"+c+";");F?(e='<div style="width: '+s(e)+'; margin: auto; position: relative; top: 50%;">'+m+"</div>",k.outerHTML='<div id="'+a+'" style="width: '+s(v)+"; height: "+s(b)+
"; text-align: center;"+r+'">'+e+"</div>"):k.outerHTML='<div id="'+a+'" style="'+r+'">'+m+"</div>"}else{var B=g.createElement("div");B.setAttribute("id",a);x&&(B.style.backgroundColor="#"+x);A&&(B.style.color="#"+A);c&&(B.style.border="1px solid #"+c);F&&(B.style.width=s(v),B.style.height=s(b),E=g.createElement("div"),E.style.width=s(e),E.style.margin="auto",E.style.position="relative",E.style.top="50%");v=g.createElement("a");v.setAttribute("href",m);v.setAttribute("title",p);v.setAttribute("onclick",
t);F&&(v.style.display="block",v.style.height=s(r),v.style.position="relative",v.style.top=z);m=g.createElement("img");m.setAttribute("id",C);m.setAttribute("alt",p);m.setAttribute("src",w);m.setAttribute("width",e);m.setAttribute("height",r);m.style.borderWidth="0px";v.appendChild(m);F?(E.appendChild(v),B.appendChild(E)):B.appendChild(v);k.parentNode.replaceChild(B,k)}O(a,!0)}d&&d({success:!1,id:a,type:l,error:h});preInstallCallback&&preInstallCallback({id:a,type:n});D=n;ia?"java"==n?(I("start",
n),ja(a)):"clickonce"!=n||ka||(ka=!0,R(function(){I("start",n);g.location=u+"3.0/co/UnityWebPlayer.application?installer="+encodeURIComponent(u+M())})):"java"==n&&la&&(H.push(C),ra(a+"_java"))}function M(){var a=N?"UnityWebPlayerFull.exe":"UnityWebPlayer.exe";y&&(a+="?referrer="+y);return a}function ma(a,b,c){if(f.win&&f.ie){var d="",e;for(e in a)d+=" "+e+'="'+a[e]+'"';a="";for(e in b)a+='<param name="'+e+'" value="'+b[e]+'" />';c.outerHTML="<object"+d+">"+a+"</object>"}else{d=g.createElement("object");
for(e in a)d.setAttribute(e,a[e]);for(e in b)a=g.createElement("param"),a.name=e,a.value=b[e],d.appendChild(a);c.parentNode.replaceChild(d,c)}}function sa(a){return"undefined"==typeof a||!a.complete||"undefined"!=typeof a.naturalWidth&&0==a.naturalWidth?!1:!0}function ra(a){var b=!1;for(i=0;i<H.length;i++)H[i]&&(sa(g.images[H[i]])?H[i]=null:b=!0);b?setTimeout(arguments.callee,100):setTimeout(function(){var b=g.getElementById(a);b||(b=g.createElement("div"),g.body.insertBefore(b,g.body.lastChild.nextSibling));
var d=u+"3.0/jws/";ma({id:a,type:"application/x-java-applet",code:"JVMPreloader",width:1,height:1,name:"JVM Preloader"},{context:a,codebase:d,classloader_cache:!1,scriptable:!0,mayscript:!0,codebase:d},b);O(a,!0)},100)}function ja(a){var b=ga=!0;document.cookie=escape("_unity_triedjava")+"="+escape(b)+"; path=/";var b=g.getElementById(a),c=W[a],d={id:a,type:"application/x-java-applet",archive:u+"3.0/jws/UnityWebPlayer.jar",code:"UnityWebPlayer",width:c.attributes.width||600,height:c.attributes.height||
450,name:"Unity Web Player"};f.win&&f.ff&&(d.style="visibility: hidden;");var e=u+"3.0/jws/UnityWebPlayer.jnlp",l=u,h;f.win?h=M():(h="UnityPlayer.plugin.zip",y&&(h+="?referrer="+y));var e={context:a,jnlp_href:e,classloader_cache:!1,installer:l+h,image:"http://webplayer.unity3d.com/installation/unitylogo.png",centerimage:!0,boxborder:!1,scriptable:!0,mayscript:!0},k;for(k in c.params)"src"!=k&&c.params[k]!=Object.prototype[k]&&(e[k]=c.params[k],"logoimage"==k.toLowerCase()?e.image=c.params[k]:"backgroundcolor"==
k.toLowerCase()?e.boxbgcolor="#"+c.params[k]:"bordercolor"==k.toLowerCase()?e.boxborder=!0:"textcolor"==k.toLowerCase()&&(e.boxfgcolor="#"+c.params[k]));ma(d,e,b);O(a,!0)}function ta(a){setTimeout(function(){var b=g.getElementById(a);b&&b.parentNode.removeChild(b)},0)}function V(a){var b=g.getElementById(a);if(b){if(f.win&&f.ie){var c=b.firstChild;if(c&&"OBJECT"==c.nodeName){b.style.display="none";(function(){if(4==c.readyState){for(var a in c)"function"==typeof c[a]&&(c[a]=null);b.parentNode.removeChild(b)}else setTimeout(arguments.callee,
10)})();return}}b.parentNode.removeChild(b)}}function ca(a,b){var c=g.getElementById(a);if(!c)return b&&b(null),null;var d;f.win&&f.ie?(c=c.getElementsByTagName("object")[0])&&"OBJECT"==c.nodeName&&(d=c):(c=c.getElementsByTagName("embed")[0])&&"EMBED"==c.nodeName&&(d=c);return function(){if(d&&"undefined"==typeof d.GetPluginVersion)return b&&setTimeout(arguments.callee,10),null;b&&b(d);return d}()}function O(a,b){if(na){var c=b?"visible":"hidden";if(z&&g.getElementById(a))g.getElementById(a).style.visibility=
c;else{var d="#"+a,c="visibility: "+c+";";if(!f.mac||!f.ie){var e=g.getElementsByTagName("head")[0];if(e){if(!t||"screen"!=oa){var l=g.createElement("style");l.setAttribute("type","text/css");l.setAttribute("media","screen");t=e.appendChild(l);f.win&&f.ie&&"undefined"!=typeof g.styleSheets&&0<g.styleSheets.length&&(t=g.styleSheets[g.styleSheets.length-1]);oa="screen"}f.win&&f.ie&&"object"==typeof t.addRule?t.addRule(d,c):t&&"undefined"!=typeof g.createTextNode&&t.appendChild(g.createTextNode(d+" { "+
c+" }"))}}}}}function X(){for(var a in K){var b=K[a];b.target.detachEvent(b.type,b.event)}for(a in L)V(L[a]);for(a in f)f[a]=null;f=null;for(a in unityObject)unityObject[a]=null;unityObject=null}function ua(a,b,c){var d={},e=-1;if(a&&"object"==typeof a)for(var l in a)d[l]=a[l],"tabindex"==l.toLowerCase()&&(e=d[l]);d.width=b;d.height=c;-1==e&&(d.tabIndex=0);return d}function va(a,b){var c="unityObject.firstFrameCallback();",d={};if(a&&"object"==typeof a)for(var e in a)d[e]=a[e],"firstframecallback"==
e.toLowerCase()&&(d[e]=c+d[e],c=null);c&&(d.firstFrameCallback=c);d.src=b;return d}var p=window,g=document,q=navigator,z=!1,J=[],L=[],K=[],t=null,oa=null,na=!0,F=!0,u="http://webplayer.unity3d.com/download_webplayer-3.x/",N=!1,ia=!1,fa=!0,la=!1,ga=$("_unity_triedjava"),W=[],ha=!0,ka=!1,Y=!1,Z=!0,A=!1,D=null,pa=[],ea=[],H=[],y=null,w=null,f=function(){function a(a,b){for(var c=0;c<Math.max(a.length,b.length);++c){var d=c<a.length&&a[c]?new Number(a[c]):0,e=c<b.length&&b[c]?new Number(b[c]):0;if(d<
e)return-1;if(d>e)return 1}return 0}for(var b=q.userAgent,c=q.platform,d={w3:"undefined"!=typeof g.getElementById&&"undefined"!=typeof g.getElementsByTagName&&"undefined"!=typeof g.createElement,win:c?/win/i.test(c):/win/i.test(b),mac:c?/mac/i.test(c):/mac/i.test(b),ie:/msie/i.test(b)?parseFloat(b.replace(/^.*msie ([0-9]+(\.[0-9]+)?).*$/i,"$1")):!1,ff:/firefox/i.test(b),ch:/chrome/i.test(b),sf:/safari/i.test(b),wk:/webkit/i.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/i,"$1")):!1,x64:/win64/i.test(b)&&
/x64/i.test(b),moz:/mozilla/i.test(b)?parseFloat(b.replace(/^.*mozilla\/([0-9]+(\.[0-9]+)?).*$/i,"$1")):0},c=g.getElementsByTagName("script"),e=0;e<c.length;++e){var l=c[e].src.match(/^(.*)3\.0\/uo\/UnityObject\.js$/i);if(l){u=l[1];break}}d.java=function(){if(q.javaEnabled()){var b=d.win&&d.ff;if(b){if("undefined"!=typeof q.mimeTypes)for(var c=b?[1,6,0,12]:[1,4,2,0],b=0;b<q.mimeTypes.length;++b)if(q.mimeTypes[b].enabledPlugin){var e=q.mimeTypes[b].type.match(/^application\/x-java-applet;(?:jpi-)?version=(\d+)(?:\.(\d+)(?:\.(\d+)(?:_(\d+))?)?)?$/);
if(null!=e&&0>=a(c,e.slice(1)))return!0}}else if(d.win&&d.ie&&"undefined"!=typeof ActiveXObject){b=function(a){try{return null!=new ActiveXObject("JavaWebStart.isInstalled."+a+".0")}catch(b){return!1}};if(b("1.7.0"))return!0;if(8<=d.ie){if(b("1.6.0"))for(b=12;50>=b;++b){try{c=null!=new ActiveXObject("JavaPlugin.160_"+b)}catch(l){c=!1}if(c&&!(9==d.ie&&5==d.moz&&24>b))return!0}}else return b("1.6.0")||b("1.5.0")||b("1.4.2")}}return!1}();d.co=function(){if(d.win&&d.ie){var c=b.match(/\.NET CLR [0-9.]+/g);
if(null!=c)for(var e=[3,5,0],l=0;l<c.length;++l)if(0>=a(e,c[l].match(/([0-9]+)\.([0-9]+)\.([0-9]+)/i).slice(1)))return!0}return!1}();return d}(),P=function(){function a(a,b,h,k){Y?(a="http://unityanalyticscapture.appspot.com/event?u="+encodeURIComponent(c)+"&s="+encodeURIComponent(d)+"&e="+encodeURIComponent(a),y&&(a+="?r="+y),b&&(a+="&t="+encodeURIComponent(b)),h&&(a+="&d="+encodeURIComponent(h)),b=new Image,k&&(b.onload=b.onerror=k),b.src=a):k&&k()}function b(a,b,c,d){if(Z){var f=window._ugaq=window._ugaq||
[];A||f.push(["unity._setAccount","UA-16068464-16"]);a="/webplayer/install/"+a;var m="?";b&&(a+=m+"t="+encodeURIComponent(b),m="&");c&&(a+=m+"d="+encodeURIComponent(c),m="&");d&&f.push(function(){unityObject.googleAnalyticsCallback=d});f.push(["unity._trackPageview",a]);if(!A){b=u+"3.0/uo/ga.js";c=g.getElementsByTagName("script");for(f=0;f<c.length;++f)if(c[f].src&&c[f].src.toLowerCase()==b.toLowerCase()){A=!0;break}A||(A=!0,c=g.createElement("script"),c.type="text/javascript",c.async=!0,c.src=b,
b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(c,b))}}else d&&d()}var c=function(){var a=new Date;return Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDay(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()).toString(16)+Math.floor(2147483647*Math.random()).toString(16)}(),d=0;return{send:function(c,f,h,g){function n(){0==--m&&(location.href=g)}++d;var m=2;a(c,f,h,g?n:null);b(c,f,h,g?n:null)}}}();(function(){f.w3&&(("undefined"!=typeof g.readyState&&
"complete"==g.readyState||"undefined"==typeof g.readyState&&(g.getElementsByTagName("body")[0]||g.body))&&x(),z||("undefined"!=typeof g.addEventListener&&g.addEventListener("DOMContentLoaded",x,!1),f.win&&f.ie&&(g.attachEvent("onreadystatechange",function(){"complete"==g.readyState&&(g.detachEvent("onreadystatechange",arguments.callee),x())}),p==top&&function(){if(!z){try{g.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,10);return}x()}}()),f.wk&&function(){z||(/loaded|complete/.test(g.readyState)?
x():setTimeout(arguments.callee,10))}(),R(x)))})();(function(){if(f.win&&f.ie)if("undefined"!=typeof p.attachEvent)aa(p,"onunload",X);else if("function"==typeof p.onunload){var a=p.onunload;p.onunload=function(){a();X()}}else p.onunload=X})();return{embedUnity:function(a,b,c,d,e,g,h){f.w3&&!(f.wk&&312>f.wk)&&a&&b&&c&&d?Q(function(){var f=ua(g,c,d),n=va(e,b);T(function(b){"installed"==b?U(a,f,n,h):"unsupported"==b?qa(a,f,n,h,"Unsupported browser."):(da(a,f,n,h,"broken"==b,null,"NotInstalled"),function(){var b=
arguments.callee;T(function(c){"installed"==c?(O(a,!1),U(a,f,n,h)):setTimeout(b,500)})}())})}):h&&h({success:!1,id:a})},addPreInstallCallback:function(a,b){ea[a]=b},addBeginInstallCallback:function(a,b){pa[a]=b},getObjectById:function(a,b){if(f.w3&&a)return ca(a,b);b&&b(null);return null},setAutoHideShow:function(a){na=a},setFullSizeMissing:function(a){F=a},enableFullInstall:function(a){N=a},enableAutoInstall:function(a){ia=a},enableJavaInstall:function(a){fa=a},enableJavaPreloading:function(a,b){la=
a;"undefined"!=typeof b&&(H=b)},enableClickOnceInstall:function(a){ha=a},enableAnalytics:function(a){Y(a);Z(a)},enableUnityAnalytics:function(a){Y=a},enableGoogleAnalytics:function(a){Z=a},setBaseDownloadUrl:function(a){u=a},setReferrer:function(a){y=a?encodeURIComponent(a):a},addLoadEvent:R,addDomLoadEvent:Q,ua:f,detectUnity:function(a,b){!f.w3||f.wk&&312>f.wk||!a?a&&a("missing"):Q(function(){T(a,b)})},createUnity:function(a,b,c,d){f.w3&&!(f.wk&&312>f.wk)&&a&&b&&c&&d?U(a,c,b,d):d&&d({success:!1,
id:a})},removeUnity:function(a){f.w3&&V(a)},notifyBeginInstall:function(a,b){(callback=pa[a])&&callback({id:a,type:b})},setInstallStatus:function(a,b,c,d){I(a,b,c,d)},doJavaInstall:function(a){ja(a)},jvmPreloaded:function(a){ta(a)},appletStarted:function(a){},javaInstallDone:function(a,b,c){setTimeout('unityObject.javaInstallDoneDirect("'+a+'", '+b+', "'+c+'");',0)},javaInstallDoneDirect:function(a,b,c){b||(b=W[a],I("error","java",c),da(a,b.attributes,b.params,b.callback,b.broken,"java",c))},firstFrameCallback:function(){var a=
D;null!=w&&(w="first",P.send("first",a,void 0))}}}();
