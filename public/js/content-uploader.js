// Display a content uploader UI Element
// Configured in app.js
// app.locals.uploadFolder: Which folder content is sent into
var folderId = document.currentScript.getAttribute('folder');
// app.locals.devToken: Needed for simple local dev without offical auth
var accessToken = document.currentScript.getAttribute('client');

var uploader = new Box.ContentUploader();

// var fileInfo = uploader.addListener('upload', fileLog);

// console.log(fileInfo);

uploader.show(folderId, accessToken, {
    container: '.content-uploader'
});