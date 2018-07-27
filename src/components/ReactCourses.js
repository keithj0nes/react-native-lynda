import React, { Component } from 'react';
import { View, Text, Button, ListView, Image, TouchableOpacity, Linking} from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

class ReactCourses extends Component {

  static navigationOptions = {
      tabBarLabel: "React Courses",
      tabBarIcon: ({ tintColor }) => {
        return <Icon
          name='home'
          size={26}
          color={tintColor} />
      }
  }

  handleClick = (link) => {
    Linking.canOpenURL(link).then(supported => {
      console.log(supported, 'supported');
      if(supported){
        console.log('opening url now');
        Linking.openURL(link);
      } else {
        console.log('DONT KNOW HOW TO OPEN URL');
      }
    })
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Courses</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>
            <View style={theme.cardStyle}>
              <Image
              source={{uri: rowData.image}}
              style={theme.cardImageStyle} />

              <Text style={theme.cardTitleStyle}>{rowData.title}</Text>
              <Text style={theme.cardContentStyle}>{rowData.description}</Text>
              <Text style={theme.cardActionStyle}
                onPress={()=>{
                  this.handleClick(rowData.link)
                }}
                >Tap to view course</Text>

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
export default ReactCourses;
