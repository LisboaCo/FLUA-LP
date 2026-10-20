 
 
 (function(){'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&& f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;})();
 
 var elementos_css ={};
 var blocos_posicao ={};
 var elementos_posicao ={};
 var elementos_popup ={};
 var elementos_botoes_evento ={};
 var pagina_controle ={
 'classe_bloco':'gpc-b',
 'classe_elemento':'gpc-e',
 'classe_elemento_antigo':'gpc-elemento',
 'classe_elemento_interno':'c',
 'classe_elemento_interno_antigo':'conteudo',
 'elementos_timer':{}
};
 var largura_tela, altura_tela, timeout_resize;
 
 function GreatResize(){
 let tamanho_tela = $(window).width();
 let zoom_default = 'width=device-width, initial-scale=1';
 
 function iOS(){return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)}
 if(tamanho_tela <= 1200){
 let controle = 1200;
 if(tamanho_tela > 360 && tamanho_tela <= 800){
 $('.gpc-b').each(function(){if($(this).css('background-attachment') == 'fixed'){$(this).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content',zoom_default);}
 else{$('body').css('zoom','');}
 return;
}else if(tamanho_tela <= 360){controle = 360;}
 let proporcao = (((tamanho_tela*100)/controle)).toFixed(5), novo_tamanho;
 novo_tamanho = (tamanho_tela-(tamanho_tela*(proporcao/100)));
 if(novo_tamanho != 0){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 if(iOS()){$(bloco).css('background-attachment','initial');}
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
 if(iOS()){
 $('meta[name="viewport"]').attr('content','width='+novo_tamanho+', initial-scale=1, maximum-scale='+(proporcao/100)+', minimum-scale='+(proporcao/100));
}else{$('body').css({'zoom':proporcao+'%'});}
}else{
 if(iOS()){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 $(bloco).css('background-attachment','initial');
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
}
}
}else{
 $('.gpc-b').each(function(i,bloco){if($(bloco).css('background-attachment') == 'fixed'){$(bloco).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content',zoom_default);}
 else{$('body').css('zoom','');}
}
}
 GreatResize();
 $(function(){GreatResize();});
 window.addEventListener('resize', function(e){
 e.preventDefault();
 e.stopPropagation();
 if(timeout_resize){clearTimeout(timeout_resize);timeout_resize = null;}
 largura_tela = $(window).width();
 altura_tela = $(window).height();
 timeout_resize = setTimeout(function(){
 if($(window).width() == largura_tela && $(window).height() == altura_tela){GreatResize();}
},50);
},{passive:true});
 
 function GreatFontesAplicar(raiz, fator){
 if (!(fator > 0)) { return; }
 raiz.each(function(){
 var nos = [this].concat(Array.prototype.slice.call(this.querySelectorAll('*')));
 var medidos = [], i, n;
 for (i = 0; i < nos.length; i++){
 n = nos[i];
 if (n.nodeType !== 1 || !n.style || typeof n.style.setProperty !== 'function') continue;
 if (typeof n.namespaceURI === 'string' && n.namespaceURI.indexOf('svg') !== -1) continue;
 medidos.push([n, parseFloat(window.getComputedStyle(n).fontSize)]);
}
 for (i = 0; i < medidos.length; i++){
 if (medidos[i][1] > 0){ medidos[i][0].style.setProperty('font-size', (medidos[i][1]/fator)+'px', 'important'); }
}
});
}
 function GreatFontes(modal){
 if(modal == undefined){modal = false;}
 if((navigator.userAgent.match(/Android/i) && $(window).width() <= 800 && navigator.userAgent.match(/Instagram|FBAN|FBAV|FB_IAB|WhatsApp|BytedanceWebview|musical_ly|TikTok|Line\/|KAKAOTALK/i)) || (navigator.userAgent.match(/iPhone/i) && $(window).width() < 360)){
 
 $((modal ? '.gm ':'')+'.gpc-e').each(function(){
 
 var elemento = $(this);
 var elemento_id = elemento.attr('id');
 
 if (elementos_css.hasOwnProperty(elemento_id)){
 
 var elemento_conteudo = (elemento.hasClass('e_formulario') ? elemento.find('.gpc_botao') :elemento.children('.c'));
 
 if (Math.abs(parseFloat(elemento_conteudo.css('font-size')) - parseFloat(elementos_css[elemento_id]['fs'])) > 0.5){
 
 var fator = parseFloat(elemento_conteudo.css('font-size'))/parseFloat(elementos_css[elemento_id]['fs']);
 
 GreatFontesAplicar(elemento_conteudo, fator);
 
 if (elementos_css[elemento_id]['lh']){
 
 elemento_conteudo.css('line-height',elementos_css[elemento_id]['lh']);
}
 
 if (elemento.hasClass('e_timer')){
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 elemento_conteudo.find('.contador_titulos').css('line-height','1');
 elemento_conteudo.find('.contador_itens').children('span').css('line-height','1.2');
}
}else if (elemento.hasClass('e_formulario')){
 
 var fieldset = elemento.find('fieldset');
 if (fieldset.length){ GreatFontesAplicar(fieldset, fator); }
}
}
}
});
}
}
 $(function(){
 
 GreatFontes();
});
 
 
 $(function(){GreatLoader('iniciar');});
 
 var gle_fontes ={}, gle_css ={}, gle_scripts ={};
 
 function GreatLoader(acao){
 
 
 gle_fontes['elementos'] = $('.gle_fontes');
 gle_fontes['encontrados'] = gle_fontes['elementos'].length;
 gle_fontes['carregados'] = 0;
 
 if (gle_fontes['encontrados'] != 0){
 InserirFontes(acao);
 setTimeout(function(){CarregarFontes();},4500);
}else{CarregarFontes();}
 
 setTimeout(function(){
 
 gle_scripts['elementos'] = $('.gle_scripts');
 gle_scripts['encontrados'] = gle_scripts['elementos'].length;
 gle_scripts['carregados'] = 0;
 
 if (gle_scripts['encontrados'] != 0){
 InserirScripts(acao);
}else{if (acao == 'iniciar'){if (window.InserirScriptsInline != undefined){InserirScriptsInline();}}}
},20);
 
 setTimeout(function(){
 
 gle_css = $('.gle_css');
 
 InserirCss(acao);
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.e_animacoes',
 'antecipacao' :0,
 'executar' :function(elemento){
 (function(elemento){
 var elemento_carregando = setInterval(function(){
 if (!$(elemento).hasClass('se_imagem') && !$(elemento).hasClass('se_video') && !$(elemento).hasClass('se_caixa') && !$(elemento).find('.c').hasClass('se_fonte') && !$(elemento).hasClass('se_slider')){
 
 clearInterval(elemento_carregando);
 
 var elemento_id = $(elemento).attr('id').replace('_d', '').replace('_m', '');
 var elemento_informacoes = ($(elemento).hasClass('e_video') && $(elemento).find('.carregando').length ? $(elemento).find('.carregando') :$(elemento).find('.c'));
 var animacao_nome = $(elemento_informacoes).attr('data-animation-nome');
 var animacao_duration = ($(elemento_informacoes).attr('data-animation-duration') ? $(elemento_informacoes).attr('data-animation-duration')+'ms' :'1000ms');
 var animacao_delay = ($(elemento_informacoes).attr('data-animation-delay') ? $(elemento_informacoes).attr('data-animation-delay')+'ms' :'0ms');
 var animacao_repeat = ($(elemento_informacoes).attr('data-animation-repeat') == 'loop' ? 'infinite' :'');
 
 if (animacao_nome == 'slide' || animacao_nome == 'zoom' || animacao_nome == 'flip'){var animacao_tipo = 'cubic-bezier(.25,.46,.45,.94)';}
 else if (animacao_nome == 'fade'){var animacao_tipo = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)';}
 else if (animacao_nome == 'roll'){var animacao_tipo = 'ease-out';}
 else if (animacao_nome == 'fold'){var animacao_tipo = 'cubic-bezier(.175,.885,.32,1.275)';}
 else{var animacao_tipo = '';}
 
 $(elemento).removeClass('e_animacoes');
 if($(elemento).hasClass('e_faq')){
 var itens = $(elemento).find('.gac-item');
 for (var i = 0;i < itens.length;i++){
 $(itens[i]).css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)'
 });
}
}else{
 $(elemento).find('.c').css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)'
});
}
 
 $(elemento_informacoes).removeAttr('data-animation-nome data-animation-duration data-animation-delay data-animation-repeat');
 }
}, 50);
})(elemento);
}
});
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_imagem',
 'antecipacao' :600,
 'executar' :function(elemento){
 
 if (elemento.querySelector('picture')){elemento.classList.remove('se_imagem');elemento.removeAttribute('ll_src');elemento.removeAttribute('ll_src_mobile');return;}
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}

 var img_mobile = elemento.getAttribute('ll_src_mobile');
 var img_desktop = elemento.getAttribute('ll_src');
 if (img_mobile == 'null' || img_mobile == 'undefined'){img_mobile = null;}
 if (img_desktop == 'null' || img_desktop == 'undefined'){img_desktop = null;}
 var src_desktop = img_desktop || img_mobile;
 var src_mobile = img_mobile || src_desktop;
 var interno_img = elemento.querySelector('.'+pagina_controle['classe_elemento_interno']);
 var ll_largura = (interno_img && interno_img.getAttribute('gpc_largura_imagem')) ? interno_img.getAttribute('gpc_largura_imagem') :'';
 var ll_altura = (interno_img && interno_img.getAttribute('gpc_altura_imagem')) ? interno_img.getAttribute('gpc_altura_imagem') :'';
 var alt_raw = elemento.getAttribute('data-ll-alt') || '';
 var src_download = (dispositivo == 'mobile' && img_mobile) ? img_mobile :(img_desktop || img_mobile);

 if (!src_download){
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.removeAttribute('data-ll-alt');
 if (interno_img){
 interno_img.removeAttribute('data-ll-alt');
 interno_img.removeAttribute('gpc_ratio_imagem');
 interno_img.removeAttribute('gpc_altura_imagem');
 interno_img.removeAttribute('gpc_largura_imagem');
}
 elemento.classList.remove('se_imagem');
 if (elemento.children[0]){elemento.children[0].innerHTML = '<div class="imagem_fundo fallback_background"></div>';}
 return;
}

 var imagem_download = new Image();

 imagem_download.onload = function(e){

 imagem_download.onload = null;
 imagem_download.onerror = null;

 var source = document.createElement('source');
 source.setAttribute('media', '(max-width: 800px)');
 source.setAttribute('srcset', src_mobile);
 var picture = document.createElement('picture');
 picture.appendChild(source);
 imagem_download.className = 'imagem_fundo';
 imagem_download.alt = alt_raw;
 if (ll_largura && ll_altura){
 imagem_download.setAttribute('width', ll_largura);
 imagem_download.setAttribute('height', ll_altura);
}
 picture.appendChild(imagem_download);
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.removeAttribute('data-ll-alt');
 if (interno_img){
 interno_img.removeAttribute('data-ll-alt');
 interno_img.removeAttribute('gpc_ratio_imagem');
 interno_img.removeAttribute('gpc_altura_imagem');
 interno_img.removeAttribute('gpc_largura_imagem');
}
 elemento.classList.remove('se_imagem');
 var container = elemento.children[0];
 if (!container){return;}
 while (container.firstChild){container.removeChild(container.firstChild);}
 container.appendChild(picture);
};
 imagem_download.onerror = function(e){

 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.removeAttribute('data-ll-alt');
 if (interno_img){
 interno_img.removeAttribute('data-ll-alt');
 interno_img.removeAttribute('gpc_ratio_imagem');
 interno_img.removeAttribute('gpc_altura_imagem');
 interno_img.removeAttribute('gpc_largura_imagem');
}
 elemento.classList.remove('se_imagem');
 if (elemento.children[0]){elemento.children[0].innerHTML = '<div class="imagem_fundo fallback_background"></div>';}
};
 imagem_download.src = src_download;
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_caixa',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src && elemento_carregando_src != 'null' && elemento_carregando_src != 'undefined'){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
};
 imagem_download.onerror = function(e){
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
 elemento.children[0].classList.add('fallback_background');
};
}else{
 elemento.classList.remove('se_caixa');
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_slider',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagens = $(elemento).find('.imagem');
 if(imagens.length){
 imagens.each(function(i,imagem){
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && imagem.getAttribute('ll_src_mobile')){elemento_carregando_src = imagem.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && imagem.getAttribute('ll_src')){elemento_carregando_src = imagem.getAttribute('ll_src');}
 if (elemento_carregando_src && elemento_carregando_src != 'null' && elemento_carregando_src != 'undefined'){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 if(imagem.classList.contains('gsi_clone')){imagem.style.backgroundImage = 'url('+elemento_carregando_src+')';}
};
 imagem_download.onerror = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 try{
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 imagem.closest('.'+pagina_controle['classe_elemento']).children[0].classList.add('fallback_background');
 let id_slider = `gsi_${elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id')}`;
 if(gsi_intervalo.hasOwnProperty(id_slider)){
 GSlideImage.destruir(id_slider);
 GSlideImage.iniciar(elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id'));
 }else{
 GSlideImage.iniciar(elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id'));
 }
}catch (error){
}
};
 }else{
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 }
});
}
}
});
},400);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.ll_background',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src && elemento_carregando_src != 'null' && elemento_carregando_src != 'undefined'){
 
 var background_download = new Image();
 background_download.src = elemento_carregando_src;
 background_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
};
 background_download.onerror = function(e){
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
 elemento.classList.add('fallback_background');
};
}else{
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
 elemento.classList.add('fallback_background');
}
}
});
},50);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_video',
 'antecipacao' :0,
 'executar' :function(elemento){
 
 if(document.getElementById(elemento.getAttribute('id')).getElementsByTagName('iframe').length == 0){
 
 var animacao_nome = (elemento.querySelector('.carregando').getAttribute('data-animation-nome') ? elemento.querySelector('.carregando').getAttribute('data-animation-nome') :'none');
 var animacao_duration = (elemento.querySelector('.carregando').getAttribute('data-animation-duration') ? elemento.querySelector('.carregando').getAttribute('data-animation-duration') :1000);
 var animacao_delay = (elemento.querySelector('.carregando').getAttribute('data-animation-delay') ? elemento.querySelector('.carregando').getAttribute('data-animation-delay') :0);
 var animacao_repeat = (elemento.querySelector('.carregando').getAttribute('data-animation-repeat') == 'loop' ? 'infinite' :'show');
 
 var video_download = document.createElement("iframe");
 console.log(elemento.getAttribute('ll_src'));
 video_download.setAttribute('src', elemento.getAttribute('ll_src'));
 video_download.setAttribute('frameborder', 0);
 video_download.setAttribute('allowfullscreen', '');
 video_download.setAttribute('mozallowfullscreen', '');
 video_download.setAttribute('webkitallowfullscreen', '');
 video_download.setAttribute('allow', 'accelerometer;autoplay;picture-in-picture');
 video_download.setAttribute('class', 'c e_video');
 video_download.setAttribute('data-animation-nome', animacao_nome);
 video_download.setAttribute('data-animation-duration', animacao_duration);
 video_download.setAttribute('data-animation-delay', animacao_delay);
 video_download.setAttribute('data-animation-repeat', animacao_repeat);
 video_download.onload = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
 }
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
};
 video_download.onreadystatechange = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
 }
 if (this.readyState == 'complete'){
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
 }
};
 
 document.getElementById(elemento.getAttribute('id')).appendChild(video_download);
}
}
});
},400);
}
 
 function InserirFontes(acao){
 if (gle_fontes['elementos'].length){
 for(var i = 0;i < gle_fontes['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_fontes['elementos'][index]);
 
 gle_fontes['elementos'].splice(index, 1);
 
 var fonte = document.createElement('link');
 fonte.href = elemento.attr('gle_href');
 fonte.rel = 'stylesheet';
 fonte.media = 'all';
 fonte.onload = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
}};
 document.head.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 function CarregarFontes(){
 var fontes_carregar = $('.se_fonte, .se_contador');
 if (fontes_carregar.length){
 for(var i = 0;i < fontes_carregar.length;i++){
 
 if ($(fontes_carregar[i]).hasClass('se_fonte')){$(fontes_carregar[i]).removeClass('se_fonte');}
 else{$(fontes_carregar[i]).removeClass('se_contador');}
}
}
}
 
 function InserirCss(acao){
 if (gle_css.length){
 for(var i = 0;i < gle_css.length;i++){
 
 (function(index){
 
 var elemento = $(gle_css[index]);
 
 gle_css.splice(index, 1);
 
 var fonte = document.createElement('link');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 if(elemento[0].attributes[x].nodeName != 'rel'){fonte.setAttribute(elemento[0].attributes[x].nodeName.replace('gle_',''),elemento[0].attributes[x].nodeValue.replace('gle_css',''));}
}
 
 fonte.onload = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 InserirCss(acao);
}};
 document.body.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 
 function InserirScripts(acao){
 if (gle_scripts['elementos'].length){
 for(var i = 0;i < gle_scripts['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_scripts['elementos'][index]);
 
 gle_scripts['elementos'].splice(index, 1);
 
 var script = document.createElement('script');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 let valor = elemento[0].attributes[x].nodeValue;
 if(elemento[0].attributes[x].nodeName != 'href'){
 valor = valor.replace(/dns-prefetch\s+?/gm,'');
 valor = valor.replace(/\s+?dns-prefetch/gm,'');
 valor = valor.replace(/preconnect\s+?/gm,'');
 valor = valor.replace(/\s+?preconnect/gm,'');
 valor = valor.replace('dns-prefetch','');
 valor = valor.replace('preconnect','');
 valor = valor.replace('gle_scripts','');
 if(elemento[0].attributes[x].nodeName != 'async'){script.setAttribute(elemento[0].attributes[x].nodeName,valor);}
}
}
 script.src = elemento.attr('href');
 script.type = 'text/javascript';
 script.defer = true;
 script.onload = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onerror = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
}};
 document.body.appendChild(script);
})(i, acao);
 
 break;
}
}
}
 
 
 if($('.'+pagina_controle['classe_elemento']+'.e_faq').length){
 setTimeout(function(){
 GAccordion.instalar();
},600);
}
 
 
 let phoneMaskGreat ={};
 function bindEvents(){
 var caixa = $('gmf').last().attr('id');
 if(caixa != undefined){caixa = '#'+caixa+' ';}else{caixa = '';}
 
 let telefone = $(caixa+".gpc_campo.telefone");
 let telefone_ddi = $(caixa+".gpc_campo.telefone_ddi");
 let total = telefone.length+telefone_ddi.length;
 if(telefone.length > 0){
 for (let i = 0;i < telefone.length;i++){
 const tel = telefone[i];
 let id_campo = '#'+$(tel).closest('.gpc-e').attr('id')+'#'+$(tel).attr('id');
 if($(tel).closest('.gpc_modal').length > 0){delete phoneMaskGreat[id_campo];}
 if(typeof phoneMaskGreat[id_campo] != 'object'){
 phoneMaskGreat[id_campo] = window.intlTelInput(tel,{
 useFullscreenPopup:false,
 autoPlaceholder:"off",
 strictMode:true,
 initialCountry:"BR",
 onlyCountries:["BR"],
 allowDropdown:false,
 showFlags:false,
 utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.3.1/build/js/intlTelInputWithUtils.min.js"
});
 let zIndex = $(tel).closest('.gpc_campos').find('.iti__country-container').css('z-index');
 $(tel).closest('.gpc_campos').css('z-index',(parseInt(zIndex)+total));
 $(tel).closest('.gpc_campos').find('.gpc_campos-campo').css('z-index',(parseInt(zIndex)+total));
 $(tel).closest('.gpc_campos').find('.iti__country-container').css('z-index',(parseInt(zIndex)+total));
}
 total--;
}
 
}
 if(telefone_ddi.length > 0){
 for (let i = 0;i < telefone_ddi.length;i++){
 const tel = telefone_ddi[i];
 let id_campo = '#'+$(tel).closest('.gpc-e').attr('id')+'#'+$(tel).attr('id');
 if($(tel).closest('.gpc_modal').length > 0){delete phoneMaskGreat[id_campo];}
 if(typeof phoneMaskGreat[id_campo] != 'object'){
 phoneMaskGreat[id_campo] = window.intlTelInput(tel,{
 initialCountry:"BR",
 separateDialCode:true,
 useFullscreenPopup:false,
 strictMode:true,
 utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.3.1/build/js/intlTelInputWithUtils.min.js"
});
 $(tel).closest('.gpc_campos').css('z-index','9999');
 $(tel).css('padding-left','86px');
 $(tel).on('countrychange', function(e){
 
 let countryData = phoneMaskGreat['#'+$(this).closest('.gpc-e').attr('id')+'#'+$(this).attr('id')].getSelectedCountryData();
 if (countryData.dialCode){
 tel.value = tel.value.replace(`+${countryData.dialCode}`, "");
 tel.value = tel.value.replace(`+ ${countryData.dialCode}`, "");
}
 console.log($(this).closest('.gpc_campos').find('.iti__country-container').width());
 tel.style.paddingLeft = $(this).closest('.gpc_campos').find('.iti__country-container').width()+8+'px';
 
 ValidacaoCampos($(caixa+'#'+$(this).attr('id')));
});
 let zIndex = $(tel).closest('.gpc_campos').find('.iti__country-container').css('z-index');
 $(tel).closest('.gpc_campos').css('z-index',(parseInt(zIndex)+total));
 $(tel).closest('.gpc_campos').find('.gpc_campos-campo').css('z-index',(parseInt(zIndex)+total));
 $(tel).closest('.gpc_campos').find('.iti__country-container').css('z-index',(parseInt(zIndex)+total));
}
 total--;
}
}
 GFM.instalar({'elemento' :'#celular', 'mascara' :'(00) 0000-00009', 'placeholder' :'(__) ____-_____'});
 GFM.instalar({'elemento' :'input.cnpj', 'mascara' :'00.000.000/0000-00', 'placeholder' :'__.___.___/____-__'});
 GFM.instalar({'elemento' :'input.cpf', 'mascara' :'000.000.000-00', 'placeholder' :'___.___.___-__'});
 GFM.instalar({'elemento' :'input.hora', 'mascara' :'00:00', 'placeholder' :'__:__'});
 GFM.instalar({'elemento' :'input.data', 'mascara' :'00/00/0000', 'placeholder' :'__/__/____'});
 GFM.instalar({'elemento' :'input.datahora', 'mascara' :'00/00/0000 00:00', 'placeholder' :'__/__/____ __:__'});
 
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.gtt-esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.gtt-cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.gtt-baixo', 'direcao' :'baixo'});
 GTooltip.instalar({'elemento' :'.balao_direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.balao_esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.balao_cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.balao_baixo', 'direcao' :'baixo'});
}
 function Mobile(){
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){return true;}
 return false;
}
 window.smoothScrollTo = function (endX, endY, duration){
 let startX = window.scrollX || window.pageXOffset,
 startY = window.scrollY || window.pageYOffset,
 distanceX = endX - startX,
 distanceY = endY - startY,
 startTime = new Date().getTime();
 let easeInOutQuart = function (time, from, distance, duration){
 if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
 return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
};
 let timer = window.setInterval(function (){
 let time = new Date().getTime() - startTime,
 newX = easeInOutQuart(time, startX, distanceX, duration),
 newY = easeInOutQuart(time, startY, distanceY, duration);
 if (time >= duration){
 window.clearInterval(timer);
}
 window.scrollTo(newX, newY);
}, 1000 / 60);
};
 // scroller real da página: window por padrão; o <body> (ou container) quando o CSS o torna o que rola
 window.gScrollEl = function(){
 var h = document.documentElement, b = document.body;
 if (b && b.scrollHeight > (b.clientHeight + 1) && h.scrollHeight <= (h.clientHeight + 1)){
 var oy = window.getComputedStyle(b).overflowY;
 if (oy == 'auto' || oy == 'scroll' || oy == 'hidden'){return b;}
}
 return null;
};
 window.gScrollTop = function(){var e = window.gScrollEl();return e ? e.scrollTop : (window.scrollY || window.pageYOffset || 0);};
 window.gScrollSet = function(y, smooth){
 var e = window.gScrollEl();
 if (smooth && ('scrollBehavior' in document.documentElement.style)){
 if (e){e.scrollTo({top:y, behavior:'smooth'});}else{window.scroll({top:y, behavior:'smooth'});}
}else{
 if (e){e.scrollTop = y;}else{window.scroll({top:y, behavior:'auto'});}
}
};
 $(function(){
 
 GLoading.carregar({'ativar':false});
 
 $('body').removeClass('preload');
 
 bindEvents();
 
 $('.mensagem_fechar').on('click',function(evento){$('.mensagens').removeAttr('style');});
 
 $(document).on('keydown', function(e){
 var tecla = (e.keyCode?e.keyCode:e.which);
 if($('.gm').length){
 var caixa = $('.gm').last().attr('id');
 var caixa_andamento = $('#'+caixa).find('.gmf-andamento');
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if (caixa_andamento.length){
 if (caixa_andamento.attr('caixa_passos_controle') == (caixa_andamento.attr('caixa_passos_quantidade')-1)){$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 else{PassosGMF(caixa, 'proximo');}
}else{$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 return false;
}else if(tecla == 27){
 e.preventDefault();
 e.stopPropagation();
 if ($('#'+caixa).attr('gm_componente') == 'gsp'){FecharGSP(caixa);}
 else if($('#'+caixa).attr('gm_componente') == 'gmf'){$('#'+caixa+' .gmf-topo-fechar').click();}
 else if($('#'+caixa).attr('gm_componente') == 'guo' || $('#'+caixa).attr('gm_componente') == 'gd'){PulsarGM($('#'+caixa).attr('id'));}
 else if ($('#'+caixa).attr('gm_componente') == 'gmi'){
 
 gmi_caixa['elemento'] = '';
 gmi_caixa_imagem['elemento'] = '';
 gmi_fundo['elemento'] = '';
 
 FecharGM(caixa);
}else{FecharGM(caixa);}
 return false;
}
}else{
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if($('#editar_formulario').length){$('#editar_formulario').trigger('click');}
 else if($('#enviar_formulario').length){$('#enviar_formulario').trigger('click');}
 else if($('.admin_botao-login').length){$('.admin_botao-login').trigger('click');}
 else if($('.admin_botao-esqueci_minha_senha').length){$('.admin_botao-esqueci_minha_senha').trigger('click');}
 return false;
}
}
 if((e.ctrlKey && tecla == 85) || tecla == 123){
 e.preventDefault();
 e.stopPropagation();
 return false;
}
});
 
 $('body').on('click','.botao_evento',function(e){
 
 elementos_botoes_evento[$(this).parent().attr('id')]['conteudo']();
});
 
 $('body').on('click','.link_popup',function(e){
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 
 var conteudo = elementos_popup[elemento.attr('id')]['conteudo'];
 if(conteudo == undefined || conteudo == ''){conteudo = '<div></div>';}
 
 gm_quantidade++;
 
 var configuracao ={
 'gm' :{
 'conteudos' :{
 'topo' :{
 'conteudo' :"<div class='gpc_modal_popup-topo-fechar icone-fechar'></div>",
 'estilos' :'',
 'extras' :''
},
 'centro' :{
 'conteudo' :conteudo,
 'estilos' :'',
 'extras' :''
},
 'rodape' :{
 'conteudo' :'<div></div>',
 'estilos' :'',
 'extras' :''
}
},
 'classes' :'gpc_modal',
 'estilos' :elementos_popup[elemento.attr('id')]['estilos'][($(window).width() > 960 ? 'desktop' :'mobile')],
 'extras' :'gpc_id_elemento="'+elemento.attr('id')+'"'
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div class='gpc_modal_popup-fundo-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar"'
}
};
 
 AbrirGM('gpc_modal_'+gm_quantidade, 'gpc_modal_popup',configuracao);
 
 setTimeout(function(){
 if($('#gpc_modal_'+gm_quantidade+' .'+pagina_controle['classe_elemento']+'.e_slider').length){
 GSlideImage.iniciar();
}
 if($('#gpc_modal_'+gm_quantidade+' .'+pagina_controle['classe_elemento']+'.e_faq').length){
 GAccordion.instalar();
}
 GreatLoader('atualizar');
 GreatFontes(true);
 bindEvents();
},400);
 
 return false;
});
 $('body').on('click','.gpc_modal_popup-topo-fechar, .gpc_modal_popup-fundo-fechar',function(e){FecharGM($('.gpc_modal').last().attr('id'));});
 
 $('body').on('click','.link_interno',function(e){
 if($(this).attr('data-bloco-mobile') !== undefined && $(window).width() < 720){
 var bloco = $(this).attr('data-bloco-mobile');
 if(!$((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){bloco = $(this).attr('data-bloco');}
}else{var bloco = $(this).attr('data-bloco');}
 if(bloco != undefined){
 if($((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){
 var sc = window.gScrollEl ? window.gScrollEl() : null;
 if (sc){
 var bl = $((bloco.substr(0,1) == '#' ? bloco :'#'+bloco))[0];
 var y = sc.scrollTop + (bl.getBoundingClientRect().top - sc.getBoundingClientRect().top) - 60;
 window.gScrollSet(y, true);
}else{
 var offset = $((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).offset();
 if ('scrollBehavior' in document.documentElement.style){window.scroll({top:(offset.top-60), behavior:"smooth"});}
 else{smoothScrollTo(0, (offset.top-60), 800);}
}
}
}
 return false;
});
 
 $('body').on('click','.link_externo',function(e){
});
 
 
 if(!window.getCrawler()){
 GModalApproval.instalar({
 'barra':{
 'cor':'ffffff',
 'classe':'',
 'texto':'Usamos cookies para personalizar conteúdos e melhorar a sua experiência.',
 'botao_configurar':'Configurar',
 'botao_aceitar':'Entendi e aceito',
 'fechar':true,
 'fechar_acao':'cookies_remover'
},
 'textos':[
{'tipo':'titulo', 'texto':'Configurações de cookies'},
{'tipo':'texto', 'texto':'Você pode escolher quais cookies quer aceitar'},
 ],
 'opcoes':[
{
 'titulo':'Cookies obrigatórios',
 'texto':'Eles são cookies para garantir o funcionamento adequado do site.',
 'aviso':'Sempre ativo',
 'id':'o'
},
{
 'titulo':'Cookies de estatísticas',
 'texto':'São usados para coletar informações para exibir conteúdos específicos para um navegador em particular ao criar diferentes grupos-alvo.',
 'id':'e',
 'valor':true,
 'codigos':function(){
 
 return scripts_estatisticas;
 }
},
{
 'titulo':'Cookies de marketing',
 'texto':'Eles são usados para coletar informações para exibir publicidade ou conteúdos específicos para um navegador em particular ao criar diferentes grupos-alvo.',
 'id':'m',
 'valor':true,
 'codigos':function(){
 
 return scripts_marketing;
 }
}
 ],
 'dominio':'.fluavivenciaquantica.com.br',
 'editado':(GModalApproval.preferencias() ? true :false)
});
}
});
 
 'use strict';

var gac_timeout ={}, gac_timeout_resize;
var GAccordion = function (){
 return{
 instalar:function (id){
 let instancias;
 if (id != undefined){instancias = document.querySelectorAll('#' + id + ' .gac');}
 else{instancias = document.querySelectorAll('.gac');}
 if (instancias){
 for (var i = 0;i < instancias.length;i++){
 id = instancias[i].closest('.gpc-e, .gpc-blocos_bloco_elemento').getAttribute('id');
 let ja_iniciado = false, abrir_primeiro = false;
 if (instancias[i].getAttribute('gac-abrir_primeiro') == 'true'){abrir_primeiro = true;}
 let itens = instancias[i].querySelectorAll('.gac-item_cabecalho');
 if (instancias[i].parentElement.classList.contains('gpc-e')){
 ja_iniciado = instancias[i].classList.contains('gac-ativo');
 instancias[i].classList.add('gac-ativo');
}
 if (itens){
 if (!ja_iniciado){
 for (var x = 0;x < itens.length;x++){
 let atual = itens[x];
 if (document.getElementById(id).classList.contains('gpc-e')){itens[x].addEventListener('click', function (){GAccordion.abrir(atual.closest('.gpc-e').getAttribute('id'), atual);}, false);}
 else{
 atual.closest('.gac-item').classList.remove('gac-aberto');
 let conteudo = atual.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = '';
 if (atual.closest('.gpc-blocos_bloco_elemento')){
 atual.style.color = atual.closest('.gac').getAttribute('data-color');
 atual.style.backgroundColor = atual.closest('.gac').getAttribute('data-background-color');
}
}
}
}
 if (instancias[i].closest('.gpc-e')){
 let visivel = getComputedStyle(instancias[i].closest('.gpc-e'));
 if (abrir_primeiro && visivel.visibility === 'visible' && visivel.display === 'block'){
 GAccordion.abrir(itens[0].closest('.gpc-e').getAttribute('id'), itens[0], true);
}
}
}
}
}
}, abrir:function (id, item, primeiro){
 if (primeiro == undefined){primeiro = false;}
 let instancia = document.querySelector("#" + id);
 if (instancia){
 if (item.closest('.gac-item').classList.contains('gac-aberto') && !primeiro){GAccordion.fechar(id, item);}
 else{
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 let item_ativo_altura = instancia.querySelector('.gac-aberto');
 if(item_ativo_altura){item_ativo_altura = item_ativo_altura.querySelector('.gac-item_conteudo').offsetHeight;}
 else{item_ativo_altura = 0;}
 let abertos = document.querySelectorAll('.gac-aberto');
 if (abertos && !primeiro){
 for (var i = 0;i < abertos.length;i++){
 if (abertos[i].closest('.gpc-e')){
 if (abertos[i].closest('.gpc-b')){
 if (abertos[i].closest('.gpc-b').getAttribute('id') == abertos[i].closest('.gpc-b').getAttribute('id')){GAccordion.fechar(abertos[i].closest('.gpc-e').getAttribute('id'), abertos[i],true);}
}else if (abertos[i].closest('.gpc_modal')){
 GAccordion.fechar(abertos[i].closest('.gpc-e').getAttribute('id'), abertos[i])
}
}
}
}
 item.closest('.gac-item').classList.add('gac-aberto');
 let conteudo = item.closest('.gac-item').querySelector('.gac-item_conteudo');
 let tamanho_conteudo = conteudo.scrollHeight;
 conteudo.style.height = tamanho_conteudo + 'px';
 if (instancia.closest('.gpc-blocos_bloco_elemento')){
 let itens = instancia.querySelectorAll('.gac-item_cabecalho');
 let ativo = item.closest('.gac-item');
 let conteudoEl = itens[0] ? itens[0].closest('.conteudo') :null;
 let temHoverAttrs = conteudoEl && conteudoEl.getAttribute('data-color-hover') !== null;
 for (var x = 0;x < itens.length;x++){
 let gi = itens[x].closest('.gac-item');
 if (gi === ativo){continue;}
 gi.classList.remove('gac-aberto');
 if (temHoverAttrs){
 gi.querySelector('.gac-item_cabecalho').style.color = conteudoEl.getAttribute('data-color');
 gi.querySelector('.gac-item_cabecalho').style.backgroundColor = conteudoEl.getAttribute('data-background-color');
}
 gi.querySelector('.gac-item_conteudo').style.height = '';
}
 if (temHoverAttrs){
 ativo.querySelector('.gac-item_cabecalho').style.color = conteudoEl.getAttribute('data-color-hover');
 ativo.querySelector('.gac-item_cabecalho').style.backgroundColor = conteudoEl.getAttribute('data-background-color-hover');
 ativo.querySelector('.gac-item_conteudo').style.color = conteudoEl.getAttribute('data-color-texto');
 ativo.querySelector('.gac-item_conteudo').style.backgroundColor = conteudoEl.getAttribute('data-background-color-hover');
}
}
 if ((instancia.closest('.gpc-b') || instancia.closest('.gpc_modal')) && !document.querySelectorAll('#admin_centro').length){
 let elemento = instancia.closest('.gpc-e');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
 elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`;
 if(rotacao != 0){conteudo.style.transition = 'none';}
 else{conteudo.style.transition = '';}
 tamanho_conteudo = tamanho_conteudo + dif.deltaY;
 if (rotacao == 90 || rotacao == 270){tamanho_conteudo = 0;}
 let id_bloco = (instancia.closest('.gpc-b') ? instancia.closest('.gpc-b').getAttribute('id') :instancia.closest('.gpc_modal').getAttribute('gpc_id_elemento'));
 let elementos = instancia.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id')){
 elementos[i].classList.add('gac-movendo');
 if (parseFloat(elementos_posicao[elementos[i].getAttribute('id')][versao]) >= (item.closest('.gpc-e').offsetTop + item.closest('.gpc-e').offsetHeight - item_ativo_altura) && elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id') && elementos[i].offsetParent){elementos[i].style.top = (elementos_posicao[elementos[i].getAttribute('id')][versao] + tamanho_conteudo) + 'px';}
 else if (elementos[i].offsetParent == null){elementos[i].style.top = '';}
}
}
}
 if (instancia.closest('.gpc-blocos_bloco_elemento')){conteudo.style.height = 'auto';}
 instancia.closest('.gpc-b, .gpc_modal').classList.add('gac-movendo');
 instancia.closest('.gpc-b, .gpc_modal').style.setProperty('height', (blocos_posicao[id_bloco][versao] + tamanho_conteudo) + 'px', 'important');
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
}else{
 let elemento = instancia.closest('.gpc-blocos_bloco_elemento');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
 tamanho_conteudo = tamanho_conteudo + dif.deltaY;
 if(rotacao != 0){conteudo.style.transition = 'none';}
 else{conteudo.style.transition = '';}
 elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`;
 
 let elementos, bloco;
 if (instancia.closest('.gpc_modal')){
 elementos = instancia.closest('.gpc_modal').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc_modal');
}else{
 elementos = instancia.closest('.gpc-blocos_bloco_interno').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc-blocos_bloco_interno');
}
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (elementos[i].getAttribute('id') != item.closest('.gpc-blocos_bloco_elemento').getAttribute('id')){
 elementos[i].classList.add('gac-movendo');
 if (
 parseFloat(elementos[i].offsetTop) >= (item.closest('.gpc-blocos_bloco_elemento').offsetTop + item.closest('.gpc-blocos_bloco_elemento').offsetHeight) &&
 elementos[i].getAttribute('id') != item.closest('.gpc-blocos_bloco_elemento').getAttribute('id') &&
 elementos[i].offsetParent
 ){elementos[i].style.top = (parseFloat(elementos[i].style.top) + tamanho_conteudo) + 'px';}
}
}
}
 bloco.classList.add('gac-movendo');
 bloco.style.setProperty('height', (parseFloat(bloco.style.height) + tamanho_conteudo) + 'px');
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
 for (let i = 0;i < 8;i++){setTimeout(function (){gpc_controle['elementos_iniciados']['elemento'].updateRect();}, 40 * i);}
}
}
}
}, fechar:function (id, item, abrir_outro){
 let instancia = document.querySelector("#" + id);
 if (abrir_outro == undefined){abrir_outro = false;}
 if (instancia){
 if (gac_timeout.hasOwnProperty(id)){
 clearTimeout(gac_timeout[id]);
 delete gac_timeout[id];
}
 if (instancia.closest('.gpc-blocos_bloco_elemento')){
 let itens = item.closest('.gac').querySelectorAll('.gac-item_cabecalho');
 let gacEl = item.closest('.gac');
 let temHoverAttrs = gacEl && gacEl.getAttribute('data-color-hover') !== null;
 for (var x = 0;x < itens.length;x++){
 itens[x].closest('.gac-item').classList.remove('gac-aberto');
 if (temHoverAttrs){
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.color = gacEl.getAttribute('data-color');
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.backgroundColor = gacEl.getAttribute('data-background-color');
}
 itens[x].closest('.gac-item').querySelector('.gac-item_conteudo').style.height = '';
}
}
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 item.closest('.gac-item').classList.remove('gac-aberto');
 let conteudo = item.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = '';
 if ((instancia.closest('.gpc-b') || instancia.closest('.gpc_modal')) && !document.querySelectorAll('#admin_centro').length){
 let elemento = instancia.closest('.gpc-e');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let elementos = instancia.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 elementos[i].classList.add('gac-movendo');
 if (elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id')){
 if (
 parseFloat(elementos[i].offsetTop) != elementos_posicao[elementos[i].getAttribute('id')][versao] &&
 elementos[i].getAttribute('id') != id &&
 elementos[i].offsetParent
 ){elementos[i].style.top = '';}
}
 elementos[i].classList.remove('gac-movendo');
}
}
 elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`;
 instancia.closest('.gpc-b, .gpc_modal').style.height = '';
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
}else{
 let elemento = instancia.closest('.gpc-blocos_bloco_elemento');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`;
 versao = '';
 if (document.getElementById('gpc-blocos').classList.contains('mobile')){versao = '_mobile';}
 
 let elementos, bloco;
 if (instancia.closest('.gpc_modal')){
 elementos = instancia.closest('.gpc_modal').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc_modal');
}else{
 elementos = instancia.closest('.gpc-blocos_bloco_interno').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc-blocos_bloco_interno');
}
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (
 parseFloat(elementos[i].style.top) >= (parseFloat(instancia.style.top) + parseFloat(getComputedStyle(instancia)['height'])) &&
 elementos[i].getAttribute('id') != id &&
 elementos[i].offsetParent
 ){elementos[i].setAttribute('style', elementos_pagina[elementos[i].getAttribute('gpc_id_elemento')]['estilos' + versao]);}
}
}
 bloco.setAttribute('style', blocos_pagina[bloco.getAttribute('gpc_id_bloco')]['estilos' + versao]);
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
 for (let i = 0;i < 8;i++){setTimeout(function (){gpc_controle['elementos_iniciados']['elemento'].updateRect();}, 40 * i);}
}
 
 let elementos = document.querySelectorAll('.gac-movendo');
 if (elementos){for (var i = 0;i < elementos.length;i++){elementos[i].classList.remove('gac-movendo');}}
}
}, resize:function (id){
 if (document.querySelectorAll('#admin_centro').length){return false;}
 let instancias;
 if (id != undefined){instancias = document.querySelectorAll('#' + id + ' .gac');}
 else{instancias = document.querySelectorAll('.gac');}
 if (instancias){
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 for (var i = 0;i < instancias.length;i++){
 id = instancias[i].closest('.gpc-e').getAttribute('id');
 let itens = instancias[i].querySelectorAll('.gac-aberto');
 let tamanho_conteudo = 0;
 if (itens){
 for (var x = 0;x < itens.length;x++){
 let atual = itens[x];
 let conteudo = atual.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = 'auto';
 tamanho_conteudo = conteudo.scrollHeight;
 if (atual.closest('.gpc-b') || atual.closest('.gpc_modal')){
 let id_bloco = (atual.closest('.gpc-b') ? atual.closest('.gpc-b').getAttribute('id') :atual.closest('.gpc_modal').getAttribute('gpc_id_elemento'));
 let elementos = atual.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var y = 0;y < total_elementos;y++){
 elementos[y].classList.add('gac-movendo');
 if ((parseFloat(elementos[y].offsetTop) >= (atual.closest('.gpc-e').offsetTop + atual.closest('.gpc-e').offsetHeight - tamanho_conteudo) || elementos[y].offsetParent == null) && elementos[y].getAttribute('id') != atual.closest('.gpc-e').getAttribute('id')){elementos[y].style.top = (elementos_posicao[elementos[y].getAttribute('id')][versao] + tamanho_conteudo) + 'px';}
}
}
 atual.closest('.gpc-b, .gpc_modal').classList.add('gac-movendo');
 atual.closest('.gpc-b, .gpc_modal').style.setProperty('height', (blocos_posicao[id_bloco][versao] + tamanho_conteudo) + 'px', 'important');
 if (atual.closest('.gpc_modal')){PosicionarGM(atual.closest('.gpc_modal').getAttribute('id'), false);}
}
}
}
}
}
}, rotacao:function (transform){
 
 const resultados = transform.match(/matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/);
 if (!resultados) return 0;
 
 const a = parseFloat(resultados[1]);
 const b = parseFloat(resultados[2]);
 
 let graus = Math.atan2(b, a) * (180 / Math.PI);
 graus = graus % 360;
 if (graus < 0){graus += 360;}
 
 return parseFloat(graus.toFixed(2));
}, calcularAjuste:function (angulo, tamanhoConteudo){
 // Convertendo o ângulo de rotação para radianos
 let radianos = angulo * Math.PI / 180;
 // Calculando os ajustes baseado na expansão do conteúdo e no ângulo de rotação
 let ajusteX = (Math.sin(radianos) * tamanhoConteudo / 2) * -1;
 let ajusteY = ((1 - Math.cos(radianos)) * tamanhoConteudo / 2) * -1;
 // Retornando os ajustes
 return{deltaX:ajusteX, deltaY:ajusteY};
}

}
}();
window.addEventListener('load', function (){GAccordion.instalar();}, false);
window.addEventListener('resize', function (){
 const elementos = document.querySelectorAll('.gac-movendo');
 if (elementos){for (var i = 0;i < elementos.length;i++){elementos[i].classList.remove('gac-movendo');}}
 if (gac_timeout_resize){clearTimeout(gac_timeout_resize);}
 const largura = window.innerWidth;
 gac_timeout_resize = setTimeout(function (){if (largura == window.innerWidth){GAccordion.resize();}}, 50);
}, false);'use strict';

