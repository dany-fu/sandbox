
var fs = require('fs');

var local_file = 'display_list.json';
var max = 3;

var getStream = function (){
  var data = fs.readFileSync(local_file, {encoding: 'utf-8'});
  var json_obj = JSON.parse(data);
  console.log(json_obj);
};

getStream();

//# 1
//from the json object, find the design that has more parts than the max parameter
//print out an array of all the part "types" in that design
//Expected: an array of length 5
//['engineered-region', 'promoter', 'res', 'cds', 'terminator']

//# 2
//modify your code so that instead of printing out all the parts,
//only print out max+1 parts (so an array of 4 parts in this case),
//and for the max+1 part, print "omitted"
//Expected: an array of length 4
//['engineered-region', 'promoter', 'res', 'omitted']

//# 3
//modify your code so that it also prints how many parts were omitted
//Expected: an array of length 4, and the number 2
//['engineered-region', 'promoter', 'res', 'omitted'], "2 parts were omitted"

//#4
//modify your code so that instead of creating an array of strings
//modify the json_obj itself so that the "type" of the last object in the FiveParts design
//is replaced with the string "omitted"; print the whole json_obj
//Expected:
// ...
// "name": "FiveParts",
// "sequence": [...{
//   "strand": "positive",
//   "type": "omitted", 
//   "id": "http://www.dummy.org/FiveParts/FiveParts_SequenceAnnotation4/1",
//   "name": "Ter",
//   "uri": "http://www.dummy.org/Ter/1",
//   "tooltip": "Component\nIdentifier: Ter\nRole: terminator\nOrientation: inline\n"
// }...
