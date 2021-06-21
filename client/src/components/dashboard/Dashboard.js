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
import Image from '../../img/login.png';
import Img from '../../img/astro.png';
import Im from '../../img/hello1.png';

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
    maxWidth: 345,
  },
  media: {
    height: 180,
    backgroundImage: `url(${Image})`
  },
  mediaa: {
    height: 180,
    backgroundImage: `url(${Img})`
  },
  mediaaa: {
    height: 180,
    backgroundImage: `url(${Im})`
  }

}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card className={classes.rooti}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="OTP login platform"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Email
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Login to your email account using OTP
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/otp' >
        <Button size="small" color="primary">
          Login
        </Button>
        </Link>
      </CardActions>
    </Card>
    </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.rooti}>
          <CardActionArea>
        <CardMedia
          className={classes.mediaa}
          title="QRcode login platform"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Employee records
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Login to your portal using OTP and QRcode
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/otpqr' >
        <Button size="small" color="primary">
          Login
        </Button>
        </Link>
      </CardActions>
        </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Card className={classes.rooti}>
      <CardActionArea>
        <CardMedia
          className={classes.mediaaa}
          title="Notes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Notes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Create notes to stay organised
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/notes' >
        <Button size="small" color="primary">
          Open
        </Button>
       </Link>
      </CardActions>
    </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
// import React from 'react'
// import {Link} from 'react-router-dom'

// const Landing = () => {
//   return(
//     <section >
      
//           <div className="buttons">
//             <Link to="/otp" class="btn btn-primary">otp</Link>
//           </div>
//           <p>
//                     hi
//           </p>
//           <div className="buttons">
//             <Link to="/otpqr" class="btn btn-primary">qr code</Link>
//           </div>
//     </section>
//   )
// }
// export default Landing