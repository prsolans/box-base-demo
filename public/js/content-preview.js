
// Display a content explorer UI Element
// Configured in app.js
// app.locals.rootFolder: Which folder content is sent into - typically the ROOT folder
var fileId = document.currentScript.getAttribute('fileId');
// app.locals.devToken: Needed for simple local dev without offical auth
var accessToken = document.currentScript.getAttribute('client');

var preview = new Box.ContentPreview();
preview.show(fileId, accessToken, {
    container: '.preview-container',
    header: 'light',
    logoUrl: 'http://prsboxapi.com:3000/images/logo.png',
    contentSidebarProps: {
        detailsSidebarProps: {
            hasNotices: false,
            hasProperties: true,
            hasAccessStats: true,
            hasVersions: true
        },
        hasActivityFeed: true,
        hasSkills: false,
        hasMetadata: true
    }
});