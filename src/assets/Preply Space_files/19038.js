var AWIN=AWIN||{};AWIN.Tracking=AWIN.Tracking||{},AWIN.sProtocol="https:"==location.protocol?"https://":"http://",AWIN.iScriptCount=0,AWIN.Tracking.device9Url="https://the.sciencebehindecommerce.com/d9core",AWIN.tldDomains=["com","org","edu","gov","uk","net","ca","de","jp","fr","au","us","ru","ch","it","nl","se","no","es","mil","gw","ax","wf","yt","sj","mobi","eh","mh","bv","ap","cat","kp","iq","um","arpa","pm","gb","cs","td","so","aero","biz","coop","info","jobs","museum","name","pro","travel","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","aw","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bw","by","bz","cc","cd","cf","cg","ci","ck","cl","cm","cn","co","cr","cu","cv","cx","cy","cz","dj","dk","dm","do","dz","ec","ee","eg","er","et","eu","fi","fj","fk","fm","fo","ga","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","ir","is","je","jm","jo","ke","kg","kh","ki","km","kn","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","mg","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pn","pr","ps","pt","pw","py","qa","re","ro","rw","sa","sb","sc","sd","sg","sh","si","sk","sl","sm","sn","sr","st","sv","sy","sz","tc","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uy","uz","va","vc","ve","vg","vi","vn","vu","ws","ye","yu","za","zm","zw"],AWIN.twoPartsTldDomains=["co.bb","co.ck","co.cr","co.in","co.id","co.il","co.jp","co.nz","co.za","co.kr","co.th","co.uk","org.uk","net.uk","com.pl","biz.pl","net.pl","com.cl","com.pe","com.ar","com.au","com.br"],AWIN.Tracking.fingerprinting=function(e){if(!document.getElementById("d9tag")){var n=AWIN.Tracking.getQueryVarValue("mtfp",document.location.search.substring(1));if(AWIN.Tracking.device9&&"no"!=n){window.D9v=e;var r=document.createElement("script");r.type="text/javascript",r.id="d9tag",r.async=!0,r.src=AWIN.Tracking.device9Url;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t)}}},AWIN.Tracking.digestClickId=function(e){if(!/\d+_\d+_.+/.test(e))return!1;var n=e.split("_"),r={};return r.sName="_aw_m_"+n[0],r.sContents=e,r},AWIN.Tracking.getQueryVarValue=function(e,n){for(var r=n.split("&"),t=0;t<r.length;t++){var a=r[t].split("=");if(e.toLowerCase()==a[0].toLowerCase())return a[1]}},AWIN.Tracking.getAnchorValue=function(e){var n=document.location.hash.substring(1);if(n)return aid=n.match(e),aid?aid.toString().substr(4):null},AWIN.Tracking.buildQueryString=function(e){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"="+encodeURIComponent(e[r]));return n.join("&")},AWIN.Tracking._getDomain=function(){return document.domain},AWIN.Tracking._getCookieDomain=function(){if(void 0!==AWIN.Tracking.cookieDomain)return AWIN.Tracking.cookieDomain;var e=AWIN.Tracking._getDomain();if(e.split(".").length<3)return"."+e;var n=e.split(".").slice(-2).join(".");if(AWIN.twoPartsTldDomains.indexOf(n)>=0)return"."+e.split(".").slice(-3).join(".");var r=e.split(".").pop();return AWIN.tldDomains.indexOf(r)>=0?"."+e.split(".").slice(-2).join("."):"www."==e.substr(0,4)?e.substr(3):"."+e},AWIN.Tracking._getAWCValue=function(){for(var e,n=/[\?&]awc=(\d+_(\d+)_[0-9a-f]+)/gi,r=0,t=!1;e=n.exec(AWIN.Tracking._getBrowserSearchBarUrl());)r<e[2]&&(r=e[2],t=e[1]);return t||AWIN.Tracking.getAnchorValue(/awc=[0-9a-z_]+/i)},AWIN.Tracking._getAWaidValue=function(){var e=/[\?&]awaid=(\d+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getGCLIDValue=function(){var e=/[\?&]gclid=([0-9a-zA-Z_\-]+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getBrowserSearchBarUrl=function(){return document.location.search},AWIN.Tracking._getATPValue=function(){var e=AWIN.Tracking.getQueryVarValue("atp",document.location.search.substring(1));return e?parseInt(e):AWIN.Tracking.getAnchorValue(/atp=[0-9]+/i)?parseInt(parseanchorAtp):0},AWIN.Tracking.setCookie=function(e,n,r){var t=!1;if(AWIN.Tracking.Consent.getSnRegEx().test(e)?t=!0:AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getConsent()||(t=!0),t){var a=new Date;a.setTime(a.getTime()+31536e6),r&&a.setTime(1e3*r);var i="; expires="+a.toGMTString();document.cookie=e+"="+n+i+"; path=/;domain="+this._getCookieDomain()}},AWIN.Tracking.setAWCCookie=function(){var e=AWIN.Tracking._getAWCValue();if(!/\d+_\d+_.+/.test(e))return!1;var n="_aw_m_"+e.split("_")[0];AWIN.Tracking.setCookie(n,e),AWIN.Tracking._getATPValue()>0&&AWIN.Tracking.setCookie("_aw_atp",AWIN.Tracking._getATPValue())},AWIN.Tracking.setGCLIDCookie=function(){var e=AWIN.Tracking._getGCLIDValue(),n=AWIN.Tracking._getAWaidValue();return null!==e&&null!==n&&(AWIN.Tracking.setCookie("_aw_m_"+n,"gclid_"+n+"_"+e),!0)},AWIN.Tracking.setIncentiveCookie=function(){var e=AWIN.Tracking._getAWCValue();if(!/\d+_\d+_.+/.test(e))return!1;var n="_aw_sn_"+e.split("_")[0];AWIN.Tracking.setCookie(n,e)},AWIN.Tracking.setAidCookie=function(){var e=AWIN.Tracking.getQueryVarValue("xid",document.location.search.substring(1));e||(e=AWIN.Tracking.getAnchorValue(/xid=\d+/)),e&&AWIN.Tracking.setCookie("_aw_xid",e)},AWIN.Tracking.getAffiliateId=function(){return AWIN.Tracking.getCookiesAsString(/_aw_xid/)},AWIN.Tracking.getSaleChannel=function(){return void 0!==AWIN.Tracking.Sale.channel?AWIN.Tracking.Sale.channel:""},AWIN.Tracking.cookiesWereSpecifiedByMerchant=function(){if(AWIN.Tracking.Sale&&AWIN.Tracking.Sale.click){if(/\d+_\d+_.+/.test(AWIN.Tracking.Sale.click))return!0}return!1},AWIN.Tracking.getCookiesAsString=function(e){var n,r="",t=!AWIN.Tracking.Consent.getConsentIsRespected()||AWIN.Tracking.Consent.getConsent(),a=!1;if(e||(e=/_aw_m_\d+/,n=AWIN.Tracking.Consent.getSnRegEx(),a=!0),a||t){for(var i=[],c=document.cookie.split(";"),o=0;o<c.length;o++){var s=c[o].split("=");e.test(s[0])?t&&i.push(s[1]):a&&n.test(s[0])&&(i.push(s[1]),AWIN.Tracking.Consent.setIsSnCookieAvailable())}i.length>0&&(r=i.toString().replace(" ",""))}return r},AWIN.Tracking.getScriptAppendNode=function(){var e=["body","head","html"];for(var n in e)if(document.getElementsByTagName(e[n])[0])return document.getElementsByTagName(e[n])[0]},AWIN.Tracking.frameAppend=function(e){if(document.getElementsByTagName("body")[0]){var n=document.createElement("iframe");n.src=e,document.getElementsByTagName("body")[0].appendChild(n),AWIN.Tracking.hideElement(n)}},AWIN.Tracking.pixelAppend=function(e){if(document.getElementsByTagName("body")[0]){var n=document.createElement("img");n.src=e,document.getElementsByTagName("body")[0].appendChild(n),AWIN.Tracking.hideElement(n)}},AWIN.Tracking.scriptAppend=function(e,n,r,t){if(e&&n)return!1;var a=document.createElement("script");if(a.type="text/javascript",a.id="_aw_script_"+AWIN.iScriptCount++,e?a.src=e:n&&(a.text=n),t)for(var i in t)a.setAttribute(i,t[i]);return r&&(a.onreadystatechange=function(){"complete"!=a.readyState&&"loaded"!=a.readyState||eval(r)},a.onload=function(){eval(r)}),AWIN.Tracking.getScriptAppendNode().appendChild(a),a},AWIN.scriptsLoader=function(e){e:for(var n=0;n<e.length;n++){for(var r=e[n],t=0;t<r.aRequiredVars.length;t++)try{if(void 0===eval(r.aRequiredVars[t]))throw new Error}catch(e){continue e}r.sUrl?AWIN.Tracking.scriptAppend(r.sUrl):r.sContents&&AWIN.Tracking.scriptAppend(null,r.sContents)}},AWIN.Tracking.saleSubmit=function(){if(AWIN.Tracking.iMerchantId<1)return!1;AWIN.Tracking.Sale.currency=void 0!==AWIN.Tracking.Sale.currency?AWIN.Tracking.Sale.currency:"",AWIN.Tracking.Sale.test=void 0!==AWIN.Tracking.Sale.test?AWIN.Tracking.Sale.test:"0",AWIN.Tracking.Sale.voucher=void 0!==AWIN.Tracking.Sale.voucher?AWIN.Tracking.Sale.voucher:"",AWIN.Tracking.scriptAppend(AWIN.Tracking.buildSaleUrl("js")),AWIN.Tracking.BasketImage=new Image(1,1),AWIN.Tracking.BasketImage.src=AWIN.Tracking.buildSaleUrl("ia"),AWIN.Tracking.cookiesWereSpecifiedByMerchant()||(AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&1!=AWIN.Tracking.Sale.pvOnly&&AWIN.Tracking.embedIframe("get"),AWIN.Tracking.fingerprinting({AdvID:"1062",OrderID:AWIN.Tracking.Sale.orderRef,OrderTotal:AWIN.Tracking.Sale.amount,SiteID:AWIN.Tracking.iMerchantId,TAG:2}))},AWIN.Tracking.basketSubmit=function(){var e=/^\s+|\s+$/g,n=document.getElementById("aw_basket").value.split("\n"),r=new Array;AWIN.Tracking.BasketImages=new Array;for(var t=0;t<n.length;t++){var a=n[t].replace(e,"");if(a.length>0){for(var i=a.split("|"),c="",o=0;o<i.length;o++){c+=i[o].replace(e,"").substring(0,255)+"|"}r[r.length]=encodeURIComponent(c.substring(0,c.length-1))}}for(t=0;t<r.length;t++)r[t].length>0&&(AWIN.Tracking.BasketImages[t]=new Image(1,1),AWIN.Tracking.BasketImages[t].src=AWIN.sProtocol+"www.zenaps.com/basket.php?product_line="+r[t])},AWIN.Tracking.getBasketData=function(){var e=[];if(!document.getElementById("aw_basket"))return e;for(var n=document.getElementById("aw_basket").value.split("\n"),r=0;r<n.length;r++)if(n[r].length>0){var t=n[r].split("|");try{e.push({id:t[3].replace(/^\[|\]$/gi,""),name:t[4].replace(/^\[|\]$/gi,""),price:t[5].replace(/^\[|\]$/gi,""),quantity:t[6].replace(/^\[|\]$/gi,""),sku:t[7].replace(/^\[|\]$/gi,""),cg:t[8].replace(/^\[|\]$/gi,""),category:t[9].replace(/^\[|\]$/gi,"")})}catch(n){return e}}return e},AWIN.Tracking.hideElement=function(e){"Microsoft Internet Explorer"==navigator.appName?(e.style.height=0,e.style.width=0,e.style.visibility="hidden",e.style.display="inherit",e.style.margin=0,e.style.border=0,e.style.padding=0):(e.style.setProperty("height","0","important"),e.style.setProperty("width","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","inherit","important"),e.style.setProperty("margin","0","important"),e.style.setProperty("border","0","important"),e.style.setProperty("padding","0","important"))},AWIN.Tracking.embedIframe=function(e){if(!document.getElementById("AW_ALT")){if("set"==e){var n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&sv="+AWIN.Tracking._getAWCValue(),r=parseInt(AWIN.Tracking._getATPValue());r>0&&(n=n+"|"+r)}else{var t=AWIN.Tracking.buildSaleUrl("et");n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&gv=2&l="+escape(t)}if(document.getElementsByTagName("body")[0]){var a=document.createElement("iframe");a.src=n,a.height="0",a.width="0",a.id="AW_ALT",document.getElementsByTagName("body")[0].appendChild(a);var i=document.getElementById("AW_ALT");AWIN.Tracking.hideElement(i)}}},AWIN.Tracking.buildSaleUrl=function(e){var n="js"==e?"js":"php",r="",t="";if("fc"!=e&&"et"!=e){r="&cks="+AWIN.Tracking.sCookiesString;var a=parseInt(AWIN.Tracking.getCookiesAsString(/_aw_atp/));a>0&&(t="&atp="+a)}var i=escape(window.location.href);"fc"==e&&(i=escape(i));var c="";1==AWIN.Tracking.Sale.pvOnly&&(c="&pv=1");var o=AWIN.sProtocol+"www.zenaps.com/sread."+n+"?a="+AWIN.Tracking.iMerchantId+"&b="+AWIN.Tracking.Sale.amount+"&cr="+AWIN.Tracking.Sale.currency+"&c="+AWIN.Tracking.Sale.orderRef+"&d="+AWIN.Tracking.Sale.parts+"&vc="+AWIN.Tracking.Sale.voucher+"&t="+AWIN.Tracking.Sale.test+"&ch="+AWIN.Tracking.getSaleChannel()+r+"&l="+i+"&tv=2"+c+t+"&tt="+e;return AWIN.Tracking.Sale.custom&&AWIN.Tracking.Sale.custom instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("p",AWIN.Tracking.Sale.custom)),AWIN.Tracking.Sale.customerAcquisition&&(o=o+"&customeracquisition="+AWIN.Tracking.Sale.customerAcquisition),AWIN.Tracking.Sale.servicePartnerIds&&AWIN.Tracking.Sale.servicePartnerIds instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("spa",AWIN.Tracking.Sale.servicePartnerIds)),AWIN.Tracking.Sale.servicePartnerReferences&&AWIN.Tracking.Sale.servicePartnerReferences instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("sparef",AWIN.Tracking.Sale.servicePartnerReferences)),AWIN.Tracking.Consent.getConsentIsRespected()&&(o+=AWIN.Tracking.Consent.getGdprQuery()),AWIN.Tracking.Consent.getIsSnCookieAvailable()&&(o+="&sn=1"),o},AWIN.Tracking.getDynamicParametersAsQueryString=function(e,n){for(var r="",t=0;t<n.length;t++){r=r+"&"+(e+(t+1))+"="+n[t]}return r},AWIN.Tracking.fetchZxParam=function(e){var n=window["zx_"+e],r=AWIN.Tracking.getQueryVarValue("zx_"+e,document.location.search.substring(1)),t=AWIN.Tracking.getXPath('//*[@id="zx_'+e+'"]').next();if(null!==t){n=null;var a=t.innerHTML}var i=AWIN.Tracking.getXPath('//META[@name="zx:'+e+'"]').next();if(null!==i)var c=i.getAttribute("content");return n||c||a||r},AWIN.Tracking.getXPath=function(e){return document.evaluate?{list:document.evaluate(e,document,null,XPathResult.ANY_TYPE,null),next:function(){return this.list.iterateNext()}}:{next:function(){return null}}},AWIN.Tracking.runScripts=function(){AWIN.Tracking.aScripts.length>0&&AWIN.scriptsLoader(AWIN.Tracking.aScripts)},AWIN.Tracking.runCount=0,AWIN.Tracking.run=function(){AWIN.Tracking.runCount++,AWIN.Tracking.cookiesWereSpecifiedByMerchant()?AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.Sale.click):AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.getCookiesAsString()),AWIN.Tracking.Sale&&(AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getHasResult()||(AWIN.Tracking.saleSubmit(),document.getElementById("aw_basket")&&AWIN.Tracking.basketSubmit())),AWIN.Tracking._getAWCValue()?(AWIN.Tracking.Consent.getSnParameter()?AWIN.Tracking.setIncentiveCookie():AWIN.Tracking.setAWCCookie(),AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getConsent()||(AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&AWIN.Tracking.embedIframe("set"),AWIN.Tracking.fingerprinting({CampID:"3055",CCampID:AWIN.Tracking.iMerchantId,ImpID:AWIN.Tracking._getAWCValue(),TAG:1}))):AWIN.Tracking._getGCLIDValue()?AWIN.Tracking.setGCLIDCookie():AWIN.Tracking.refreshAWCookies(),AWIN.Tracking.setAidCookie()},AWIN.Tracking.getAWCookies=function(){for(var e=/_aw_m_\d+/,n=/\d+_\d+_.+/,r=[],t=!AWIN.Tracking.Consent.getConsentIsRespected()||AWIN.Tracking.Consent.getConsent(),a=document.cookie.split(";"),i=0;i<a.length;i++){var c=a[i].split("=");e.test(c[0])?t&&n.test(c[1])&&r.push(c):AWIN.Tracking.Consent.getSnRegEx().test(c[0])&&n.test(c[1])&&r.push(c)}return r},AWIN.Tracking.refreshAWCookies=function(){for(var e=AWIN.Tracking.getAWCookies(),n=0;n<e.length;n++){var r=e[n][0],t=e[n][1];AWIN.Tracking.setCookie(r,t,1);var a=t.split("_"),i=31536e3+parseInt(a[1]);AWIN.Tracking.setCookie(r,t,i)}},AWIN.Tracking.Consent={},function(e){var n,r=!1,t=!1,a=!1,i=!1,c=/_aw_sn_\d+/;e.checkForSnParameter=function(){var n=AWIN.Tracking.getQueryVarValue("sn",document.location.search.substring(1));n&&e.setSnParameter(parseInt(n))},e.getGdprQuery=function(){return void 0!==AWIN.Tracking.AdvertiserConsent?e.getConsent()?"&cons=1":"&cons=0":""},e.getConsent=function(){return void 0!==AWIN.Tracking.AdvertiserConsent?AWIN.Tracking.AdvertiserConsent:t},e.getHasResult=function(){return void 0!==AWIN.Tracking.AdvertiserConsent||a},e.setConsentPluginIsUsed=function(e){r=e},e.getConsentIsRespected=function(){return void 0!==AWIN.Tracking.AdvertiserConsent||r},e.setGdprQueryAdditionFunction=function(n){void 0===AWIN.Tracking.AdvertiserConsent&&(e.getGdprQuery=n)},e.setConsent=function(e){t=e,a=!0},e.setAdvertiserConsentStatus=function(e){void 0!==AWIN.Tracking.AdvertiserConsent&&(AWIN.Tracking.AdvertiserConsent=e,a=!0,AWIN.Tracking.run())},e.setSnParameter=function(e){n=e},e.setIsSnCookieAvailable=function(){i=!0},e.getSnParameter=function(){return!!n},e.getIsSnCookieAvailable=function(){return i},e.getSnRegEx=function(){return c},e.checkForSnParameter()}(AWIN.Tracking.Consent),AWIN.Tracking.aScripts=[],AWIN.Tracking.iMerchantId=19038,AWIN.enhancedTracking=!0,AWIN.Tracking.device9=!0;try{AWIN.Tracking.ShareASaleCookieSetter=AWIN.Tracking.ShareASaleCookieSetter||{},AWIN.Tracking.ShareASaleCookieSetter.paramName="sscid"}catch(e){}AWIN.Tracking.ShareASaleCookieSetter=AWIN.Tracking.ShareASaleCookieSetter||{},function(e){if(void 0===e.paramName||""===e.paramName.trim())return;const n=function(e){let n,r=/(?:\?|&(?:amp;)?)([^=&#]+)(?:=?([^&#]*))/g,t={},a=function(e){return decodeURIComponent(e.replace(/\+/g," "))};void 0===e&&(e=document.location.href);for(;n=r.exec(e);)t[a(n[1])]=a(n[2]);return t}(window.location.href);if(!n.hasOwnProperty(e.paramName))return;const r={clickId:n[e.paramName]};var t=document.domain.replace(/([^\.]+\.)?([^\.]+\.)*(.+\..+)$/gi,"$2$3");AWIN.Tracking.cookieDomain=t,AWIN.Tracking.setCookie("sas_m_awin",JSON.stringify(r))}(AWIN.Tracking.ShareASaleCookieSetter);try{var shrslImgs=document.getElementsByTagName("img");for(let e of shrslImgs)e.src.includes("shareasale.com/sale.cfm")&&(e.src.match(/currency=[A-Z]?[a-z]+/gi)&&(e.src=e.src.replace(/(currency=)(\w+)/gi,(e,n,r)=>n+r.toUpperCase())),e.src.match(/currency=$|currency=&/)&&(e.src=e.src.replace(/([?&])(currency=)(&?)/gi,(e,n,r,t)=>"?"==n?"?":"$1")))}catch(e){}AWIN.Tracking.ShareASaleClickProvider=AWIN.Tracking.ShareASaleClickProvider||{},AWIN.Tracking.ShareASaleClickProvider.sscidmode=AWIN.Tracking.ShareASaleClickProvider.sscidmode||"6",function(){const e=function(){const e=AWIN.Tracking.getCookiesAsString(new RegExp("sas_m_awin")),n=AWIN.Tracking.getCookiesAsString(new RegExp(/shareasale.*SSCID/));if(void 0===e||""===e.trim())return!!n&&{clickId:n};try{return JSON.parse(e)}catch(e){return!1}}();if(!e)return;const n=t("shareasale-analytics.com/sale.cfm");n&&a(n,e.clickId);const r=t("shareasale.com/sale.cfm");function t(e){const n=document.getElementsByTagName("img");for(var r of n)if(r.src.includes(e))return r.src;return!1}function a(e,n){if(e.match(/[?&]sscid/))if(e.match(/sscid=/gi)){if(e.match(/sscid=&|sscid=undefined/gi)){var r=new URL(e);r.searchParams.set("sscid",n),AWIN.Tracking.pixelAppend(r.toString())}}else AWIN.Tracking.pixelAppend(e+(e.includes("?")?"&":"?")+"sscid="+encodeURIComponent(n));else AWIN.Tracking.pixelAppend(e+(e.includes("?")?"&":"?")+"sscid="+encodeURIComponent(n)+"&sscidmode="+AWIN.Tracking.ShareASaleClickProvider.sscidmode)}r&&a(r,e.clickId)}(),"yes"==AWIN.Tracking.getQueryVarValue("awin_tntc",document.location.search.substring(1))&&(AWIN.enhancedTracking=!0),AWIN.Tracking.run(),AWIN.Tracking.runScripts();