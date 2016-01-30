function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(submittedValue) {
            return goodUsers.some(function(goodValue) {
                return submittedValue.id === goodValue.id;
            })
        });

    };
}

module.exports = checkUsersValid;
