import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const ServiceScreen = () => (
    <View style={styles.container}>
        <Text>LISTES DES SERVICES</Text>
    </View>
)

export default ServiceScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }    
})