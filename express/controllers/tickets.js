var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId
const { TicketsModel } = require('../../mongo/models')

// 1. create a function called getAll that returns everything
const getAll = (req, res) => {
  TicketsModel.find({}).then(data => res.json(data))
}

// 2. create a function called createMovie that accepts a "movie" param
const createMovie = (req, res) => {
  new TicketsModel({
    movieName: req.body.movieName,
    description: req.body.description,
    price: req.body.price
  })
    .save()
    .then(movie => res.json(movie))
}

// 3. create a function called deleteMovie that accepts a "movieName" param
const deleteMovie = (req, res) => {
  TicketsModel.findOneAndDelete({ movieName: req.params.name }).then(movie =>
    res.json(movie)
  )
}

// 4. create a function called getById that accepts an "id" param and finds one ticket
// hint: in your db query, you will use objectId like this: ObjectId(id)
const getById = (req, res) => {
  TicketsModel.findById(ObjectId(req.params.id)).then(movie => res.json(movie))
}

module.exports = { getAll, createMovie, deleteMovie, getById }
