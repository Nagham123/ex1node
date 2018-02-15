// const port = 3000;          
const http = require('http')

const server = http.createServer( (request, response) => {
  const url = request.url
  if (url == '/home' || url == '/HOME'){
      response.end(`<html>
          <head>
              <title>Naghampage</title>
          </head>
          <body>
              <h1>whatever</h1>
              <h2> nagham's page</h2>
          </body>
      </html>`)
  }
  else if (url== '/about'){
      response.end(`<html>
          <head>
              <title>xxx</title>
          </head>
          <body>
              <h1>hi </h1>
              <h2> btw...</h2>
          </body>
      </html>`)
  }

  else if (url== '/post')
      {response.end(`<html>
              <head>
                  <title>xxx</title>
              </head>
              <body>
                  <h1> hiii </h1>
                  <p>the url : <b> + url + </b></p>
              </body>
          </html>`)}
  else
  response.end("error")
})

const port = 3000
server.listen(port, (err) => {
    if(err){console.log("ERROR")}
    else{
        console.log("server is running on http://localhost:"+port)
    }
})