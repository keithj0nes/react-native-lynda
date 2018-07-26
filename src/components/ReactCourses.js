import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ReactCourses extends Component {

  static navigationOptions = {
    title: "React Courses"
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>React Courses</Text>
        <Button
          title='React Native Courses'
          onPress={() => navigate('NativeCourses')}
          />
      </View>
    )
  }
}

export default ReactCourses;
