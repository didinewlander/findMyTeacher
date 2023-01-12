const express = require('express');
const movieBL = require('../BL/movieBL');

const router = express.Router();

//Entry point http://localhost:8000/movies

router.route('/').get(async (req, res) => {
    const movies = await movieBL.getAllMovies();
    res.json(movies);
});

router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const movies = await movieBL.getMovieByID(id);
    res.json(movies);
});

router.route('/').post(async (req, res) => {
    const movieOBJ = req.body;
    const result = await movieBL.createMovie(movieOBJ);
    res.json(result);
});

router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const movieOBJ = req.body;
    const result = await movieBL.updateMovie(id, movieOBJ);
    res.json(result);
});

router.route('/:id').delete(async (req, res) => {
    const { id } = req.params;
    const result = await movieBL.deleteMovie(id);
    res.json(result);
});
module.exports = router;