/// Express app to handle api endpoints for our gaming data server
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/api/character', (req, res) =>{
        /// todo: mongo stuff
        res.writeHead(200);
        res.end(`{data: "Hello from database"}`);
});


app.get('/api/character/:tag', (req, res) =>{
  const gamerTag = req.params.tag;
  res.writeHead(200);
  console.log(`The client sent us: ${gamerTag} as the gamer tag.`)
  res.end(`{"characterTag": "${gamerTag}"}`);
});



app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})