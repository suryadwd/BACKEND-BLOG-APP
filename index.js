const  express  = require("express")
const app = express()
require("dotenv").config()
const blogroutes = require("./routes/blogroutes")
const database = require('./config/db')
database()
app.use(express.json())

app.use("/api/v1", blogroutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is live at ${process.env.PORT}`)
})
