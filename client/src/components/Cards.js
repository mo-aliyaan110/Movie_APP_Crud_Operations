import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../cards.css';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

function Cards() {
  const[updated,setupdated ] = useState('');
  const[moviesdata, setmoviesdata] = useState('');

  // function handleUpdate
  function deleteNow(id){
    axios.delete(`http://localhost:9000/delete/${id}`)
  }
  function handleUpdate(id){
    axios.put('http://localhost:9000/update', {id:id, updated:updated})
  }

    useEffect(() =>{
        axios.get('http://localhost:9000/read')
        .then((res) => setmoviesdata(res.data));

        
    })
    const renderMovies = (data) =>{
        if(data){
            return data.map((item) =>{
                return(
                  <div className="first__parent" >
                    <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt=""
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="add image here"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.moviename}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.genre}
                      </Typography>
                      <input type='text' onChange={(event) => {setupdated(event.target.value)}}  placeholder='update movie here' />
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => {handleUpdate(item._id)}} size="small" color="primary">
                      update
                    </Button>
                    <Button  onClick={() =>{deleteNow(item._id)}} size="small" color="primary">
                      delete
                    </Button>
                  </CardActions>
    </Card>
    </div>
                )
            })
        }
    }
  const classes = useStyles();
  console.log(updated);

  return (
    
    <div className='container'>
    <div className ="parent__div">
      {renderMovies(moviesdata)}
          {/* <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="add image here"
        />

        <CardContent>
            {renderMovies(moviesdata)}
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          update
        </Button>
        <Button size="small" color="primary">
          delete
        </Button>
      </CardActions>
    </Card>   */}
    </div>
    </div>
  )
}
export default Cards;