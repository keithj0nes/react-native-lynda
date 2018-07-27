import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


const App = createBottomTabNavigator({
  ReactCourses: {screen: ReactCourses},
  NativeCourses: {screen: NativeCourses}
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#80CBC4',
    style: {
      backgroundColor: '#25A69A'
    }
  }
});

export default App;

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <ReactCourses />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
