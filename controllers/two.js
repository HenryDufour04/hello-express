const router = require("express").Router()

router.get("/2/:two", (req, res) => {
    console.log(req.params.two);
    let name = req.params.two
    res.send("<h1>Hello, <b>from page 2</b>!</h1>")
})

module.exports = router