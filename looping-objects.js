const openigHours = {
    mon: "6 am",
    tue: "6am",
    wed: "12pm"
}

for(const day of Object.keys(openigHours)){
    console.log(day);
}

//how many days is the restorant open
let days = Object.keys(Object.keys(openigHours))
console.log(days.length);

const entries = Object.entries(openigHours);
console.log(entries);