import React from "react";
import GoogleMapReact from "google-map-react";
import {
    Paper,
    Typography,
    useMediaQuery,
    UseMediaQuery,
} from "@material-ui/core";
import MyLocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBk_AcjxW_zbBdgl-gEa0l5mncJcRKYyHc",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                option={""}
                onChange={""}
                onChildClick={""}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
