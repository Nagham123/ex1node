// const port = 3000;          
const http = require('http')
const server = http.createServer( (request, response) => {

  const url = request.url.split('/')

  if (url[1] == 'home' || url[1] == 'HOME'){
      response.end(`<html>
          <head>
              <title>Naghampage</title>
          </head>
          <body>
              <h1>hello 1</h1>
              <h2> nagham's page</h2>
          </body>
      </html>`)
  }
  else if (url[1] == 'blah'){
      response.end(`<html>
          <head>
              <title>xxx</title>
          </head>
          <body>
              <h1>hello 2 </h1>
              <h2> btw...</h2>
          </body>
      </html>`)
  }

  else if (url[1]== 'post'){
    response.end('hello'+ url[2])
}

    
  else{
  response.end("error")
  }
})



const port = 3000
server.listen(port, (err) => {
    if(err){console.log("ERROR")}
    else{
        console.log("server is running on http://localhost:"+port)
    }
})