var carregando = false;

var GLoading = function(){
 return{
 instalar :function(){
 
 var gl = document.querySelector('#gloading');
 if (gl == null || gl == undefined){
 var gl_loading = document.createElement("div");
 gl_loading.id = 'gloading';
 gl_loading.className = 'gloading_esconder';
 gl_loading.innerHTML = '<span></span>';
 document.body.appendChild(gl_loading);
}
},
 carregar :function(configuracao){
 
 if (configuracao.hasOwnProperty('ativar') == false){configuracao.ativar = false;}
 if (configuracao.ativar != true && configuracao.ativar != false){configuracao.ativar = false;}
 if (configuracao.hasOwnProperty('tempo') == false){configuracao.tempo = 0;}
 if (configuracao.hasOwnProperty('tipo') == false){configuracao.tipo = 'barra';}
 if (configuracao.tipo != 'barra' && configuracao.tipo != 'tela'){configuracao.tipo = 'barra';}
 
 var gl = document.querySelector('#gloading');
 
 if (gl != null && gl != undefined){
 
 if (configuracao.ativar == true){GLoading.carregar_mostrar(gl, configuracao);}
 
 if (configuracao.ativar == false || configuracao.tempo != 0){GLoading.carregar_esconder(gl, configuracao);}
}
},
 carregar_mostrar :function(gl, configuracao){
 
 carregando = true;
 
 gl.classList.add('gloading_'+configuracao.tipo+'_carregando');
},
 carregar_esconder :function(gl, configuracao){
 (function(gl, configuracao){
 if(configuracao.tempo > 0){
 setTimeout(function(){
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}, configuracao.tempo);
}else{
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}
})(gl, configuracao);
}
};
}();




 $(function(){
 $('body').on('click', '.check .check-borda, .check .check-texto',function(evento){
 
 var check = $(this).closest('.check');
 var check_borda = check.find('.check-borda');
 var campo = check.closest('.admin_campos-campo').find('.admin_campo');
 
 if (!check.hasClass('check_selecionado')){
 
 check.addClass('check_selecionado');
 check_borda.addClass('check-borda_efeito').html("<span class='check-borda-bolinha'></span>");
}else{
 
 check.removeClass('check_selecionado');
 check_borda.html("");
}
 var valores = '', opcoes = check.closest('.checks').find('.check_selecionado');
 if(opcoes.length){
 opcoes.each(function(){valores += $(this).attr('id')+',';});
 valores = valores.substr(0,(valores.length-1));
}
 campo.val(valores).trigger('change');
 ValidacaoCampos(campo);
 setTimeout(function(){check_borda.removeClass('check-borda_efeito');},200);
});
});
'use strict';
var GFM = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('mascara') == false){configuracao.mascara = '';}
 if (configuracao.hasOwnProperty('placeholder') == false){configuracao.placeholder = '';}
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 for (var i = 0;i < elementos.length;i++){
 (function(configuracao, elemento){
 
 if (elemento !== undefined && elemento !== null){
 
 if (elemento.dataset.gfm_mascara !== undefined && elemento.dataset.gfm_mascara !== null){configuracao.mascara = elemento.dataset.gfm_mascara;}
 if (elemento.dataset.gfm_placeholder !== undefined && elemento.dataset.gfm_placeholder !== null){configuracao.placeholder = elemento.dataset.gfm_placeholder;}
 
 if (elemento.addEventListener){
 elemento.addEventListener("focusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.addEventListener("focusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.addEventListener('input', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}else if (elemento.attachEvent){
 elemento.attachEvent("onfocusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.attachEvent("onfocusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.attachEvent('oninput', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}
}
})(configuracao, elementos[i]);
}
},
 campo_focusin :function(configuracao, elemento, evento){
 
 if (elemento.placeholder){elemento.dataset.gfm_placeholder_anterior = elemento.placeholder;}
 else{elemento.dataset.gfm_placeholder_anterior = ' ';}
 if (configuracao.placeholder){elemento.placeholder = configuracao.placeholder;}
 
 elemento.maxLength = configuracao.mascara.length;
},
 campo_focusout :function(configuracao, elemento, evento){
 
 if (elemento.value.length < configuracao.mascara.replace('9','').replace('Z','').replace('D','').replace('?','').length){elemento.value = '';}
 
 if (elemento.dataset.gfm_placeholder_anterior){elemento.placeholder = elemento.dataset.gfm_placeholder_anterior;}
},
 campo_digitar :function(configuracao, elemento, evento){
 if (evento.inputType && evento.inputType.indexOf('delete') === 0){return;}
 if (evento.data != null){
 var tecla_codigo = evento.data.charCodeAt(0);
 if (tecla_codigo === 8 || tecla_codigo === 46 || tecla_codigo === 16 || tecla_codigo === 17 || tecla_codigo === 18){return;}
 if (tecla_codigo === 37 || tecla_codigo === 38 || tecla_codigo === 39 || tecla_codigo === 40){return;}
}
 evento.preventDefault();
 evento.stopPropagation();
 var texto = elemento.value;
 var posicionar_cursor = false;
 if (typeof elemento.selectionStart == "number" && typeof elemento.selectionEnd == "number"){
 var selecao_inicio = elemento.selectionStart;
 var selecao_fim = elemento.selectionEnd;
 if (selecao_inicio != selecao_fim || elemento.value.length != selecao_fim){
 posicionar_cursor = true;
}
}
 var texto_tamanho = texto.length;
 var texto_novo = '';
 var caractere = '';
 for (var numero_mascara = 0, numero_texto = 0;numero_mascara < configuracao.mascara.length;++numero_mascara){
 caractere = texto.charAt(numero_texto);
 switch (configuracao.mascara.charAt(numero_mascara)){
 case '0' :
 case '9' :
 if (/\d/.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'A' :
 case 'Z' :
 if (/[a-z]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'C' :
 case 'D' :
 if (/[a-z0-9]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'X' :
 case '?' :
 texto_novo += caractere;
 ++numero_texto;
 break;
 default :
 texto_novo += configuracao.mascara.charAt(numero_mascara);
 if (configuracao.mascara.charAt(numero_mascara) == texto.charAt(numero_mascara)){
 ++numero_texto;
}else{if (posicionar_cursor && numero_texto+1 == selecao_inicio){++selecao_inicio;}}
 break;
}
 if (numero_texto == texto_tamanho){break;}
}
 elemento.value = texto_novo;
 if (posicionar_cursor && elemento.setSelectionRange){elemento.setSelectionRange(selecao_inicio, selecao_inicio);}
}
};
}();


 
 var gm_quantidade = 0;
 function AbrirGM(id_gm, componente, configuracao){
 
 var z_index_fundo = 999, z_index_caixa = 1000;
 if($('#gpc-menu').length){
 z_index_fundo = 999999999999902;
 z_index_caixa = 999999999999903;
}
 var gm_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm']['conteudos'], function (classe, div){if (div.conteudo){gm_conteudos += "<div class='"+componente+"-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var gm_fundo_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm_fundo']['conteudos'], function (classe, div){if (div.conteudo){gm_fundo_conteudos += "<div class='"+componente+"_fundo-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var scroll = (window.gScrollTop ? window.gScrollTop() : window.scrollY);
 var tela_altura = $(window).height();
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){
 scroll = (document.getElementById("gpc-blocos").scrollTop-$('#gpc-blocos').offset().top);
 tela_altura = $('#gpc-blocos_editor').height();
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 else{$("body").append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 
 $("."+id_gm).addClass('gm_fundo_ativo');
 if(!$(".gm").length || $('.gpc_modal').lenght){
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').addClass('body_bloquear');}
 else{
 if(componente == 'gpc_modal_popup'){$("body").addClass('body_bloquear_site');}
 else{
 $("body").addClass('body_bloquear');
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':'hidden'});}
}
}
 
 if($('#site').length && componente != 'gma_modal'){$('#site').addClass('site_borrar').css({'top':-scroll+'px','height':($('#site').height()+scroll)+''});}
 else if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor-blocos').addClass('administrador_borrar').css({'top':-(scroll)+'px'});}
 else{$('#administrador').addClass('administrador_borrar').css({'top':-scroll+'px'});}
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gma_modal'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_efeitos "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+((tela_altura/100)*5)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gpc_modal_popup'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+(tela_altura+scroll)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else{$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 
 if(componente == 'gma_modal'){
 setTimeout(function(){
 $('#'+id_gm).css('opacity', '1');
 PosicionarGM(id_gm);
},250);
}else{setTimeout(function(){PosicionarGM(id_gm);},150);}
 
 window.addEventListener('resize', function(event){
 if(componente != 'gpc_modal'){
 if (componente == 'gmi'){PosicionarGM(id_gm, false);}
 else{PosicionarGM(id_gm);}
}
});
}
 function PosicionarGM(id_gm, efeitos){
 
 if(efeitos === undefined || efeitos === ''){efeitos = true;}
 
 var gm = $("#"+id_gm);
 if (gm.length){
 
 var tela_altura = $(window).height();
 var tela_largura = $(window).width();
 var tela = (window.gScrollTop ? window.gScrollTop() : window.scrollY);
 if($('.gm').length > 1){tela = 0;}
 
 if (gm.attr('gm_componente') == 'gpc_modal'){
 tela = document.getElementById("gpc-blocos").scrollTop;
 tela_altura = $('#gpc-blocos_editor').height();
 gm.find('.gpc_modal-centro').removeAttr('style');
 var gm_fundo = $("."+id_gm);
 var height = 20;
 $('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});
 gm_fundo.css({'height':height+'px'});
}
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gmf-opcoes').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi'){
 
 var imagem = CalcularGMI(gmi_elemento['elemento']);
 
 if (gmi_caixa['elemento']){
 
 gmi_caixa['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
 
 gmi_caixa_imagem['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
}
}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css('height','100%');}
 
 var gm_largura = gm.width();
 
 var gm_altura = 0;
 if (gm.attr('gm_componente') == 'gpc_modal_imagens' || gm.attr('gm_componente') == 'gml'){gm_altura = tela_altura;
}else if (gm.attr('gm_componente') == 'gpc_modal_popup' || gm.attr('gm_componente') == 'gpc_modal'){
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){tela = 0;}
 gm_altura = $('.gpc_modal').height();
 var gm_fundo = $("."+id_gm);
 var height = 20;
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){
 gm_altura = $('.gpc_modal_popup-centro').height();
 $('.gpc-b').each(function(){height += $(this).height();});
}else{$('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});}
 if (gm_altura >= tela_altura){
 $('#site').css({'height':(gm_altura+Math.abs(parseFloat($('#site').css('top')))+70)+'px'});
 gm_fundo.css({'height':(gm_altura+70)+'px'});
}else{
 $('#site').css({'height':(tela_altura+Math.abs(parseFloat($('#site').css('top'))))+'px'});
 if(gm_altura+20 >= (gm_fundo.height()-10)){gm_fundo.css({'height':(tela_altura+10)+'px'});}
 else{gm_fundo.css({'height':tela_altura+'px'});}
}
}else if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm_altura = $('.gpc_modal_formulario').height();
}else if (gm.attr('gm_componente') == 'gma_modal'){gm_altura = $('#gm-gpages_modal').height();
}else{gm.children().each(function(){gm_altura += $(this).outerHeight(true);});}
 if (gm_altura >= tela_altura){
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').css({'height':$('.gpc_modal_formulario').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal'){gm.find('.gpc_modal-centro').css({'height':$('.gpc_modal').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){gm.find('.gpc_modal_popup-centro').css({'height':$('.gpc_modal_popup').height()+'px'});}
 if (gm.attr('gm_componente') == 'gml'){
 
 tela += 20;
 gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});
}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').css({'height':((tela_altura-((gm.find('.gmf-topo').outerHeight())+(gm.find('.gmf-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').css({'height':((tela_altura-((gm.find('.gm_configurar_dns_completo-topo').outerHeight())+(gm.find('.gm_configurar_dns_completo-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){
 tela += 50;
 gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((tela_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});
}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').css({'height':(gm_altura-(gm_altura-tela_altura)-96)+'px'});}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gsp-opcoes').css({'height':((tela_altura-((gm.find('.gsp-topo').outerHeight())+(gm.find('.gsp-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').css({'height':((tela_altura-((gm.find('.gmi_informacoes-topo').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css({'height':((tela_altura-((gm.find('.gmi_comentarios-topo').outerHeight())+(gm.find('.gmi_comentarios-rodape').outerHeight())))-20)+'px'});}
 
 if (efeitos){
 if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}
}else{
 if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}
}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else if (gm.attr('gm_componente') == 'gma_modal'){setTimeout(function(){gm.css({'top':(tela)+'px'}).removeClass('gm_esconder');},25);}
 else{
 setTimeout(function(){
 gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){
 
 if(Object.keys(gpc_controle['elementos_iniciados']).length){
 $.each(gpc_controle['elementos_iniciados'], function (i, elemento_iniciado){
 if(typeof gpc_controle['elementos_iniciados'][i].updateRect == 'function'){gpc_controle['elementos_iniciados'][i].updateRect();}
});
}
}
},25);
}
}else{
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((gm_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});}
 
 if (efeitos){if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}}else{if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else{
 setTimeout(function(){
 gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){gpc_controle['elementos_iniciados'][id_gm].updateRect();}
},25);
}
}
}
}
 function FecharGM(id_gm){
 var gm = $("#"+id_gm);
 if (gm.length){
 var componente = gm.attr('gm_componente');
 if(componente == 'gpc_modal_formulario'){MostrarPreview(false);}
 if(gm.attr('id') == 'gm-plano_alteracao_pagamento' || gm.attr('id') == 'gm-plano_alteracao' || gm.attr('id') == 'gm-plano_contratou'){
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 document.location.reload();
}
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){
 gpc_controle['elementos_iniciados'][id_gm].destroy();
 delete gpc_controle['elementos_iniciados'][id_gm];
}
 
 var gm_fundo = $("."+id_gm);
 var tela = (window.gScrollTop ? window.gScrollTop() : window.scrollY);
 var tela_altura = $(window).height();
 if (componente == 'gpc_modal'){
 tela_largura = $('#gpc-blocos_editor').width();
 tela = document.getElementById("gpc-blocos").scrollTop;
}
 
 if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}
 
 if(componente == 'gma_modal'){gm.css({'opacity':'0'});}
 else{gm.css({'top':(tela_altura+tela)+'px'});}
 
 setTimeout(function(){gm_fundo.removeClass('gm_fundo_ativo');},100);
 
 setTimeout(function(){
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){
 $('.'+gpc_controle['classe_elemento_adicionar']+'[gpc_tipo="bloco"]').removeClass('esconder');
 var elemento_original = $('.gpc_modal').attr('gpc_id_elemento');
 if(gpc_controle['elementos_selecionados']['elementos_resize'] != ''){
 gpc_controle['elementos_selecionados'] ={'elementos':{}, 'elementos_resize':'', 'total' :0,'helper':{'largura':0,'altura':0,'left_original':'','top_original':'','elemento_left_original':'','elemento_top_original':'','scrollTop':$("#gpc-blocos").offset().top,'scrollLeft':$("#gpc-blocos").scrollLeft()}};
 $('#'+gpc_controle['classe_elementos_selecionados']).remove();
 $('.ui-selected').removeClass('ui-selected');
}
 setTimeout(function(){
 $('#elementos_'+elemento_original).addClass('ativo').trigger('click');
 gpc_controle['elementos_iniciados']['elemento']['target'] = $('#elementos_'+elemento_original)[0];
 gpc_controle['elementos_iniciados']['elemento'].updateRect();
 gpc_controle['elementos_iniciados']['elemento'].selfElement.style.opacity = 1;
},300);
 $('#gpc-blocos_editor-blocos').removeClass('administrador_borrar').removeAttr('style');
 $('.'+gpc_controle['classe_bloco_configurar']).remove();
}else if ($('#site').length){
 if($('#site').closest('.gmf').length){$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
 else{$('#site').removeClass('site_borrar').removeAttr('style');}
}else{$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
}
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){$('#gpc-blocos_editor').removeClass('body_bloquear');}
 else{$('body').removeClass('body_bloquear body_bloquear_site');}
}
 
 if($('.gm_fundo').length == 1){
 if(componente == 'gpc_modal'){document.getElementById("gpc-blocos").scrollTop = parseFloat(gm.attr('gm_scroll'))+$('#gpc-blocos').offset().top;}
 else if(window.gScrollSet){window.gScrollSet(parseFloat(gm.attr('gm_scroll'))||0, false);}
 else{window.scroll({top:gm.attr('gm_scroll'), behavior:"auto"});}
}
 
 gm.remove();gm_fundo.remove();
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':''});}
 if(componente == 'gpc_modal'){
 ElementosBind('todos','reiniciar');
 setTimeout(function(){
 if(typeof gpc_controle['elementos_iniciados']['elemento'] == 'object'){
 
 if(Object.keys(gpc_controle['elementos_iniciados']).length){
 $.each(gpc_controle['elementos_iniciados'], function (i, elemento_iniciado){
 if(typeof gpc_controle['elementos_iniciados'][i].updateRect == 'function'){gpc_controle['elementos_iniciados'][i].updateRect();}
});
}
}
},25);
}
},200);
}
}
 function PulsarGM(id_gm){
 $('#'+id_gm).addClass('gm_pulsar');
 setTimeout(function(){$('#'+id_gm).removeClass('gm_pulsar');},100);
}
 $(function(){
 $('body').on('click','.gm_fundo',function(){if ($(this).attr('gm_fundo_acao') == 'pulsar'){PulsarGM($(this).attr('gm_id'));}else if ($(this).attr('gm_fundo_acao') == 'fechar'){FecharGM($(this).attr('gm_id'));}});
 $('body').on('click','.gm_fechar',function(){FecharGM($(this).attr('gm_id'));});
});
'use strict';

var GModalApproval = function(){
 var _handlerBotaoEditar = null;
 var _handlerBotaoConfigurar = null;
 var _handlerBotaoConfirmar = null;
 var _handlerBotaoFechar = null;
 return{
 
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('barra') == false){configuracao.barra = '';}
 
 if (configuracao.barra != ''){
 
 if(GModalApproval.preferencias() == null){GModalApproval.barra(configuracao);}
 else{
 GModalApproval.botao(configuracao);
 GModalApproval.instalar_scripts(configuracao,false);
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 500);
}
},
 
 barra :function(configuracao){
 
 if (configuracao.barra.hasOwnProperty('fechar') == false){configuracao.barra.fechar = false;}
 if (configuracao.barra.hasOwnProperty('cor') == false){configuracao.barra.cor = 'ffffff';}
 if (configuracao.barra.hasOwnProperty('classe') == false){configuracao.barra.classe = '';}
 if (configuracao.barra.hasOwnProperty('botao_configurar') == false){configuracao.barra.botao_configurar = false;}
 if (configuracao.barra.hasOwnProperty('botao_aceitar') == false){configuracao.barra.botao_aceitar = 'Entendi e aceito';}
 if (configuracao.barra.hasOwnProperty('texto') == false){configuracao.barra.texto = 'Usamos cookies para personalizar conteúdos e melhorar a sua experiência.';}
 
 var barra = '<div id="gpc-lgpd_texto">'+configuracao.barra.texto+'</div>';
 barra += '<div id="gpc-lgpd_botoes">';
 if(configuracao.barra.botao_configurar){barra += '<div id="gpc-lgpd_botoes-configurar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_configurar+'</div>';}
 barra += '<div id="gpc-lgpd_botoes-confirmar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_aceitar+'</div>';
 barra += "</div>";
 if(configuracao.barra.fechar){barra += '<div id="gpc-lgpd_fechar"></div>';}
 
 var g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd';
 g_lgpd.className = 'posicionar gpc-lgpd-cor_'+configuracao.barra.cor+' '+(configuracao.barra.botao_configurar ? 'botoes' :'botao')+' '+configuracao.barra.classe;
 g_lgpd.innerHTML = barra;
 document.body.appendChild(g_lgpd);
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
},
 botao :function(configuracao){
 
 if(configuracao.barra.hasOwnProperty('editar_consentimento') == false){configuracao.barra.editar_consentimento = true;}
 if(configuracao.barra.editar_consentimento){
 var g_lgpd = document.getElementById("gpc-lgpd_editar");
 if(g_lgpd == null){
 
 g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd_editar';
 g_lgpd.className = 'posicionar gtt-direita gpc-lgpd-cor_'+configuracao.barra.cor+' '+configuracao.barra.classe;
 g_lgpd.setAttribute('data-gtt','Preferências de cookies');
 document.body.appendChild(g_lgpd);
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
}
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 200);
},
 modal :function(configuracao){
 
 GLoading.carregar({'ativar':true});
 
 var conteudo = '';
 if (configuracao.hasOwnProperty('textos') == false){configuracao.textos = '';}
 if (configuracao.hasOwnProperty('opcoes') == false){configuracao.opcoes = '';}
 
 if(configuracao.textos != ''){
 conteudo += '<div id="gpc_modal_lgpd-titulo">';
 for (var i = 0;i < configuracao.textos.length;i++){
 if(configuracao.textos[i].tipo == 'titulo'){conteudo += '<div class="gpc_modal_lgpd-titulo-titulo">'+configuracao.textos[i].texto+'</div>';}
 if(configuracao.textos[i].tipo == 'texto'){conteudo += '<div class="gpc_modal_lgpd-titulo-texto">'+configuracao.textos[i].texto+'</div>';}
}
 conteudo += '</div>';
}
 if(configuracao.opcoes != ''){
 var cookie = GModalApproval.preferencias() || 'o:1&e:0&m:0';
 for (var i = 0;i < configuracao.opcoes.length;i++){
 if (configuracao.opcoes[i].hasOwnProperty('aviso') == false){configuracao.opcoes[i].aviso = '';}
 if (configuracao.opcoes[i].hasOwnProperty('titulo') == false){configuracao.opcoes[i].titulo = '';}
 if (configuracao.opcoes[i].hasOwnProperty('texto') == false){configuracao.opcoes[i].texto = '';}
 conteudo += '<div class="gpc_modal_lgpd-opcoes">';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-protecao">';
 conteudo += '<span class="gpc_modal_lgpd-opcoes-titulo">'+configuracao.opcoes[i].titulo+'</span>';
 if(configuracao.opcoes[i].aviso != ''){conteudo += '<span class="gpc_modal_lgpd-opcoes-aviso">'+configuracao.opcoes[i].aviso+'</span>';}
 else{
 if(cookie){configuracao.opcoes[i].valor = (cookie.indexOf(configuracao.opcoes[i].id+':1') !== -1 ? true :false);}
 conteudo += '<span id="'+configuracao.opcoes[i].id+'" class="gpc_modal_lgpd-opcoes-selecao'+(configuracao.opcoes[i].valor ? ' gpc_modal_lgpd-opcoes-selecao_selecionado' :'')+'"><span class="marcador"></span></span>';
}
 conteudo += '</div>';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-texto">'+configuracao.opcoes[i].texto+'</div>';
 conteudo += '</div>';
}
}
 conteudo += '<div id="gpc_modal_lgpd-confirmar">Confirmar configurações</div>';
 
 var modal ={
 'gm' :{
 'conteudos' :{
 'topo' :{'conteudo' :"<div id='gpc_modal_popup_lgpd-topo-fechar' class='gpc_modal_popup_lgpd-topo-fechar gpc_modal_popup-fechar icone-fechar'></div>", 'estilos' :'', 'extras' :''},
 'centro' :{'conteudo' :conteudo, 'estilos' :'', 'extras' :''}
},
 'classes' :'gm_lgpd',
 'estilos' :'max-width:420px;',
 'extras' :''
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div id='gpc_modal_popup-fundo-fechar' class='gpc_modal_popup-fundo-fechar gpc_modal_popup-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal_lgpd-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar" id="gpc_modal_lgpd-fundo"'
}
};
 
 gm_quantidade++;
 AbrirGM('gpc_modal_lgpd_'+gm_quantidade, 'gpc_modal_popup_lgpd',modal);
 
 GLoading.carregar({'ativar':false});
 var lgpd = document.getElementById("gpc-lgpd");
 if(lgpd == null){lgpd = document.getElementById("gpc-lgpd_editar");}
 lgpd.classList.add('posicionar');
 lgpd.classList.remove('posicionado');
 setTimeout(function(){
 
 var botao_confirmar = document.getElementById("gpc_modal_lgpd-confirmar");
 if(botao_confirmar != null){botao_confirmar.addEventListener("click", function(){GModalApproval.confirmar(configuracao);});}
 var fechar1 = document.getElementById("gpc_modal_popup_lgpd-topo-fechar");
 if(fechar1 != null){
 fechar1.addEventListener("click", function(){
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 GModalApproval.posicionar();
});
}
 var fechar2 = document.getElementById("gpc_modal_popup-fundo-fechar");
 if(fechar2 != null){fechar2.addEventListener("click", function(){GModalApproval.posicionar();});}
 var fechar3 = document.getElementById("gpc_modal_lgpd-fundo");
 if(fechar3 != null){fechar3.addEventListener("click", function(){GModalApproval.posicionar();});}
 var opcoes = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 if(opcoes != null){
 for (var i = 0;i < opcoes.length;i++){
 opcoes[i].addEventListener("click", function(e){
 if(this.classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){this.classList.remove('gpc_modal_lgpd-opcoes-selecao_selecionado');}
 else{this.classList.add('gpc_modal_lgpd-opcoes-selecao_selecionado');}
});
}
}
},400);
},
 posicionar :function(){
 var g_lgpd = document.getElementById("gpc-lgpd");
 if(g_lgpd == null){g_lgpd = document.getElementById("gpc-lgpd_editar");}
 if(g_lgpd){
 g_lgpd.classList.add('posicionado');
 g_lgpd.classList.remove('posicionar');
}
},
 
 configurar :function(configuracao){
 
 var botao_editar = document.getElementById("gpc-lgpd_editar");
 if(botao_editar){
 if(_handlerBotaoEditar){botao_editar.removeEventListener("click", _handlerBotaoEditar);}
 _handlerBotaoEditar = function(){GModalApproval.modal(configuracao);};
 botao_editar.addEventListener("click", _handlerBotaoEditar);
}
 
 var botao_configurar = document.getElementById("gpc-lgpd_botoes-configurar");
 if(botao_configurar){
 if(_handlerBotaoConfigurar){botao_configurar.removeEventListener("click", _handlerBotaoConfigurar);}
 _handlerBotaoConfigurar = function(){GModalApproval.modal(configuracao);};
 botao_configurar.addEventListener("click", _handlerBotaoConfigurar);
}
 
 var botao_confirmar = document.getElementById("gpc-lgpd_botoes-confirmar");
 if(botao_confirmar){
 if(_handlerBotaoConfirmar){botao_confirmar.removeEventListener("click", _handlerBotaoConfirmar);}
 _handlerBotaoConfirmar = function(){GModalApproval.confirmarTodos(configuracao);};
 botao_confirmar.addEventListener("click", _handlerBotaoConfirmar);
}
 
 var botao_fechar = document.getElementById("gpc-lgpd_fechar");
 if(botao_fechar){
 if(_handlerBotaoFechar){botao_fechar.removeEventListener("click", _handlerBotaoFechar);}
 _handlerBotaoFechar = function(){GModalApproval.cancelarTodos(configuracao);};
 botao_fechar.addEventListener("click", _handlerBotaoFechar);
}
},
 confirmar :function(configuracao){
 
 var valor = 'o:1';
 
 var elementos = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 let editado = false;
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 valor += '&'+elementos[i].id+':'+(elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado') ? '1' :'0');
 if (elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao') == true){
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if (configuracao.opcoes[x].id == elementos[i].id){
 if(configuracao.opcoes[x].valor != elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){editado = true;}
 configuracao.opcoes[x].valor = elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado');
}
}
}
}
}
 configuracao.editado = editado;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 
 
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 
 var elemento = document.getElementById('gpc-lgpd');
 if (elemento != null){
 
 elemento.remove();
 
 GModalApproval.botao(configuracao);
}
 
 GModalApproval.posicionar();
 
 GModalApproval.remover_preferencias(configuracao);
},
 confirmarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = true;
 valor += '&'+configuracao.opcoes[x].id+':1';
}
}
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 configuracao.editado = true;
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 cancelarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = false;
 valor += '&'+configuracao.opcoes[x].id+':0';
}
}
 configuracao.editado = true;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 
 preferencias :function(){
 
 var strNomeIgual = "gpages_cookies=";
 var cookie_array = document.cookie.split(';');
 
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf(strNomeIgual) != -1){return cookie_string.substring(strNomeIgual.length, cookie_string.length);}
}
 
 return null;
},
 salvar_preferencias :function(preferencias, dominio){
 
 if (dominio == undefined){dominio = '';}
 var data = new Date();
 
 data.setTime(data.getTime() + (365 * 24 * 60 * 60 * 1000));
 console.log("gpages_cookies=" + preferencias + ";Expires=" + data.toGMTString() + ";Path=/;"+(dominio ? ' Domain='+dominio :''));
 document.cookie = "gpages_cookies=" + preferencias + ";Expires=" + data.toGMTString() + ";Path=/;"+(dominio ? ' Domain='+dominio :'');
 
 return true;
},
 remover_preferencias :function(configuracao){
 
 if(configuracao.editado){
 var cookie_array = document.cookie.split(';');
 var cookies_limpos = '';
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf('gpages_') === -1){cookies_limpos += cookie_string.substring(0,cookie_string.indexOf('='))+"=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;"+(configuracao.dominio ? ' Domain='+configuracao.dominio :'');}
 else{cookies_limpos += cookie_string;}
}
 document.cookie = cookies_limpos;
 
 setTimeout(function(){document.location.reload(true);},100);
}
},
 
 instalar_scripts :function(configuracao,loader){
 if(loader == undefined){loader = true;}
 
 let cookie = GModalApproval.preferencias() || 'o:1&e:0&m:0';
 
 if(configuracao.opcoes != ''){for (var x = 0;x < configuracao.opcoes.length;x++){configuracao.opcoes[x].valor = (cookie.indexOf(configuracao.opcoes[x].id+':1') !== -1 ? true :false);}}
 if(configuracao.hasOwnProperty('opcoes')){
 let total = Object.entries(configuracao.opcoes).length;
 for (var i = 0;i < total;i++){
 if((configuracao.opcoes[i].valor == true || configuracao.opcoes[i].valor == 'true') && configuracao.opcoes[i].hasOwnProperty('codigos')){
 let scripts = configuracao.opcoes[i]['codigos']();
 let total_scripts = Object.entries(scripts).length;
 if(total_scripts){
 let tipo = '_'+configuracao.opcoes[i]['id'];
 $('.gle_css'+tipo).removeClass('gle_css'+tipo).addClass('gle_css');
 $('.gle_scripts'+tipo).removeClass('gle_scripts'+tipo).addClass('gle_scripts');
 Object.entries(scripts).forEach(([key, value]) =>{
 if(scripts[key].hasOwnProperty('html')){
 let div = document.createElement("div");
 div.innerHTML = scripts[key]['html'];
 document.body.appendChild(div);
}
 setTimeout(function(){
 if(scripts[key].hasOwnProperty('js_interno')){
 let total_js_interno = Object.entries(scripts[key]['js_interno']).length;
 for (let y = 0;y < total_js_interno;y++){
 let script = document.createElement("script"), conteudo = scripts[key]['js_interno'][y].toString();
 conteudo = conteudo.substr(11,conteudo.length);
 conteudo = conteudo.substr(0,(conteudo.length-1));
 script.innerHTML = conteudo;
 document.body.appendChild(script);
}
}
},50);
});
}
}
}
 if(loader){GreatLoader('atualizar');}
}
}
};
}();




