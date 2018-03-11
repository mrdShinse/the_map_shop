import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import ENV from '../../../../env.json'

const Gmap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + ENV['GOOGLEMAP_KEY'],
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: '100%', height: '400px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
  >
    {
      props.isMarkerShown &&
      props.pins.map(pin => { return (<Marker key={pin.id} position={{ lat: pin.lat, lng: pin.long }} />); })
    }
  </GoogleMap>
)

export default Gmap
