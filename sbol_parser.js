var fs = require('fs'),
xml2js = require('xml2js');

var testfile = 'five_parts.xml';

var parser = new xml2js.Parser();
var max = 3;

fs.readFile(testfile, function(err, data) {
  parser.parseString(data, function (err, result) {
    componentDefinition = result['rdf:RDF']['sbol:ComponentDefinition'];
    //console.log(componentDefinition);
    componentDefinition.forEach(function(component){
      if(component['sbol:sequenceAnnotation']){
        component['sbol:sequenceAnnotation'].forEach(function(seq){
          console.log(seq);
        });
      }
    });
  });
});

//Find how many parts are within the design called FiveParts
//If it is more than 'max', console.log a message that says "reached max limit"