'use strict';

var GTooltip = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('direcao') == false){configuracao.direcao = 'cima';}
 if (configuracao.direcao != 'cima' && configuracao.direcao != 'baixo' && configuracao.direcao != 'direita' && configuracao.direcao != 'esquerda'){configuracao.direcao = 'cima';}
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 elementos[i].addEventListener('mouseenter', function(){GTooltip.adicionar(this, configuracao.direcao);}, false);
 elementos[i].addEventListener('mouseout', function(){GTooltip.remover(this);}, false);
}
}
}
},
 adicionar :function(elemento, direcao){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.createElement("div");
 gtt.className = 'gtt_caixa gtt_caixa-'+direcao;
 gtt.innerHTML = '<span class="gtt_caixa-seta"></span><span class="gtt_caixa-conteudo">'+elemento.dataset.gtt+'</span>';
 document.body.appendChild(gtt);
 
 var pagina_offset = window.scrollY || window.pageYOffset;
 var elemento_offset = elemento.getBoundingClientRect();
 var gtt_width = parseFloat(getComputedStyle(gtt).width.replace("px", ""));
 var gtt_height = parseFloat(getComputedStyle(gtt).height.replace("px", ""));
 let caixa = document.querySelector('.gmf');
 let drawer = document.querySelector('#gpc-menu');
 let zindex = '';
 if(drawer != null){zindex = 9999999999999+1;}
 if(caixa != null){zindex = caixa.style.zIndex+1;}
 gtt.style.zIndex = zindex;
 
 if (direcao == 'cima'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top-gtt_height))-10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.zIndex = zindex;
 gtt_seta.style.bottom = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'baixo'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+elemento.offsetHeight))+10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.zIndex = zindex;
 gtt_seta.style.top = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'esquerda'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left-gtt_width)-10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.zIndex = zindex;
 gtt_seta.style.right = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}else if (direcao == 'direita'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left+elemento.offsetWidth)+10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.zIndex = zindex;
 gtt_seta.style.left = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}
}
},
 remover :function(elemento){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.body.querySelector('.gtt_caixa');
 
 if(gtt != null || window.navigator.sayswho.toLowerCase().indexOf('ie') !== false){gtt.remove();}
}
}
};
}();gqa_status = false;
var gqa_fila = [];
var gqa_executando = false;

