document.getElementById("body").onload = function()
{
    
    let glbUrl;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        // glbUrl = url;
        document.getElementById("inputText").innerHTML = localStorage.getItem(url);
        // return url;
        // document.getElementById("inputText").innerHTML = url;	
    }); 
}

document.getElementById("btn1").onclick =   function(){
    urlEx = temp = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        // document.getElementById("inputText").innerHTML = url;	
        var x = document.getElementById("inputText").value;
        localStorage.setItem(url,x);
    });
    // document.getElementById("inputText").value = " ";
}