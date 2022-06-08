/*A new way of looping an array */
let cust = [12, 30, 45, 56];
for(const item of cust){
    console.log(item);
}

console.log(...cust.entries())

for(const item of cust.entries()){
    //console.log(item);
}