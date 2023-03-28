import React, { useState, useEffect } from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './styles';

import { Link, Outlet } from "react-router-dom"

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import BookRoomButton from './BookRoomButton'

import NotificationButton from './NotificationButton'

import ViewRoom from './ViewRoom';

const Album = () => {
  // show list button
  const [selectedList, setSelectedList] = useState('list1');



  const [bookings, setBookings] = useState([]);
  const [bookingsStatus, setBookingsStatus] = useState('idle');


  

  const getBookings = async () => {
    setBookingsStatus('pending')
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await response.json();
      setBookings(json);
    } catch (error) {
      setBookingsStatus('error')
      console.error(error);
    }
    setBookingsStatus('complete')
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
                  <Link to="rooms">
                    <Button
                      variant={selectedList === 'list1' ? 'contained' : 'outlined'}
                      onClick={() => {
                        setSelectedList('list1')
                      }}
                      color="primary"
                    >
                      All Rooms
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="bookedRooms">

                    <Button
                      variant={selectedList === 'list2' ? 'contained' : 'outlined'}
                      onClick={() => {
                        setSelectedList('list2')
                        getBookings()
                      }}
                      color="primary"
                    >
                      Booking list
                    </Button>

                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>

          <Outlet />

        </div>
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