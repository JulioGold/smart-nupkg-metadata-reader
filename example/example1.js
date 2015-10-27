var smartNupkgMetadataReader = require('../smartnupkgmetadatareader.js');

smartNupkgMetadataReader.readMetadata('./AnyPackage.2.4.2.nupkg', function (result, error) {
    if (error) {
        throw error;
    }
    console.log(JSON.stringify(result));
});