function sayHello(what) {
    return "Hello " + what;
}
console.log(sayHello("world"));

var a;      //declares a variable but its undefined
var b = 0;
console.log(b);    //0
console.log(a);    //undefined
console.log(a+b); //NaN
const area_code = '515';
var aNumber = 555;
var aFloat = 555.0;

var underterminedValue = "elephant";
if (isNaN(parseInt(underterminedValue,2)))
{
  console.log("handle not a number case");
}
else {
  console.log("handle number case");
}

// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
  // Part 2 - Find the total age of all users
  // Part 3 - List all female coders
  
  
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
  // Part 2 - Sort all users by age
  // Part 3 -  List all female coders
  
  
  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25
  // Part 2 - List all male coders over 30
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

  const users24 = texasss.filter(val => {
    return val.age > 24
  });
  
  console.log(users24)

  const totalAge = texasss.map((user)=> user.age).reduce((prev, next)=> prev + next)
console.log(totalAge)

const usersUS = texasss.filter(user => {
    return user.us == true;
  })
  
  console.log(usersUS)

  const sortedUS = newieyork

sortedUS.sort((a, b) => {
  const x = a.name.toLowerCase()
  const y = b.name.toLowerCase()
  return x < y ? -1 : 1 
})

console.log(sortedUS)

const sortedAge = newieyork

sortedAge.sort((a, b) => {
  return a.age - b.age
})

console.log(sortedAge)

const femaleCoders = newieyork.filter(val=>{
    return val.gender == 'f'
  })
  
  console.log(femaleCoders)

  const maleCodersAge = vegzas
  .filter(val => val.gender == 'm' && val.age < 25)
  .map(male => male.age)
  .reduce((prev, next)=> prev + next)

console.log(maleCodersAge)


const totalAges = []

texasss.map(val => totalAges.push(val.age))
newieyork.map(val => totalAges.push(val.age))
vegzas.map(val => totalAges.push(val.age))

const ageSum = totalAges.reduce((prev, next)=> prev + next)
console.log(ageSum)