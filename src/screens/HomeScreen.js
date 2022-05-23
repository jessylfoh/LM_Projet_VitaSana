import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const HomeScreen = () => (
    <View style={styles.container}>       
            <Text>ACCUEIL</Text>        
    </View>
)

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'grey',       
        alignItems: 'center',
        justifyContent: 'center'
    },
});