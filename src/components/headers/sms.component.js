import React from "react";
import {Image} from 'react-native';

export default class UserHeader extends React.Component {
    render () {
        return (

            <Image source={require('./../../../assets/icon/user.png')}
                   style={{width: 34, height: 34}} />
        )

    }
}