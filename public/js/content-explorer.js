
// Display a content explorer UI Element
// Configured in app.js
// app.locals.rootFolder: Which folder content is sent into - typically the ROOT folder
var folderId = document.currentScript.getAttribute('folder');
// app.locals.devToken: Needed for simple local dev without offical auth
var accessToken = document.currentScript.getAttribute('client');

var contentExplorer = new Box.ContentExplorer();
contentExplorer.show(folderId, accessToken, {
    container: '.content-explorer',
    logoUrl: 'http://prsboxapi.com:3000/images/logo.png',
});