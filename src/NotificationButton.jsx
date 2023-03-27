import React, { useState, useEffect } from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';

// noti button

const NotificationButton = (props) => { 
    const handleClick = () => {
        props.addNotification(props.id);
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Set Notification
        </Button>
    );
}       

export default NotificationButton;