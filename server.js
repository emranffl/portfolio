const express = require("express")
const next = require("next")
const cors = require("cors")

const protocol = process.env.PROTOCOL
const host = process.env.HOST
const port = parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Enable CORS
  server.use(cors())

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${protocol}://${host}:${port}`)
  })
})
