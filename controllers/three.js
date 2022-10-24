const router = require("express").Router()

router.get("/3/:three", (req, res) => {
    console.log(req.params.three);
    let name = req.params.three
    res.send("<h1>Hello, <b>from page 3</b>!</h1>")
})

module.exports = router