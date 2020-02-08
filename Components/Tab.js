import * as React from 'react';
import { View,  Dimensions, StatusBar,StyleSheet, ImageBackground } from 'react-native';
import { TabView, SceneMap} from 'react-native-tab-view';
import Login from './Login';


const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample({navigation}) {
  const StudentRoute = () => (
    <Login type={"student"} navigation={navigation}/>
  );
  
  const CatererRoute = () => (
    <Login type={"caterer"} navigation={navigation}/>
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'student', title: 'STUDENT' },
    { key: 'caterer', title: 'CATERER' },
  ]);

  const renderScene = SceneMap({
    student: StudentRoute,
    caterer: CatererRoute,
  });

  return (
    <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scene: {
    flex: 1,
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});