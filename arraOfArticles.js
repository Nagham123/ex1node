// const port = 3000;  
// create an array of articles. Each article has a title and a text (+5)

const http = require('http')
const server = http.createServer( (request, response) => {

    var article = [

        {
            title:1,
        text:"first"
        },

        {
            title:2,
            text:"second"
        },

        {
            title:3,
            text:"third"
        },



    ];
 
})



const port = 3000
server.listen(port, (err) => {
    if(err){console.log("ERROR")}
    else{
        console.log("server is running on http://localhost:"+port)
    }
})
