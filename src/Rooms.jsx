import React, { useState, useEffect } from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './styles';
import { Link, Outlet, Route, Routes} from "react-router-dom";

import BookRoomButton from './BookRoomButton'

import NotificationButton from './NotificationButton'
import ViewRoom from './ViewRoom';
import { useDispatch, useSelector } from 'react-redux';
import {updateGetRooms} from './redux/getRooms'

const Rooms = () => {

    const {value} = useSelector((state) => state.getRooms);
    const dispatch = useDispatch();

    const classes = useStyles();

    const [allRoomsStatus, setAllRoomsStatus] = useState('idle');
    const [allRooms, setAllRooms] = useState([]);

    const [notifIDs, setNotifIDs] = useState([]);

    useEffect(() => {
        getAllRooms()
    }, [allRooms])

    const getAllRooms = async () => {
        setAllRoomsStatus('pending')
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const json = await response.json();

            setAllRooms(json);
        } catch (error) {
            setAllRoomsStatus('error')
            console.error(error);
        }
        setAllRoomsStatus('complete')
    }

    const addNotification = (id) => {
        const unqiue = new Set([...notifIDs, id])
        setNotifIDs([...unqiue])
    }


    return (

        <Container className={classes.cardGrid} maxWidth="md">

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                The value is {value}
            </Typography>
            <button onClick={() => dispatch(updateGetRooms())}> UPDATE ROOMS </button>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {notifIDs}
            </Typography>

            <Grid container spacing={4}>

                {allRooms.map((room) =>

                    <Grid item key={room} xs={12} sm={6} md={4}>
                        <Card className={classes.item}>

                            <Link to="viewRoom">
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />

                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {room.username}
                                    </Typography>
                                    <Typography>
                                        Room is currently booked
                                    </Typography>
                                </CardContent>

                            </Link>

                            <CardActions>
                                <BookRoomButton />
                                <NotificationButton id={room.id} addNotification={addNotification} />
                            </CardActions>

                        </Card>
                    </Grid>

                )}

            </Grid>
        </Container>

    )
}

export default Rooms;