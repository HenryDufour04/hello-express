const router = require("express").Router()

router.get("/1/:one", (req, res) => {
    console.log(req.params.one);
    let name = req.params.one
    // res.send(`Hello from the page ${name}`)
    res.send("<h1>Hello, <b>from page 1</b>!</h1>")
})

module.exports = router