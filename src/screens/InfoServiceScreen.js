import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const InfoServiceScreen = () => (
    <View style={styles.container}>
        <Text>DETAIL DU SERVICE</Text>
    </View>
)

export default InfoServiceScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }    
})