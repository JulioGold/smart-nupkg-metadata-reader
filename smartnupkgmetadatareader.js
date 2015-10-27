(function() {
	"use strict";
	
	var smartNupkgMetadataReader = {
		readMetadata:ReadMetadata
	};
	
	module.exports = smartNupkgMetadataReader;
	
	function ReadMetadata(nupkgPath, done) {
		
		if (!String.prototype.endsWith) {
			String.prototype.endsWith = function (searchString, position) {
				var subjectString = this.toString();
				if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
					position = subjectString.length;
				}
				position -= searchString.length;
				var lastIndex = subjectString.indexOf(searchString, position);
				return lastIndex !== -1 && lastIndex === position;
			};
		}
		
		////////////////////////////////////////////////////////////////////////
		
		var xml2js = require('xml2js');
		
		var parser = new xml2js.Parser();
		
		// Listener que fica esperando alguém enviar algum conteúdo para ser analizado
		parser.addListener('end', function (result) {
			return done(result); /* If you discover how to get and return the error if happens, DO IT! ;D */
		});
		
		////////////////////////////////////////////////////////////////////////
		
		var AdmZip = require('adm-zip');
		
		// reading archives
		var zip = new AdmZip(nupkgPath);
		var zipEntries = zip.getEntries(); // an array of ZipEntry records 
		
		// Fast way, but you can do better if use cached item ;D
		for (var index = 0; index < zipEntries.length; index++) {
			// Se o arquivo termina com .nuspec é o arquivo que quero ler
			if (zipEntries[index].entryName.endsWith('.nuspec')) { 
				parser.parseString(zip.readAsText(zipEntries[index].entryName));
				break;
			}
		}
		
		// A beautifull way but no better way, because that way i can't to do the break command 
		// zipEntries.forEach(function (zipEntry) {
		// 	//console.log(zipEntry.toString()); // outputs zip entries information 
		// 	// Se o arquivo termina com .nuspec é o arquivo que quero ler
		// 	if (zipEntry.entryName.endsWith('.nuspec')) { 
		// 		parser.parseString(zip.readAsText(zipEntry.entryName));
		// 	}
		// });
		
		////////////////////////////////////////////////////////////////////////
	};

}).call(this);