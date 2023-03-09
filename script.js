class sample{
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}



this.a = 5;


function getParam() {
    console.log(this.a);
}

let user = {
    name: "Piyush",
    age: 24,
    childObj: {
        newName: 'Kartik kh',
        getDetails() {
            console.log(this.newName);
            console.log(this);
            console.log(this.name);
        }
    }
}

let user1 = {
    name:'Piyush',
    age: 24,
    getDetails(){
        const nestedFun = () => {
            console.log(this.name);
            console.log(this);
        }
        nestedFun();
    }
}

console.log(this.a);
console.log(this);
getParam();

user.childObj.getDetails();
user1.getDetails();

//this kisi object ke andar uss object ko refer krta h or immediate parent

//this takes its value from parent normal(not arrow) function in case of arrow functions

const User = new sample('Kartik');
console.log(User);
User.getName();