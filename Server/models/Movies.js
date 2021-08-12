const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    moviename:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    isreleased:{
        type:String,
        require:true
    }
})

const MovieModel = mongoose.model('bollywood', movieSchema)

module.exports = MovieModel;