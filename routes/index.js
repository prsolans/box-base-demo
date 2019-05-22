var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const BoxSDK = require('box-node-sdk');

    // Create new Box SDK instance
    const sdk = new BoxSDK({
        clientID: 'gctx3t5jon5dcci43b56ijws5rjfyat9',
        clientSecret: 'nUmPbnv4KJ2GUs4MzkfViQQvlgMNVUZF'
    });

    // Create new basic client with developer token
    const client = sdk.getBasicClient(req.app.locals.devToken);
    var rootFolder = req.app.locals.rootFolder; 

    // Get the BCD Folder from the Box API
    // Will start with getting this folder to show
    // Will be able to adjust the get to grab whatever folder you want
    client.folders.get(rootFolder)
        .then(folder => res.render('index', { title: folder.name, secret: req.app.locals.devToken, root: rootFolder }));

});

module.exports = router;