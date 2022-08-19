const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://LuizStarter:nQ4e3CdaR_fBV6x@cluster0.cgrgtyt.mongodb.net/?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

module.exports = mongoose