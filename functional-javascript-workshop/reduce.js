function countWords(inputWords) {

	return inputWords.reduce(function(countMap, currentValue){
		if(!countMap[currentValue]){
			countMap[currentValue] = 0;
		}

		countMap[currentValue]++;

		return countMap;
	}, {});
 	
}

 module.exports = countWords;


 /*
Official:

  function countWords(arr) {
   return arr.reduce(function(countMap, word) {
     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
     return countMap
   }, {}) // second argument to reduce initialises countMap to {}
 }

 module.exports = countWords

 */