
// Display a content explorer UI Element
// Configured in app.js
// app.locals.rootFolder: Which folder content is sent into - typically the ROOT folder
var folderId = document.currentScript.getAttribute('folder');
// app.locals.devToken: Needed for simple local dev without offical auth
var accessToken = document.currentScript.getAttribute('client');

var contentExplorer = new Box.ContentExplorer();
contentExplorer.show(folderId, accessToken, {
    container: '.content-explorer',
    contentPreviewProps: {
        contentSidebarProps: {
            detailsSidebarProps: {
                hasNotices: true,
                hasProperties: true,
                hasAccessStats: true,
                hasVersions: true
            },
            hasActivityFeed: true,
            hasSkills: true,
            hasMetadata: true
        }
    },
    logoUrl: 'http://prsboxapi.com:3000/images/logo.png',
    canPreview: true,
    canDownload: false,
    canDelete: true,
    canShare: true,
    canSetShareAccess: true
});