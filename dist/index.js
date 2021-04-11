//Question 1
var declearedArray;
//Question 2
var tuple;
//Question 3
var firstName;
var lastName;
function fullName (firstName, lastName) {
    return typeof firstName + " " + typeof lastName;
}
//Question 5
var members;
(function (members) {
    members[members["paid"] = 0] = "paid";
    members[members["unpaid"] = 1] = "unpaid";
    members[members["uknown"] = 2] = "uknown";
})(members || (members = {}));
//Question 6
class person {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        return "My name is" + this.name;
    }
}
function getDetails(name, details) { }