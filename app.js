let dotenv = require('dotenv')
dotenv.config()
let express = require('express');
let cors = require('cors')
let connectDB = require('./config/connectdb.js')
let userRoutes = require ('./routes/userRoutes.js') 

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app;