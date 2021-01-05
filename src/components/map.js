import React from 'react';
import ConnectApiMaps,{Map} from 'maps-google-react';
 
export class MapContainer extends React.Component {
    render() {
        return (
          <Map 
          google={this.props.google} 
          mapOptions={{
                            zoom: 15,
                            center: { lat: 34.140545, lng: -118.150909 },
                            disableDefaultUI: true,
                            styles: [{
                                featureType: 'poi.business',
                                stylers: [{ visibility: 'on' }]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'labels.icon',
                                stylers: [{ visibility: 'off' }]
                            }]
                        }}>
          </Map>
        );
      }
}
 
export default ConnectApiMaps({
  apiKey: ("")
})(MapContainer)