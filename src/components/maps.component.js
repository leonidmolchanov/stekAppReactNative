import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 60.0317615,
                    longitude: 30.4027348,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}

