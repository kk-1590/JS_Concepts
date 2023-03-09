let name = {
    fname: 'Kartik',
    lname: 'Kh',
}

let printFullName =  function(hometown,state) {
    console.log(this.fname + " " + this.lname + " " + hometown + " " + state);
}

printFullName.call(name,"UP","KK");

let name2 = {
    fname: 'Sachin',
    lname: 'Tendulkar',
}

//function borrowing

printFullName.call(name2,"JK","AB");

printFullName.apply(name2, ["JK","AB"]);

//bind method--> return us a method

let printmyName = printFullName.bind(name2,"AB","CD");
printmyName();