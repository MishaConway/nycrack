function getBrowserWindow()
{
    var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator );
    return wm.getMostRecentWindow("navigator:browser").content.document;
}


function initClock() {
  showCurrentTime();
  //window.setInterval(showCurrentTime, 1000);
  //  var article_column = document.getElementById('abColumn');
   // article_column.removeChild('article');
   // var article = document.getElementById('article');

}  
  
function showCurrentTime() {
    try
    {
        var w = getBrowserWindow();

    alert( "got here1234");

    var article_column = w.getElementById('abColumn');
    alert( "artcle column is " + article_column );

    article_column.innerHTML = "sweet";
    }
    catch(e)
    {
        alert( "got exception of " + e);

    }

  //  var textbox = document.getElementById("currentTime");
 // textbox.value = new Date().toLocaleTimeString();
 // textbox.select();
}