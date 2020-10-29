import React, { Component } from 'react';
import { Text, View, Button, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import contactStyle from '../types/contactStyle'

class Contact extends Component {

    constructor() {
        super();
        this.onPress = this.onPress.bind(this);
        this.state = {
            contacts: []
        }
    }

    async componentDidMount() {
        try {
            const contactApi = await fetch('https://randomuser.me/api/?results=30');
            const contacts = await contactApi.json();
            this.setState({contacts: contacts.results});
        } catch(err) {
            console.log("error fetching data", err);
        }
    }

    onPress(contact) {
        this.props.navigation.navigate("Details", 
            {
                picture: {uri: contact.picture.large},
                firstName: contact.name.first,
                lastName: contact.name.last,
                cell: contact.cell,
                email: contact.email,
                city: contact.location.city,
                timezone: contact.location.timezone.offset
            }
        );
    }

    drawContent(contact, index) {
        return (
            <TouchableNativeFeedback key={index} onPress={()=> {this.onPress(contact)}}>
                <View style={contactStyle.contact}>
                    <Image style={contactStyle.image} source={{ uri: contact.picture.thumbnail }} />
                    <View>
                        <Text style={contactStyle.contactName}>Name: {contact.name.first} {contact.name.last}</Text>
                        <Text>Phone: {contact.cell}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
    
    render() {
        return (
            <View style={contactStyle.container}>
                <ScrollView style={contactStyle.wrapper}>
                    {this.state.contacts && this.state.contacts.map((contact, index) => {
                        return this.drawContent(contact, index)
                    })}
                </ScrollView>
                <Button color='#6495ed' onPress={() => { }} title="Add Contact (coming soon)" />
            </View>)
    }
}


export default Contact;
