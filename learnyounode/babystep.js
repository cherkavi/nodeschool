let sum = 0;
for(let eachIndex in process.argv){
    if(eachIndex >=2){
        sum = sum + Number(process.argv[eachIndex]);
    }
}
console.log(sum)