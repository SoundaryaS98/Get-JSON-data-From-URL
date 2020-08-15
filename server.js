const express = require("express")
const app = express()
var PORT = 8000
app.use(express.static("public"))
app.listen(PORT,()=> { console.log("String server running")})