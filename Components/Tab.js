import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Login from './Login';

const StudentRoute = () => (
  <Login type={"student"} />
);

const CatererRoute = () => (
  <Login type={"caterer"} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scene: {
    flex: 1,
  },
});
