const express = require('express')
const app = express()
const port = 3000

app.get('/message', (req, res) => {
  res.send('test api')
})
app.use("/static-file", express.static(__dirname + '/static-file'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})