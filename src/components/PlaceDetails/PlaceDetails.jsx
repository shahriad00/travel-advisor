import React from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
} from "@material-ui/core";
import LocatioOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
        <>
            <Card elevation={6}>
                <CardMedia style={{ height: 350 }} />
            </Card>
        </>
    );
};

export default PlaceDetails;
