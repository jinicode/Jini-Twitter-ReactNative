import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getBlogs, deleteBlogs} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    return (
      <View style={styles.container}>
      {
          this.props.loadingReducer ? <Text>Loading </Text>:<FlatList
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
          data={this.props.listOfBlogs}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  elevation: 8,
                  borderRadius: 15,
                  backgroundColor: '#575FCF',
                  padding: 20,
                  marginBottom: 15,
                }}>
                <Text
                  style={{
                    fontSize: 28,
                    color: '#fff',
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 20, lineHeight: 30, color: '#fff'}}>
                  {item.content}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 25,
                  }}>
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate('Edit', {...item})
                    }>
                    <View style={{marginRight: 15}}>
                      <Icon size={30} color="white" name="edit"></Icon>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => this.props.deleteBlogs(item.key)}>
                    <View>
                      <Icon size={30} color="white" name="close"></Icon>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            );
          }}
        />
      }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 2,
  },
});
function mapStateToProps(state) {
  const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    listOfBlogs,
    loadingReducer:state.loadingReducer.loadingReducer
  };
}
export default connect(mapStateToProps, {getBlogs, deleteBlogs})(Blogs);
