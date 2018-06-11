
var fs = require('fs');

var local_file = 'another_test.json';
var max = 4;


var getStream = function (){
  var data = fs.readFileSync(local_file, {encoding: 'utf-8'});
  var json_obj = JSON.parse(data);
  exerciseOne(json_obj);
  exerciseTwo(json_obj);
  exerciseThree(json_obj);
  exerciseFour(json_obj);
}

function exerciseOne(json_obj){
  var components= json_obj.components;
    components.forEach(function(component){
  //  console.log(component);
    var segments = component.segments;
    segments.forEach(function(segment){
    //  console.log(segment);
      var sequence = segment.sequence;
      if (sequence.length > max) {
        var myArray = [];
        var newArray;
        sequence.forEach(function(seq){
          //  console.log(sequence);
            var type = seq["type"];
            myArray.push(type);
    });
    console.log(myArray)
    console.log("An array of length:", myArray.length)
  };
        });

      });
}
//======================

function exerciseTwo(json_obj){
  var components= json_obj.components;
    components.forEach(function(component){
  //  console.log(component);
    var segments = component.segments;
    segments.forEach(function(segment){
    //  console.log(segment);
      var sequence = segment.sequence;
      if (sequence.length > max) {
       var seq =  sequence[max];
        seq["type"] = "omitted";
      //  console.log(seq)
        var myArray = [];
        var newArray;
        sequence.forEach(function(seq){
          //  console.log(sequence);
            var type = seq["type"];
            myArray.push(type);
    });
    console.log(myArray)
   //    omitted = myArray[max + 1];
   //    var newArray = myArray.slice(0, omitted)
   //   newArray[max+1] == "omitted"
   // console.log(newArray)
};
        });

      });
}
//===========================================
//
function exerciseThree(json_obj){
  var components= json_obj.components;
    components.forEach(function(component){
  //  console.log(component);
    var segments = component.segments;
    segments.forEach(function(segment){
    //  console.log(segment);
      var sequence = segment.sequence;
      if (sequence.length > max) {
       var seq =  sequence[max];
        seq["type"] = "omitted";
      //  console.log(seq)
        var myArray = [];
        var newArray;
        sequence.forEach(function(seq){
          //  console.log(sequence);
            var type = seq["type"];
            myArray.push(type);
    });
//console.log(myArray)
     newArraylength = myArray.length;
     console.log("An array of length: " , newArraylength)
     omit = myArray.slice(max);
     lengthomit = omit.length;
     console.log(myArray, `${lengthomit} parts were omitted`)
  };
        });

      });
}

for(var i = 0; i < 5; i++){
  var component = components[i]
}
//==============================================================
function exerciseFour(json_obj){
  var components= json_obj.components;
    components.forEach(function(component){
  //  console.log(component);
    var segments = component.segments;
    segments.forEach(function(segment){
    //  console.log(segment);
      var sequence = segment.sequence;
      if (sequence.length > max) {
       var seq =  sequence[max];
        seq["type"] = "omitted";
        console.log(seq);
    });

     newArraylength = myArray.length;
     console.log("An array of length: " , newArraylength)
     omit = myArray.slice(max);
     lengthomit = omit.length;
     //console.log(myArray, `${lengthomit} parts were omitted`)
  };
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
