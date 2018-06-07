
var fs = require('fs');

var local_file = 'display_list.json';
var max = 3;




var getStream = function (){
  var data = fs.readFileSync(local_file, {encoding: 'utf-8'});
  var json_obj = JSON.parse(data);
  console.log(json_obj);
  var components= json_obj.components;
  components.forEach(function(component){
    console.log(component);
    var segments = component.segments;
    segments.forEach(function(segment){
      console.log(segment);
      var sequence = segment.sequence;
      var myArray = [];
      var newArray;
      sequence.forEach(function(sequence){
        console.log(sequence);
        var type = sequence["type"];
        myArray.push(type);
      });
      omitted = max + 1;
      var newArray = myArray.slice(0, omitted)
      newArray[max] = "omitted"
      //      console.log(newArray)
      newArraylength = newArray.length;
      //  console.log("An array of length: " , newArraylength)
      omit = myArray.slice(max);
      lengthomit = omit.length;
      console.log(newArray, `${lengthomit} parts were omitted`)

    });

  });
}





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
