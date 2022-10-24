const Express = require("express")
const app = Express()

const PORT = 4000

const oneRoute = require("./controllers/one")
const twoRoute = require("./controllers/two")
const threeRoute = require("./controllers/three")



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

function logPage(req, res, next) {
    let date = new Date()
    console.log(date.toLocaleDateString());
    next()
}

app.use(oneRoute)
app.use(twoRoute)
app.use(threeRoute)

// app.get("/:home", (req, res) => {
//     let home = req.params.home
//     res.send(`hello ${home}`)
// })