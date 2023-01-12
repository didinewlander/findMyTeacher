const Movie = require('../Models/movieModel')

// REST API Functions

// GET - Get a movie - READ
const getAllMovies = () => { return Movie.find({}) };

// GET - Get by id - READ
const getMovieByID = (id) => { return Movie.find({ _id: id }) };

// POST - Create a new movie query
const createMovie = async (obj) => {
    const newMovie = new Movie(obj);
    await newMovie.save();
    console.log("Created a new person query");
    return "Created a new person query";
};

// PUT - Update a movie
const updateMovie = async (id, obj) => {
    await Movie.findByIdAndUpdate(id, obj);
    return "Updated the movie query";
};

// DELETE - Delete a movie
const deleteMovie = async (id) => {
    await Movie.findByIdAndDelete(id);
    return "Deleted the movie query";
};

module.exports = {
    createMovie,
    getAllMovies,
    getMovieByID,
    updateMovie,
    deleteMovie
};