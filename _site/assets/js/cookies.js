const cookieContainer = document.querySelector(".cookie-container");
const cookieCloseButton = document.querySelector(".cookie-conainer-close");
const cookieAcceptButton = document.querySelector(".cookie-button-accept");
const cookieDeclineButton = document.querySelector(".cookie-button-decline");


cookieCloseButton.addEventListener("click", ()=> {
    setCookie("cookieBannerDisplayed", "true", 5);
    setCookie("techCookiesOnly", "true", 5);
    location.reload();
});

cookieAcceptButton.addEventListener("click", ()=> {
    setCookie("cookieBannerDisplayed", "true", 30);
    setCookie("techCookiesOnly", "false", 5);
    $('#staticBackdrop').modal("hide");
});

cookieDeclineButton.addEventListener("click", ()=> {
    setCookie("cookieBannerDisplayed", "true", 5);
    setCookie("techCookiesOnly", "true", 5);
    location.reload();
});

setTimeout(()=>{
    if(getCookie("cookieBannerDisplayed") == "true"){        
    }else{
        $('#staticBackdrop').modal("show");
    }
},1000);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  

