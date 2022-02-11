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

const Map = ({ info }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    let [coordinates, setCoordinates, setBounds] = info;

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
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={""}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
