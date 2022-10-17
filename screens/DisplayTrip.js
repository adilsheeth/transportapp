import axios from 'axios';
import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

class DisplayTrip extends Component {
    state = {  
        routes: null,
    } 

    componentDidMount(){
        console.log(this.props)
        this.getRoutes();
    }

    render() { 
        if(this.state.routes == null){
            return(
                <ActivityIndicator />
            );
        } else {
            <View>
                <Text>About Route</Text>
                <Text>{this.props.route.params.originName} to {this.props.route.params.destinationName}</Text>

            </View>
        }
    }
    getRoutes(){
        let origin = this.props.route.params.origin.data;
        let originType = this.props.route.params.origin.type == 'stop' ? 'any' : 'coord';
        let destination = this.props.route.params.destination.data;
        let destinationType = this.props.route.params.destination.type == 'stop' ? 'any' : 'coord';
        if(originType == 'coord'){
            origin = `${origin[1]}%3A${origin[0]}%3AEPSG%3A4326`
        }
        if(destinationType == 'coord'){
            destination = `${destination[1]}%3A${destination[0]}%3AEPSG%3A4326`
        }

        axios.get(`https://api.transport.nsw.gov.au/v1/tp/trip?outputFormat=rapidJSON&coordOutputFormat=EPSG%3A4326&depArrMacro=dep&type_origin=${originType}&name_origin=${origin}&type_destination=${destinationType}&name_destination=${destination}&calcNumberOfTrips=8&TfNSWTR=true&version=10.2.1.42&itOptionsActive=1`,
        {
            headers: {
                Authorization: "apikey 3l8JSGx9DoQ5ksMlLeZTyJC7L9O4YSZ61drC",
            },
        }).then(response => {
            response = response.data;
            this.setState({
                routes: response.journeys,
            });
        });

    }
}
 
export default DisplayTrip;