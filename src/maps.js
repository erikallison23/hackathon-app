import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMapConfig = {
    key: "AIzaSyDnjxdZ9eiec8ipl7s6oklyjaL5R_V-O8E"
}

class Map extends Component {
    static defaultProps = {
        center: { lat: 46.30, lng: 7.47 },
        zoom: 12
    };

    render() {
        return (
            
                <GoogleMapReact
                    bootstrapURLKeys={GoogleMapConfig}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    height='300px'
                >
                    <AnyReactComponent
                        lat={46.307165438}
                        lng={7.476331428}
                        text={<i className='fas fa-snowflake' style={{fontSize:'40px', color:'rgb(15, 82, 186)'}} ></i>}
                    />
                </GoogleMapReact>
           
        );
    }
}
export default Map;