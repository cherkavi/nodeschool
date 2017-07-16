let http = require("http")

if(process.argv.length<=2){
    process.exit(1)
}

let buffer = []
http.get(process.argv[2], (response)=>{
    response.on("data", function (data){
        buffer.push(data.toString())
    })
    response.on("end", endSignal=>{
        let result = buffer.join("");
        console.log(result.length)
        console.log(result)
    })
    response.on("error",  error=>{
        console.log(error.toString())
    })
})