function ControlarFilaGQA(){
 
 if (gqa_executando){clearTimeout(gqa_executando);}
 
 gqa_executando = setInterval(function(){ExecutarFilaGQA();}, (document.hidden) ? 8000 :100);
}



function AdicionarFilaGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 else{
 if(typeof parametros.uri == 'object' || typeof parametros.uri == 'array'){
 parametros.uri = FormatarUriGQA(parametros.uri);
}
}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 
 if (parametros.prioridade == 'alta'){
 
 EnviarAjaxGQA(parametros);
}else if (parametros.prioridade == 'media'){
 
 gqa_fila.unshift([parametros]);
}else if (parametros.prioridade == 'baixa'){
 
 gqa_fila.push([parametros]);
}
}
function ExecutarFilaGQA(){
 if (gqa_status == false && gqa_fila.length){
 
 var proximo = gqa_fila.shift();
 
 gqa_status = true;
 
 EnviarAjaxGQA(proximo[0])
}
}
function EnviarAjaxGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 if (parametros.hasOwnProperty('externo') == false){parametros.externo = false;}
 if (parametros.hasOwnProperty('funcao_erro') == false){parametros.funcao_erro = '';}
 if (parametros.hasOwnProperty('funcao_sucesso') == false){parametros.funcao_sucesso = '';}
 
 if (parametros.carregar == true){GLoading.carregar({'ativar':true});}
 
 if (parametros.verbo == 'POST'){
 var url = parametros.url;
 var dados = parametros.uri;
}else{
 if (parametros.uri){
 var url = parametros.url+'?'+parametros.uri;
}else{var url = parametros.url;}
 var dados = '';
}
 
 var requisicao = new XMLHttpRequest();
 requisicao.open(parametros.verbo, url, true);
 requisicao.timeout = parametros.timeout;
 if (parametros.extensao){requisicao.responseType = parametros.extensao;}
 requisicao.withCredentials = true;
 requisicao.overrideMimeType("application/"+parametros.extensao);
 if (parametros.verbo == 'POST'){
 requisicao.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
 if (parametros.externo){
 requisicao.withCredentials = false;
 requisicao.setRequestHeader('Content-Type', "application/json");
 requisicao.setRequestHeader('Access-Control-Allow-Origin', '*');
 requisicao.setRequestHeader('Access-Control-Allow-Headers', "*");
 requisicao.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
}
 requisicao.onreadystatechange = function(){
 if (this.readyState == 4){
 if (this.status >= 200 && this.status < 400){
 
 if (this.responseType == 'json'){
 var resposta = this.response;
}else if (this.responseType == 'text' || this.responseType == ''){
 var resposta = this.responseText;
}else{
 var resposta = this.response;
}
 
 if (parametros.funcao_sucesso){parametros.funcao_sucesso(resposta);}
 
 GLoading.carregar({'ativar':false});
 
 gqa_status = false;
}else{
 
 if (parametros.funcao_erro){parametros.funcao_erro(this);}
 
 GLoading.carregar({'ativar':false});
 
 
 
 gqa_status = false;
}
}
};
 requisicao.send(dados);
 requisicao = null;

 

 
}
function FormatarUriGQA(post, prefixo){
 var retorno = [], post_chave, post_valor;
 for(var p in post){
 if (!post.hasOwnProperty(p)){continue;}
 if (~p.indexOf('[')){post_chave = prefixo ? prefixo + "[" + p.substring(0, p.indexOf('[')) + "]" + p.substring(p.indexOf('[')) :p;}
 else{post_chave = prefixo ? prefixo + "[" + p + "]" :p;}
 post_valor = post[p];
 retorno.push(typeof post_valor == "object" ? FormatarUriGQA(post_valor, post_chave) :encodeURIComponent(post_chave) + "=" + encodeURIComponent(post_valor));
}
 return retorno.join("&");
}
$(function(){
 
 if(document.addEventListener){document.addEventListener("visibilitychange", ControlarFilaGQA);}
 
 ControlarFilaGQA();
});'use strict';

