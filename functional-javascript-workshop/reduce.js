function countWords(inputWords) {
    var result = {};

	for (var i = 0; i < inputWords.length; i++) {
		var val = inputWords[i];

		if(!result[val]){
			result[val] = 0;
		}

		result[val]++;
	};
 	
	return result;
}

 module.exports = countWords;


 /*



  function countWords(arr) {
   return arr.reduce(function(countMap, word) {
     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
     return countMap
   }, {}) // second argument to reduce initialises countMap to {}
 }

 module.exports = countWords


 */