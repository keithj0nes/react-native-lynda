import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class NativeCourses extends Component {

  static navigationOptions = {
    title: "React Native Courses"
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>React Native Courses</Text>
        <Button
          title='React  Courses'
          onPress={() => navigate('ReactCourses')}
          />
      </View>
    )
  }
}

export default NativeCourses;
