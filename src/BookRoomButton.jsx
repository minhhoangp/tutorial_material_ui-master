import React, { useState, useEffect } from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './styles';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

// book button
const BookRoomButton = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
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

  export default BookRoomButton;