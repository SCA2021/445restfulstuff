/// Express app to handle api endpoints for our gaming data server
const express = require('express')
const app = express()
const port = 3000

app.post('/api/character', (req, res) =>{
        /// todo: mongo stuff
        res.writeHead(200);
        res.end(`{data: "Hello from database"}`);
});


app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})