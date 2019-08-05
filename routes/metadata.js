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
    var version = req.app.locals.version;
    var uploadFolder = req.app.locals.uploadFolder;
    var boxRelayLink = req.app.locals.boxRelayLink;
    var salesforceCaseLink = req.app.locals.salesforceLink;
    var boxDomain = req.app.locals.demoDomain;
    var userType = 'Reviewer';

    // Get the fileId for the most recent upload=
    var fileId = '';

    client.folders.getItems(uploadFolder, limit = 1)
        .then(items => {
            lastLicenseRecieved = items.entries[0];
            fileId = lastLicenseRecieved.id;
            console.log('1: ' + lastLicenseRecieved.id);

            client.files.getAllMetadata(fileId)
                .then(metadata => {

                    var card0 = metadata.entries[0].cards[0];
                    console.log("!!!!")
                    console.log(metadata.entries[0]);
                    var card0title = card0.skill_card_title['message'];

                    var issuerData = card0.entries;

                    function createMetadataObject(issuerData) {

                        var metadataValues = {};

                        for (var i = issuerData.length - 1; i >= 0; i--) {
                            var str = issuerData[i].text;
                            // console.log(str);
                            var split = str.indexOf(':');
                            // console.log(split);
                            var length = str.length;
                            // console.log(length);

                            function camelize(str) {
                                return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                                    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                                    return index == 0 ? match.toLowerCase() : match.toUpperCase();
                                });
                            }

                            var thisKey = camelize(str.substr(0, split).toLowerCase());
                            var thisValue = str.substr(split + 2, length);

                            // console.log('K: ' + thisKey);
                            // console.log('V: ' + thisValue);



                            metadataValues[thisKey] = thisValue;
                        }

                        return metadataValues;
                    }

                    // Begin collection data from each Skills card and passing into metadata
                    var card0MetadataValues = createMetadataObject(issuerData);
                    // console.log(card0MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idIssuerMetadata', card0MetadataValues)
                        .then(metadata => { console.log('whoa'); });

                    var card1 = metadata.entries[0].cards[1];
                    var card1title = card1.skill_card_title['message'];

                    var idData = card1.entries;
                    // console.log(idData);
                    var card1MetadataValues = createMetadataObject(idData);
                    // console.log(card1MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idMetadata', card1MetadataValues)
                        .then(metadata => { console.log('there'); });

                    var card2 = metadata.entries[0].cards[2];
                    var card2title = card2.skill_card_title['message'];

                    var idHolderData = card2.entries;
                    var card2MetadataValues = createMetadataObject(idHolderData);
                    console.log(card2MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idHolderMetadata', card2MetadataValues)
                        .then(metadata => { console.log('buddy'); });

                    // End collecting


                    var filePath = boxDomain + '/file/' + fileId;
                    res.render('metadata', { fileId: fileId, filePath: filePath, userType: userType, secret: req.app.locals.devToken, lastName: card2MetadataValues['lastName'], firstName: card2MetadataValues['firstName'], issuerName: card0MetadataValues['issuerName'], salesforceCaseLink: salesforceCaseLink, boxRelayLink: boxRelayLink });

                });

        });

});

module.exports = router;