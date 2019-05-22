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



    // https://prshome.app.box.com/folder/77253195217 (BCD/__Atlanta/License Uploads)
    var folderId = '77253195217';

    // Get the fileId for the most recent upload=
    var fileId = '';

    client.folders.getItems(folderId, limit = 1)
        .then(items => {
            lastLicenseRecieved = items.entries[0];
            fileId = lastLicenseRecieved.id;
            console.log('1: ' + lastLicenseRecieved.id);

            client.files.getAllMetadata(fileId)
                .then(metadata => {

                    var card0 = metadata.entries[0].cards[0];
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

                            console.log('K: ' + thisKey);
                            console.log('V: ' + thisValue);

                            metadataValues[thisKey] = thisValue;

                        }

                        return metadataValues;
                    }

                    var card0MetadataValues = createMetadataObject(issuerData);
                    console.log(card0MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idIssuerMetadata', card0MetadataValues)
                        .then(metadata => { console.log('whoa'); });

                    var card1 = metadata.entries[0].cards[1];
                    var card1title = card1.skill_card_title['message'];

                    var idData = card1.entries;
                    console.log(idData);
                    var card1MetadataValues = createMetadataObject(idData);
                    console.log(card1MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idMetadata', card1MetadataValues)
                        .then(metadata => { console.log('there'); });

                    var card2 = metadata.entries[0].cards[2];
                    var card2title = card2.skill_card_title['message'];

                    var idHolderData = card2.entries;
                    var card2MetadataValues = createMetadataObject(idHolderData);
                    console.log(card2MetadataValues);

                    client.files.addMetadata(fileId, 'enterprise', 'idHolderMetadata', card2MetadataValues)
                        .then(metadata => { console.log('buddy'); });

                    res.render('metadata', { title: "Get info from Skill card", card0: JSON.stringify(card0), card0title: card0title, card1: JSON.stringify(card1), card1title: card1title, card2: JSON.stringify(card2), card2title: card2title });


                });
        });




    // Get all the License Metadata from the Skills Cards and apply as metadataValues




});

module.exports = router;