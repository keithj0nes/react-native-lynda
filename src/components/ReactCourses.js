import React, { Component } from 'react';
import { View, Text, Button, ListView, Image } from 'react-native';
import data from '../data/courses.json';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

class ReactCourses extends Component {

  static navigationOptions = {
    title: "React Courses"
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title='React Native Courses'
          onPress={() => navigate('NativeCourses')} />

        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>
            <View>
              <Text>{rowData.title}</Text>
              <Text>{rowData.description}</Text>
              <Text>{rowData.views}</Text>
              <Button
                onPress={()=>console.log('pressed')}
                title="Link to course"/>
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


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10
  }
}
export default ReactCourses;
