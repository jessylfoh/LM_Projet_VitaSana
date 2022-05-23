import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InformationScreen =() =>(
<View style={styles.container}>
    <Text>INFORMATION</Text>
</View>
)

export default InformationScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
})