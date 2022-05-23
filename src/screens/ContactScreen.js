import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const ContactScreen = () => (
    <View style={styles.container}>
        <Text>CONTACT</Text>
    </View>
)

export default ContactScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }    
})