var sum=0;
for(var index=2;index<process.argv.length;index++){
	console.log(index);	
	sum+=Number(process.argv[index]);
}
console.log(sum);

