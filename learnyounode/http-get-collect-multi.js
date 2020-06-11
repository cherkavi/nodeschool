let http = require("http")

if(process.argv.length<=2){
    process.exit(1)
}

let inputParameters = process.argv.slice(2, process.argv.length)
let controlValues = []

let result = {}
for(let key in inputParameters){
    controlValues.push(key)
    let buffer = []
    http.get(inputParameters[key], (response)=>{
        response.on("data", (data) => {
            buffer.push(data.toString())
        })
        response.on("end", endSignal=>{
            result[key] = buffer.join("")
            controlValues.pop(key)
            if(controlValues.length==0){
                for(let key in result){
                    console.log(result[key])
                }
            }
        })
        response.on("error",  error=>{
            console.log(error.toString())
        })
    })
}

