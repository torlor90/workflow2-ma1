//Question 1

let declearedArray:(number | boolean)[] ;

//Question 2

let tuple: [boolean, string,number];

//Question 3

let firstName: string;
let lastName: string;

function fullName (firstName: any, lastName: any) {
    return `${typeof firstName} ${typeof lastName}`;
}

//Question 4

interface createInterface{
    name: string;
    age: number;
    jobTitle: string;
}

//Question 5

enum members{
    paid,
    unpaid,
    uknown,
}

//Question 6

class person {
    name: string;

    constructor(name: string){
        this.name = name;
    }
    displayName(){
        return "My name is" + this.name;
    }
}

//Question 7

type strNr = string | boolean;
type details = { id: number | string, status: string | boolean };

function getDetails (name: strNr, details: details){}