var go_elementos = [];

var GObserver = function(){
 return{
 iniciar :function (){
 
 window.addEventListener('resize', function(){GObserver.observar(true);}, false);
 window.addEventListener('scroll', function(){GObserver.observar(true);}, false);
 document.addEventListener('scroll', function(){GObserver.observar(true);}, true);
},
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('antecipacao') == false){configuracao.antecipacao = 0;}
 if (configuracao.hasOwnProperty('executar') == false){configuracao.executar = '';}
 
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 if (elementos[i].id){
 
 var instalar ={
 'elemento' :elementos[i],
 'antecipacao' :configuracao.antecipacao,
 'executar' :configuracao.executar
};
 
 go_elementos.push(instalar);
}
}
 
 GObserver.observar(false);
}
}
},
 observar :function(antecipacao){
 
 if (go_elementos.length){
 
 var janela_top = window.scrollY || window.pageYOffset;
 var janela_bottom = janela_top+window.innerHeight;
 for(var i = 0;i < go_elementos.length;i++){
 
 var antecipar = (antecipacao == true ? go_elementos[i].antecipacao :0);
 var elemento = go_elementos[i].elemento;
 if (elemento !== null && elemento !== undefined && elemento.isConnected){
 var elemento_estilo = window.getComputedStyle(elemento);
 if (elemento_estilo.display !== 'none'){
 var elemento_top = elemento.getBoundingClientRect().top+janela_top;
 var elemento_bottom = elemento_top+elemento.clientHeight;
 
 if (elemento_bottom >= janela_top && (elemento_top-antecipar) <= janela_bottom){
 
 (function(index){go_elementos[index].executar(go_elementos[index].elemento);})(i);
 
 go_elementos.splice(i, 1);
 
 this.observar(antecipacao);break;
}
}
}
}
}
}
};
}();


