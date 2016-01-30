function checkUsersValid(goodUsers) {
<<<<<<< HEAD
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
    };
}

module.exports = checkUsersValid;
=======
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(submittedValue){
    	return goodUsers.some(function(goodValue){
    		return submittedValue.id === goodValue.id;
    	})
    });

  };
}

module.exports = checkUsersValid;
>>>>>>> origin/master
