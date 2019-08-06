//Assignment 1
//Question 1
var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]
//Solution1

// Print: All ID’s in an array example: [10, 15, 20, 25, 30, 35, 40]
   var arr = employees.map(function(employees){
     return employees.id
   });
   console.log(arr);

// Print: TOTAL no of years’ experience they all have
var totalYears = employees.reduce(function(prv,curVal){
  return prv + curVal.experience;
},0);

console.log(totalYears);

// Print: All employees whose experience is greater than 5 years
   var experience = employees.filter(item=> {
     return item.experience > 5;
   });

   console.log(experience);
//End

//Question2
//Fix to Print out ‘Kitty’
//Solution2
let cat = {
       catName: 'Kitty',
       sayName:function() {
           console.log(this.catName);
       }
   };

   let sayName = cat.sayName;
   console.log(cat.catName);
//End

//Question3
//Print: ‘Marlabs is in New Jersey’ (DO NOT create variables outside the User class)
//Solution3
  class user {
    constructor(name,location){
      this.name=name,
      this.location=location;
    }
    displayName() {
        return this.name + ' is in '  + this.location;
    }
}

var user1 = new user('Marlabs', 'New Jersey');

console.log(user1.displayName.apply(user1,[name,location]));

//End

//Question4
//Print: ‘My name is Althaf Pattan and I work for Marlabs’
//Solution4
function myName(fName, lName) {
    //console.log(`my name is ${fName} ${lName}`);

    function fullDetails(companyName) {
        const value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }

    return fullDetails('Marlabs');
}
console.log(myName('Althaf','Pattan'));

//End

//Question5
//Print: ‘Pika Chu  loves sushi and algorithms’
//Solution5
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms');

//End

//Question6
//Print: ‘Marlabs address: New jersey, 08444’
//Solution6
var x = 5;
var promise1 = new Promise(function(resolve, reject) {
    if (x  = 5) {
        let data = {
            name: 'Marlabs',
            address: {
                state: 'New jersey',
                zip: '08444'
            }
        }
        //console.log(data);
        resolve(data);
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(data,address) {
    var msg = data.name + ' address: ' + data.address.state + ', ' + data.address.zip;
    return Promise.resolve(msg);
}

var myFunc = function() {
    promise1
    .then(promise2)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });
};
myFunc();

//End
//End Of Assignment
