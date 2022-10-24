import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { fakeMarkerData } from './fakeData';
import { PropertyTypeSelect } from './PropertyTypeSelect';
import Grid from '@mui/material/Grid';
import { getPropertiesApi } from './api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 47.393497638334104,
    lng: 8.5181906002025
};

export const UserStoryMap = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDKSNqzVN7AGOYIq_H7hfgRX4rNe0CEWcY"
    });

    const [map, setMap] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [bounds, setBounds] = React.useState(null);
    const [minLat, setMinLat] = React.useState(47.219674886540254);
    const [maxLat, setMaxLat] = React.useState(47.59145250007549);
    const [minLng, setMinLng] = React.useState(7.98901578154517);
    const [maxLng, setMaxLng] = React.useState(9.08764859404517);

    const [properties, setProperties] = useState([]);
    const [propertyType, setPropertyType] = React.useState("House");

    const onLoad = useCallback((map) => { setMap(map) }, []);

    useEffect(() => {
        const propertiesFromApi = async () => {
            const properties = await getPropertiesApi(propertyType, minLat, maxLat, minLng, maxLng);

            setProperties(properties.data)
        }

        propertiesFromApi()
    }, [bounds, propertyType]);


    const OnDragChange = () => {
        setBoundsFunction()
    }

    const onZoomChange = () => {
        setBoundsFunction()
    }

    function setBoundsFunction() {
        setBounds(map.getBounds())

        setMinLat(bounds.ab.lo)
        setMaxLat(bounds.ab.hi)
        setMinLng(bounds.Fa.lo)
        setMaxLng(bounds.Fa.hi)
    }

    return isLoaded && (

        <Grid container spacing={2}>

            <Grid item xs={2}>
                <PropertyTypeSelect
                    propertyType={propertyType}
                    setPropertyType={setPropertyType} />
            </Grid>

            <Grid item xs={12}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onDragEnd={OnDragChange}
                    onIdle={onZoomChange}
                >
                    {
                        properties && properties.map((item, index) => (
                            <Marker
                                key={index}
                                position={
                                    {
                                        lat: parseFloat(item.location.latitude),
                                        lng: parseFloat(item.location.longitude)
                                    }}
                                onClick={() => {
                                    setSelectedMarker(item)
                                }}
                            />
                        ))
                    }

                    {
                        selectedMarker && (
                            <InfoWindow
                                position={{
                                    lat: selectedMarker.location.latitude,
                                    lng: selectedMarker.location.longitude
                                }}

                                onCloseClick={() => {
                                    setSelectedMarker(null)
                                }}>

                                <div>{selectedMarker.title}</div>
                            </InfoWindow>
                        )}

                </GoogleMap>
            </Grid>
        </Grid>
    )
}

export default React.memo(UserStoryMap);