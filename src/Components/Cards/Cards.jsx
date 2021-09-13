import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styles from "../../Components/Cards/Cards.module.css";
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import store from "../../Store/Store"

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


 function Cards ({dataReducer}){


    return <div className={Styles.container}>
            {dataReducer.map(({name,price,src},i)=>{
                  return <div >
                    <Card key={i} variant="outlined" className={Styles.card_container}>
                <Link to={`/about/${name}`}>
                        <img src={src} />
                    </Link>
                      <CardContent>
                        <Typography  color="textSecondary" gutterBottom>
                         {name}
                        </Typography>
                
                        <Typography color="textSecondary">
                          ${price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
            })}
    </div>
}
let newCards = connect((store)=>{
  return store
})(Cards)
export default newCards