const through = require('through2')
const split = require('split')

var transformation = function(line, buffer, next){
    let writeLine = line.toString();
    if(this.oddFlag == true){
        writeLine = writeLine.toUpperCase();
        this.oddFlag = false;
    }else{
        writeLine = writeLine.toLowerCase();
        this.oddFlag = true;
    }
    // process.stdout.write(writeLine+"\n");
    this.push(writeLine+'\n')
    next();
}

process.stdin
.pipe(
    split()
).pipe(
    through(transformation)
).pipe(
    process.stdout
)