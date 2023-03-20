import React, { useState ,useEffect } from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './styles';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';


const Album = () => {
  // show list button
  const [selectedList, setSelectedList] = useState('list1');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Load data from mock API when component mounts
    loadData(selectedList);
  }, [selectedList]);

  const loadData = async (list) => {
    try {
      let response;
      if (list == 'list1'){
        response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        response = await response.json();
      } else {
        response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        response = await response.json();
        response = response.slice(0, 3);
      }
      const data = response;
      setItems(data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleListButtonClick = (listName) => {
    setSelectedList(listName);
  };

  // book button
  function BookRoomButton() {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Book Room
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Select Timeframe</DialogTitle>
          <DialogContent>
            // Add your content here, such as timepicker or calendar
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Book
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  // noti button
  const [notifList, setNotifList] = useState([]);

  function NotificationButton({ id }) {

    const [buttonText, setButtonText] = useState('Set Notification');

    const handleClick = () => {
      if (notifList.includes(id)) {
        setNotifList(notifList.filter((notifId) => notifId !== id));
      } else {
        setNotifList([...notifList, id]);
      }

      console.log(notifList)

      setButtonText(notifList.includes(id) ? "Unnotify this room" : "Set Notification");
    };

    return (
      <Button variant="contained" color="primary" onClick={handleClick}>
          {buttonText}
      </Button>
    );
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            User
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Reservation System
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              9 rooms available for booking. Cancel bookings with ease and get notified when a room is available. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button   
                      variant={selectedList === 'list1' ? 'contained' : 'outlined'}
                      onClick={() => handleListButtonClick('list1')} 
                      color="primary"
                  >
                    All Rooms
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                      variant={selectedList === 'list2' ? 'contained' : 'outlined'}
                      onClick={() => handleListButtonClick('list2')}
                      color="primary"
                  >
                    Booking list
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {items.map((item) =>
              // render a noti button if item is unavailable
              item.id % 2 === 0 && (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card className={classes.item}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.username}
                    </Typography>
                    <Typography>
                      Room is currently booked
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Book
                    </Button> */}
                    <BookRoomButton/>
              
                    <NotificationButton id={item.id}/>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}  

          {items.map((item) =>
              // render book button only
              item.id % 2 != 0 && (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card className={classes.item}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.username}
                    </Typography>
                    <Typography>
                      Room available!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Book
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                    <BookRoomButton/>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}  
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default Album;