GObserver.iniciar();

 elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2084b354318634':{'desktop':140.469, 'mobile':182.873}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2087b663987682':{'desktop':191.528, 'mobile':255.255}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b208bb691685328':{'desktop':404.528, 'mobile':623.111}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20943937721841':{'desktop':401.699, 'mobile':216.942993}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20986237506949':{'desktop':213.106, 'mobile':86.394997}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b209b8400400728':{'desktop':155.191, 'mobile':214.302}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20a09410990974':{'desktop':155.191, 'mobile':214.302}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20a44060516655':{'desktop':155.191, 'mobile':214.302}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20a7c608729650':{'desktop':155.191, 'mobile':214.302}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b20ab1241718451':{'desktop':155.191, 'mobile':214.302}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21058413570886':{'desktop':-0.0999999, 'mobile':314.06}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2128b473160511':{'desktop':45.533, 'mobile':23}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b212de830996015':{'desktop':43.733, 'mobile':45.498}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2137a656265665':{'desktop':42.033, 'mobile':32}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2145b671632931':{'desktop':99.922, 'mobile':83.347}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2152b803634325':{'desktop':525.386, 'mobile':820.38}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b215b0084060413':{'desktop':151.352997, 'mobile':193.492249}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21624951696487':{'desktop':178.66, 'mobile':181.597}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2167e102053572':{'desktop':178.66, 'mobile':601.566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b216d0924882037':{'desktop':178.68, 'mobile':1021.54}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21725695539348':{'desktop':178.72, 'mobile':1441.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21780761355401':{'desktop':440.978, 'mobile':443.598}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b217d5961613652':{'desktop':491.207, 'mobile':493.597}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21832401084506':{'desktop':460.586, 'mobile':463.598}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2188f688834170':{'desktop':440.778, 'mobile':863.566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b218e7617881219':{'desktop':491.007, 'mobile':913.566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21946404751912':{'desktop':460.385, 'mobile':883.566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b219aa795321910':{'desktop':440.978, 'mobile':1283.54}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21a04000043658':{'desktop':491.207, 'mobile':1333.54}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21a64654232473':{'desktop':460.586, 'mobile':1303.54}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21ac2730971497':{'desktop':441.178, 'mobile':1703.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21b26679488360':{'desktop':498.307007, 'mobile':1744.7}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21b97399962404':{'desktop':460.786, 'mobile':1713.14}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21bfb938897058':{'desktop':42.316, 'mobile':40.0254}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21c5a237483609':{'desktop':74.0195, 'mobile':79.7221}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21cbe195665946':{'desktop':134.76, 'mobile':176.839}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21d27007776357':{'desktop':134.76, 'mobile':176.521}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21d85243281338':{'desktop':134.76, 'mobile':391.81}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21de4378164689':{'desktop':134.76, 'mobile':391.889}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21e48091873040':{'desktop':134.76, 'mobile':606.037}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21eb7302908334':{'desktop':134.76, 'mobile':606.037}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21f55949810024':{'desktop':230.023, 'mobile':251.49}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b21ff3279409936':{'desktop':297.677002, 'mobile':303.887177}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22072274752683':{'desktop':229.664, 'mobile':251.209}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b220e2560225777':{'desktop':296.943, 'mobile':303.931}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22155448840485':{'desktop':229.054, 'mobile':465.716}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b221c4261527900':{'desktop':296.833, 'mobile':519.219}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22237748685086':{'desktop':229.344, 'mobile':465.796}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b222a2281931565':{'desktop':296.723, 'mobile':519.298}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22313089463991':{'desktop':229.985, 'mobile':680.951}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b223ad104568902':{'desktop':297.365, 'mobile':733.936}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2241f570955869':{'desktop':229.03, 'mobile':679.934}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22493734667618':{'desktop':296.407, 'mobile':733.437}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b225f4442169490':{'desktop':151.364, 'mobile':189.097}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22737483415006':{'desktop':151.362, 'mobile':619.171}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b227c9752194313':{'desktop':151.364, 'mobile':618.611}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2285d654490328':{'desktop':49.8982, 'mobile':40}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b22936658159991':{'desktop':81.5018, 'mobile':84.4141}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b23682927793000':{'desktop':154.918503, 'mobile':411.484375}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b23742459312435':{'desktop':153.918503, 'mobile':409.962494}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24284908443855':{'desktop':95.198, 'mobile':438.083}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24333999891801':{'desktop':130.286, 'mobile':488.509}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b243db853951043':{'desktop':210.203, 'mobile':568.926}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b244f5400852566':{'desktop':349.302, 'mobile':718.147}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b245ad992026176':{'desktop':348.253, 'mobile':813.917}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b247a7519291097':{'desktop':37.46, 'mobile':34.8}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24854523675419':{'desktop':69.064, 'mobile':76.37}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24903349580421':{'desktop':365.617, 'mobile':737.53}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b249db333973428':{'desktop':365.626, 'mobile':739.146}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24ab0550330062':{'desktop':390.828, 'mobile':760.146}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24e2d718260469':{'desktop':366.043, 'mobile':830.467}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24f21206650947':{'desktop':364.15, 'mobile':832.04}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b24fde187594526':{'desktop':391.251, 'mobile':854.117}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25297261176380':{'desktop':84.7225, 'mobile':266.148438}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2536f954962794':{'desktop':176.151993, 'mobile':336.336761}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25482194680877':{'desktop':266.533, 'mobile':443.582}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2557a500965025':{'desktop':334.033, 'mobile':764.18}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2567c603164932':{'desktop':333.587, 'mobile':765.78}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25749256463555':{'desktop':84.733, 'mobile':527.258}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25814449245010':{'desktop':110.546, 'mobile':546.95}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b258e0955836594':{'desktop':163.443, 'mobile':603.89}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b259ac616150215':{'desktop':141.764, 'mobile':585.891}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25a82376317523':{'desktop':232.933, 'mobile':663.711}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25b4c883359120':{'desktop':219.586, 'mobile':658.75}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25c20720493944':{'desktop':276.192, 'mobile':700.558}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25cea430276814':{'desktop':268.9, 'mobile':679.737}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25e07024310107':{'desktop':84.4425, 'mobile':155.769}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25ee6320193024':{'desktop':133.585, 'mobile':200.996}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b25fce770235879':{'desktop':25.429199, 'mobile':40}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b260a5879241271':{'desktop':56.0328, 'mobile':80.5703}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26185536921875':{'desktop':125.066, 'mobile':140.731}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2638e144393714':{'desktop':94.633003, 'mobile':67.107}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26495453199503':{'desktop':193.54, 'mobile':167.643}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2657b143563816':{'desktop':267.333, 'mobile':271.139}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2669c493074456':{'desktop':-0.5, 'mobile':34}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2677a310669553':{'desktop':33.3208, 'mobile':8.0115}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b268f6214220917':{'desktop':33.3, 'mobile':113.464}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b269bb271039506':{'desktop':33.1, 'mobile':224.549}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26a84230618912':{'desktop':138.5, 'mobile':461.142}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26b4f913388386':{'desktop':44.4, 'mobile':57.2072}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26c6d578686290':{'desktop':50.8771, 'mobile':64.2072}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b26d85416301071':{'desktop':76.014, 'mobile':89.2072}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27183456339438':{'desktop':44.293, 'mobile':157.431}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b272be575338007':{'desktop':50.167, 'mobile':165.231}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b273c9005190460':{'desktop':74.805, 'mobile':189.743}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b274e1332250882':{'desktop':43.593, 'mobile':270.006}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27620043089943':{'desktop':48.9701, 'mobile':275.006}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27712927910696':{'desktop':74.107, 'mobile':301.006}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2780d164966636':{'desktop':48.3714, 'mobile':382.353}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b2790d601984130':{'desktop':73.6112, 'mobile':409.916}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b279fd907679521':{'desktop':43.8, 'mobile':377.76}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27b77513421664':{'desktop':130.606, 'mobile':668.936}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27dc2013385155':{'desktop':148.608, 'mobile':680.056}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b27ee0803320462':{'desktop':196.903, 'mobile':714.322}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_17804982996a203f7b288e6605837835':{'desktop':185.222, 'mobile':491.673}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178049850690012492':{'desktop':84.4724, 'mobile':26.649994}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178049955404158466':{'desktop':42.5, 'mobile':30.6094}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178050112664376374':{'desktop':105.65, 'mobile':314.004669}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178050677192731058':{'desktop':-34.947, 'mobile':313.547}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178050772547835676':{'desktop':52.1719, 'mobile':39.980289}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178051882392025922':{'desktop':69.2812, 'mobile':52.875}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178051888597832423':{'desktop':46.2625, 'mobile':33.84375}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331138483':{'desktop':486.183, 'mobile':697.462}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331109957':{'desktop':539.242, 'mobile':744.696}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331124005':{'desktop':752.677, 'mobile':1054.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331149706':{'desktop':502.905, 'mobile':718.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331146924':{'desktop':502.905, 'mobile':718.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331109558':{'desktop':502.905, 'mobile':718.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331125201':{'desktop':502.905, 'mobile':718.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178118415331110079':{'desktop':502.905, 'mobile':718.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178119545930826304':{'desktop':215.188, 'mobile':341.79}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178119572869666054':{'desktop':29.5951, 'mobile':-120.625}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178119726277238468':{'desktop':629, 'mobile':1805.01}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178120581210364025':{'desktop':298.952, 'mobile':668.941}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178120581210365444':{'desktop':352.686, 'mobile':706.636}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178120582570022222':{'desktop':306.512, 'mobile':680.06}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178155081444097646':{'desktop':324.883, 'mobile':633.1}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178155084048822855':{'desktop':393.466, 'mobile':729.98}});elementos_posicao = Object.assign(elementos_posicao,{'e_3593306_1_178155101676323504':{'desktop':625, 'mobile':1067.34}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b20587':{'desktop':419, 'mobile':851.83}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2056f':{'desktop':650, 'mobile':907.640625}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2057a':{'desktop':720.938, 'mobile':1162.81}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2057f':{'desktop':721.656, 'mobile':1859.01}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2057d':{'desktop':426.948, 'mobile':848.84375}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b20583':{'desktop':557.496, 'mobile':938.359375}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b20585':{'desktop':859.094, 'mobile':1141.38}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2058c':{'desktop':383.748, 'mobile':518.640625}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b20589':{'desktop':344.016, 'mobile':553.828}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2058d':{'desktop':387, 'mobile':596.302}});blocos_posicao = Object.assign(blocos_posicao,{'b_3593306_1_17804982996a203f7b2058f':{'desktop':173, 'mobile':166.609}});elementos_css = Object.assign(elementos_css,{'e_3593306_1_17804982996a203f7b2087b663987682':{'fs':'11','lh':'1.6'},'e_3593306_1_17804982996a203f7b208bb691685328':{'fs':'16','lh':'1.6'},'e_3593306_1_17804982996a203f7b20943937721841':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b20986237506949':{'fs':'28','lh':'1.1'},'e_3593306_1_17804982996a203f7b2145b671632931':{'fs':'12','lh':'2'},'e_3593306_1_17804982996a203f7b2152b803634325':{'fs':'16','lh':'1.3'},'e_3593306_1_17804982996a203f7b217d5961613652':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b21832401084506':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b218e7617881219':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b21946404751912':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b21a04000043658':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b21a64654232473':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b21b26679488360':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b21b97399962404':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b21bfb938897058':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b21c5a237483609':{'fs':'28','lh':'1.2'},'e_3593306_1_17804982996a203f7b21f55949810024':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b21ff3279409936':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b22072274752683':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b220e2560225777':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b22155448840485':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b221c4261527900':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b22237748685086':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b222a2281931565':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b22313089463991':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b223ad104568902':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b2241f570955869':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b22493734667618':{'fs':'13','lh':'1.4'},'e_3593306_1_17804982996a203f7b2285d654490328':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b22936658159991':{'fs':'28','lh':'1.4'},'e_3593306_1_17804982996a203f7b24284908443855':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b24333999891801':{'fs':'32','lh':'1'},'e_3593306_1_17804982996a203f7b243db853951043':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b247a7519291097':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b24854523675419':{'fs':'28','lh':'1.4'},'e_3593306_1_17804982996a203f7b249db333973428':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b24ab0550330062':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b24f21206650947':{'fs':'16','lh':'1.4'},'e_3593306_1_17804982996a203f7b24fde187594526':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b25297261176380':{'fs':'26','lh':'1'},'e_3593306_1_17804982996a203f7b2536f954962794':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b25482194680877':{'fs':'16','lh':'1.3'},'e_3593306_1_17804982996a203f7b2567c603164932':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b25814449245010':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b258e0955836594':{'fs':'38','lh':'1'},'e_3593306_1_17804982996a203f7b259ac616150215':{'fs':'62','lh':'1'},'e_3593306_1_17804982996a203f7b25a82376317523':{'fs':'16','lh':'1'},'e_3593306_1_17804982996a203f7b25b4c883359120':{'fs':'26','lh':'1'},'e_3593306_1_17804982996a203f7b25c20720493944':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b25e07024310107':{'fs':'26','lh':'1.4'},'e_3593306_1_17804982996a203f7b25ee6320193024':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b25fce770235879':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b260a5879241271':{'fs':'28','lh':'1.4'},'e_3593306_1_17804982996a203f7b2638e144393714':{'fs':'28','lh':'1'},'e_3593306_1_17804982996a203f7b26495453199503':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b2657b143563816':{'fs':'16','lh':'1.3'},'e_3593306_1_17804982996a203f7b26c6d578686290':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b26d85416301071':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b272be575338007':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b273c9005190460':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b27620043089943':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b27712927910696':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b2780d164966636':{'fs':'18','lh':'1.4'},'e_3593306_1_17804982996a203f7b2790d601984130':{'fs':'14','lh':'1.4'},'e_3593306_1_17804982996a203f7b27dc2013385155':{'fs':'19','lh':'1.4'},'e_3593306_1_17804982996a203f7b27ee0803320462':{'fs':'11','lh':'1.4'},'e_3593306_1_17804982996a203f7b288e6605837835':{'fs':'16','lh':'1.4'},'e_3593306_1_178118415331109957':{'fs':'11','lh':'1.6'},'e_3593306_1_178118415331124005':{'fs':'16','lh':'1.6'},'e_3593306_1_178119545930826304':{'fs':'14','lh':'1.4'},'e_3593306_1_178119726277238468':{'fs':'16','lh':'1.3'},'e_3593306_1_178120581210365444':{'fs':'11','lh':'1.4'},'e_3593306_1_178120582570022222':{'fs':'19','lh':'1.4'},'e_3593306_1_178155081444097646':{'fs':'28','lh':'1.4'},'e_3593306_1_178155084048822855':{'fs':'14','lh':'1.4'},'e_3593306_1_178155101676323504':{'fs':'16','lh':'1.3'}});(function(){if(window.__gLinkInterno)return;window.__gLinkInterno=1;var find=function(b){if(!b)return null;var k=String(b).replace(/^bloco_/,'');return document.querySelector('[data-bid="'+k+'"]')||document.getElementById(b)||document.getElementById('b_'+k)||document.getElementById(k);};document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('.link_interno'):null;if(!a)return;e.preventDefault();var d=a.getAttribute('data-bloco'),m=a.getAttribute('data-bloco-mobile');var t=(window.innerWidth<720&&m)?(find(m)||find(d)):find(d);if(!t)return;var y=t.getBoundingClientRect().top+(window.gScrollTop?window.gScrollTop():(window.pageYOffset||0))-60;if(window.gScrollSet){window.gScrollSet(y,true);}else{window.scroll({top:y,behavior:'smooth'});}},true);})();function InserirScriptsInline(){if(!window.getCrawler()){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);if(typeof window.gtag === 'undefined'){window.gtag = function(){window.dataLayer.push(arguments);}}})(window,document,'script','dataLayer','GTM-PTHHVRRJ');
}}var scripts_estatisticas ={}, scripts_marketing ={};
