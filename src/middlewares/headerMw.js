const mongoose = require('mongoose')

const mid = function (req, res, next) {
    let headerdata = req.headers.isfreeapp;
    let isAppFree
    if (!headerdata) {
        res.send("Plz check your header")

    }
    if (headerdata == 'true') {

        req.isAppFree = true;
    } else {

        req.isAppFree = false
    }
    req.isFreeAppUser = isAppFree
    next()
}
module.exports.mid = mid
