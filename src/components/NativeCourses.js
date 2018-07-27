import React, { Component } from 'react';
import { View, Text, Button, ListView, Image } from 'react-native';
import data from '../data/courses.json';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

class NativeCourses extends Component {

  static navigationOptions = {
    title: "React Native Courses"
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title='React  Courses'
          onPress={() => navigate('ReactCourses')}/>

        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>
            <View>
              <Text>{rowData.title}</Text>
              <Text>{rowData.description}</Text>
              <Text>{rowData.view}</Text>
              <Button
                onPress={()=>{console.log('pressedin rncourses')}}
                title="Link to course" />
              <Text>{rowData.link}</Text>
              <Image
                source={{uri: rowData.image}}
                style={{width: 400, height: 200}} />

            </View>
          }
        />


      </View>
    )
  }
}

export default NativeCourses;
