//MAPS API key
//AIzaSyCZUQ1J_gOtxxYvVwDzInu1pDsz7qBgzGM
import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// import Map from "./map.js";


export class MapContainer extends React.Component {
render() {
  const style = {
    width: '80vw',
    height: '500px',
    border: '1px solid black'
  }
    return (
      <Map className="google-map" google={this.props.google} zoom={14} style={style} initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }} >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZUQ1J_gOtxxYvVwDzInu1pDsz7qBgzGM')
})(MapContainer)
