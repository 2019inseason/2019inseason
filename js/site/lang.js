function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }else{
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(name) {
    setCookie(name,"",-1);
}
function checkLang(){
    var type = navigator.appName;
    var lang;
    if (type == "Netscape"){
        lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
    }else{
        lang = navigator.userLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
    };
    var lang = lang.substr(0, 2);//获取浏览器配置语言前两位
    if (lang == "zh"){
        setCookie("lang",'zh');
        window.location.replace(window.location.origin+'/zh-TW');
    }else{
        setCookie("lang",'en');
        window.location.replace(window.location.origin);
    };
}

function checkCookie(){
    var _url = window.location.href;
    console.log(_url);
    console.log(window.location.origin);
    var _isZH = _url.indexOf('zh-TW');
    var _lang=getCookie("lang");
    if(_lang == 'zh' && _isZH<0){
        window.location.replace(window.location.origin+'/zh-TW');
        return;
    }
    if(_lang == 'en' && _isZH>0){
        window.location.replace(window.location.origin);
        return;
    }
    if(!_lang){
        checkLang()
    }
}
$(function(){
    $('._nav__language-en .js-lang').click(function(){
        setCookie("lang",'en');
        checkCookie();
    });
    $('._nav__language-ch .js-lang').click(function(){
        setCookie("lang",'zh');
        checkCookie();
    });
    checkCookie();
})