import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import InfoServiceScreen from './src/screens/InfoServiceScreen';
import ContactScreen from './src/screens/ContactScreen';

const App = () => (
  <View style={styles.container}>
          {/* <HomeScreen />     */}
          {/* <ActivityScreen/> */}
          {/* <ServiceScreen/> */}
          {/* <InfoServiceScreen/> */}
          <ContactScreen/>

  </View>  
);


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'grey', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
