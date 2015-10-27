var smartNupkgMetadataReader = require('../smartnupkgmetadatareader.js');

smartNupkgMetadataReader.readMetadata('./AnyPackage.2.4.2.nupkg', function (result, error) {
    if (error) {
        throw error;
    }
    console.log('id: ' + result.package.metadata[0].id[0]);
    console.log('title: ' + result.package.metadata[0].title[0]);
    console.log('version: ' + result.package.metadata[0].version[0]);
    console.log('description: ' + result.package.metadata[0].description[0]);
    console.log('projectUrl: ' + result.package.metadata[0].projectUrl[0]);
});