import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rooti: {
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

}));

export default function Notes() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
          To do today
        </Typography>
        <Typography variant="h5" component="h2">
         Fix a Meeting with Mark Richards
        </Typography>
        <Typography className={classes.pos} color="primary">
          11am
        </Typography>
        <Typography variant="body2" component="p">
          Need to discuss
        </Typography>
      </CardContent>
    </Card>
    </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
        To do today
        </Typography>
        <Typography variant="h5" component="h2">
          Fix a meeting with manager
        </Typography>
        <Typography className={classes.pos} color="primary">
          3pm
        </Typography>
        <Typography variant="body2" component="p">
          Need to discuss V2MoM
        
        </Typography>
      </CardContent>
      
    </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
        To do today
        </Typography>
        <Typography variant="h5" component="h2">
          Take the Security Trailhead
        </Typography>
        <Typography className={classes.pos} color="primary">
          4pm
        </Typography>
        <Typography variant="body2" component="p">
          Need to take it asap
          
        </Typography>
      </CardContent>
      
    </Card>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
          To do today
        </Typography>
        <Typography variant="h5" component="h2">
         Desktop Yoga
        </Typography>
        <Typography className={classes.pos} color="primary">
          11am
        </Typography>
        <Typography variant="body2" component="p">
          For art of mindfulness
        </Typography>
      </CardContent>
    </Card>
    </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
        To do today
        </Typography>
        <Typography variant="h5" component="h2">
          Fix a meeting with mentor
        </Typography>
        <Typography className={classes.pos} color="primary">
          3pm
        </Typography>
        <Typography variant="body2" component="p">
          Need to discuss project
        
        </Typography>
      </CardContent>
      
    </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
        To do today
        </Typography>
        <Typography variant="h5" component="h2">
          Connect with intern
        </Typography>
        <Typography className={classes.pos} color="primary">
          5pm
        </Typography>
        <Typography variant="body2" component="p">
          For coffee table conversation
        </Typography>
      </CardContent>
      
    </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
