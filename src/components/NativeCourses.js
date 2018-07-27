import React, { Component } from 'react';
import { View, Text, Button, ListView, Image } from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

class NativeCourses extends Component {

  static navigationOptions = {
      tabBarLabel: "React Native Courses",
      tabBarIcon: ({ tintColor }) => {
        return <Icon
          name={'settings-cell'}
          size={26}
          style={{color: tintColor}} />
      }
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>React Native Courses</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>
            <View>
              <Text>{rowData.title}</Text>
              <Text>{rowData.description}</Text>
              <Text>{rowData.views}</Text>
              <Button
                onPress={()=>{console.log('pressedin rncourses')}}
                title="Link to course" />
              <Text>{rowData.link}</Text>
              <Image
                source={{uri: rowData.image}}
                style={{width: 400, height: 200}} />

            </View>
          } />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  icon: {
    width: 26,
    height: 26
  }
}

export default NativeCourses;
