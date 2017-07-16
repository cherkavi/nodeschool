let http = require("http")

if(process.argv.length<=2){
    process.exit(1)
}
http.get(process.argv[2], (response)=>{
    response.on("data", function (data){
        console.log(data.toString())
    })
    response.on("end", endSignal=>{
    })
    response.on("error",  error=>{
        console.log(error.toString())
    })
})