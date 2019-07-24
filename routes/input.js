var express = require('express');
var router = express.Router();

/* GET fact sheet layout */
router.get('/', function(req, res, next) {

    const BoxSDK = require('box-node-sdk');

    // Create new Box SDK instance
    const sdk = new BoxSDK({
        clientID: 'gctx3t5jon5dcci43b56ijws5rjfyat9',
        clientSecret: 'nUmPbnv4KJ2GUs4MzkfViQQvlgMNVUZF'
    });

    // Create new basic client with developer token
    const client = sdk.getBasicClient(req.app.locals.devToken);
    var uploadFolder = req.app.locals.uploadFolder; 
    var version = req.app.locals.version;
    var userType = 'Applicant';

    // Get the BCD Folder from the Box API
    // https://prshome.app.box.com/folder/77253195217 (BCD/__Atlanta/License Uploads)
    client.folders.get(uploadFolder)
        .then(folder => res.render('input', { userType: userType, secret: req.app.locals.devToken, upload: uploadFolder }));

});

module.exports = router;
