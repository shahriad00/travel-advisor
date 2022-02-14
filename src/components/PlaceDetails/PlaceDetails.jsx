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
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    const imgURL =
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
    return (
        <>
            <Card elevation={6}>
                <CardMedia
                    style={{ height: 350 }}
                    image={place.photo ? place.photo.images.large.url : imgURL}
                    title={place.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {place.name}
                    </Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Rating value={Number(place.rating)} readOnly />
                        <Typography gutterBottom variant="subtitle1">
                            out of {place.num_reviews} num_reviews
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.price_level}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking.</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking}
                        </Typography>
                    </Box>
                    {place?.awards?.map((award) => (
                        <Box
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <img src={award.images.small} alt="" />
                            <Typography
                                variant="subtitle2"
                                color="textSecondary"
                            >
                                {award?.display?.name}
                            </Typography>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({ name }) => (
                        <Chip
                            key={name}
                            size="small"
                            label={name}
                            className={classes.chip}
                        ></Chip>
                    ))}
                    {place?.address && (
                        <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            className={classes.subtitle}
                        >
                            <LocationOnIcon /> {place.address}
                        </Typography>
                    )}
                    {place?.phone && (
                        <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            className={classes.spacing}
                        >
                            <PhoneIcon /> {place.phone}
                        </Typography>
                    )}
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => window.open(place.web_url, "_black")}
                        >
                            Trip Advisor
                        </Button>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => window.open(place.website, "_black")}
                        >
                            Website
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    );
};

export default PlaceDetails;
