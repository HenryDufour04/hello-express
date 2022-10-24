const Express = require("express")
const app = Express()

const PORT = 4000

// const oneRoute = require("./controllers/one")
// const twoRoute = require("./controllers/two")
// const threeRoute = require("./controllers/three")








app.get("/", (req, res) => {
    res.send(`<h1>hello from the home page</h1>`)
})

app.get("/about", (req, res) => {
    res.send(`<h1>hello from the ${req.originalUrl} page</h1>`)
})

app.get("/contact", (req, res) => {
    res.send(`<h1>hello from the ${req.originalUrl} page</h1>`)
})

app.get("/:page", (req, res) => {
    res.send(`your at ${req.params.page}`)
})

app.get("*", (req, res) => {
    res.send("404 route not found")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})