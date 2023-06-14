function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  /* Write an ES2015 Version */

function createInstructor2(firstName,lastName){
    return {
        firstName,
        lastName
    }
}





  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */

let favNum = 42;
const instructorObj = {
    firstName: 'Colt',
    [favNum] : 'That is my favorite!'
}






var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  /* Write an ES2015 Version */

const instructorObj2 = {
    firstName: 'Colt',
    sayHi(){ return 'Hi';},
    sayBye(){return this.firstName + " says bye!"}
    }




//   const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"



function createAnimal(species, noise, sound){
    return {
        species,
        [noise]() {return sound}
    }
}

