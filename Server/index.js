const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const chalk = require('chalk');
const mongoose = require('mongoose')
const movieModel = require('./models/Movies');

//middleware to get the info from the UI
app.use(express.json());
// for sending and receiving the data from the client and server which is running in different ports...!!
app.use(cors());

mongoose.connect( 'mongodb+srv://mo_aliyaan:password-123@movies-cluster.zwmzn.mongodb.net/movies?retryWrites=true&w=majority', {useNewUrlParser:true}, (err,result) =>{
    if(err) throw err
    console.log(chalk.green( "Connected to Mongo Cloud Database...!"))
})


// to insert the data to the database....!!!
app.post('/insert', async(req,res) =>{
    const moviename = req.body.moviename;
    const movierating = req.body.movierating;
    const moviegenre = req.body.moviegenre;
    const released = req.body.released;

    const movie = new movieModel({moviename:moviename, rating:movierating, genre:moviegenre, isreleased:released})
    try{
        await movie.save()
        res.send('Data Added...!!!')
    }
    catch(err){
        console.log(err)
    }
    

    
    
})

// to get all the data from the database...!
app.get('/read', async(req,res) =>{
    await movieModel.find({}, (err,result) =>{
        if(err) throw err;
        res.send(result);
    })
})
// update
app.put('/update', async (req,res) =>{
    const updated=  req.body.updated;
    const id = req.body.id;
    try{
    await movieModel.findById(id, (err, updateNow) =>{
        updateNow.moviename = updated;
        updateNow.save()
        if(err){
            console.log(err);
        }
        res.send("updated")
    })
    }
    catch(err){
        console.log(err)
    }
    
})
// delete
app.delete('/delete/:id', async(req,res) =>{
    const id = req.params.id;
    await movieModel.findByIdAndRemove(id);
    res.send('Deleted...!!!')
    
})

app.listen(port, (err) =>{
    if(err) throw err;
    console.log(chalk.blue(`Server is running at port ${port}`));
})