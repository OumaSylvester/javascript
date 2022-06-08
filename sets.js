let names = ["Ouma", "Maurina", "Rose", "Pauline", "Collins", "Evance", "Ouma", "Ouma"];
const orderset = new Set(names); //you pass an iterable to a set Constructor

console.log(orderset);

console.log(new Set("Sylvester"));

console.log(orderset.has("Ouma"));
console.log(orderset.has("Achieng"));