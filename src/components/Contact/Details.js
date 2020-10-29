import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import detailStyles from '../types/detailStyles';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            picture, 
            firstName,
            lastName,
            cell,
            email,
            city,
            timezone
        } = this.props.route.params
        return (
            <View style={detailStyles.container}>    
                { this.props.route.params != [] ?
                    <View>
                        <View>
                            <View style={detailStyles.skyBlue}></View>
                            <View style={detailStyles.imageWrapper}>
                                <Image style={detailStyles.image} source={ picture } />
                                <Text style={detailStyles.name}> {firstName} {lastName}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={detailStyles.metdataWrapper}>
                                <Text style={detailStyles.metadata}>Phone</Text>
                                <Text style={detailStyles.detailData}>{cell}</Text>
                            </View>
                            <View style={detailStyles.metdataWrapper}>
                                <Text style={detailStyles.metadata}>Email</Text>
                                <Text style={detailStyles.detailData}>{email}</Text>
                            </View>
                            <View style={detailStyles.metdataWrapper}>
                                <Text style={detailStyles.metadata}>City</Text>
                                <Text style={detailStyles.detailData}>{city}</Text>
                            </View>
                            <View style={detailStyles.metdataWrapper}>
                                <Text style={detailStyles.metadata}>Time Shift</Text>
                                <Text style={detailStyles.detailData}>{timezone}</Text>
                            </View>
                        </View>
                    </View>
                    : null}
            </View>)
    }
}



export default Details;
