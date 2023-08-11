console.log('Cohort 1, Class 24', 'Boulder Badge')
//Part One
console.log('Part One: Boulder Badge')
// 1
const bulbasaurEvolves = 16 - 5;
const caterpieEvolves = 7 - 1;
const weedleEvolves = 7 - 1;
const totalCandies = (bulbasaurEvolves + caterpieEvolves + weedleEvolves);
console.log(totalCandies);

// 2
const convertToCelsius = F => (F - 32) * 1.8;
const canBattle = F => (convertToCelsius(F) > 0) ? `Charmander CAN Battle!!!` : `No Battles for Charmander Today...`;

console.log(canBattle(80));
console.log(canBattle(20));

// 3
const underPokemonLeague = num => {
  for (let i = 1; i <= num; i++) {
    console.log(`Pokemon, I choose you ${i} times !`);
  }
}

console.log(underPokemonLeague(5));

// Part Two
console.log(`Part Two: Cascade Badge`);
// 1
const list = arr => console.log(arr.reverse());

list(['Bulbasaur', 'Weedle', 'Caterpie', 'Pokeman-1']);

// 2
function compareArrs(a,b) {
  return a.reduce( (acc, c) => acc + c**2, 0 ) > b.reduce( (acc,c) => acc + c**3, 0 );
}

console.log(compareArrs([1,2,3], [1,2,3]));
console.log(compareArrs([5,10,3], [1,2,3]));

// 3
const multiplesOfIndex = arr => arr.filter( (num, i) => num % i === 0 );

console.log(multiplesOfIndex([22,-6,32,82,9,25]));
console.log(multiplesOfIndex([68, -1, 1, -7, 10, 10]));

// 4
const sum = arr => arr.reduce( (ttl, cv) => +ttl+ +cv, 0 );

console.log(sum([1,'2', 3, '4']));