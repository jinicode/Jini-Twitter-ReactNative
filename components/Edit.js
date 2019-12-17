import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput, Button} from 'react-native'

import {editBlogs} from '../actions'
import {connect} from 'react-redux'
 class Edit extends Component {
    constructor(props){
        super(props);
        this.state={
            title : this.props.navigation.state.params.title,

            content:this.props.navigation.state.params.content,
            key:this.props.navigation.state.params.key
        }
    }
    
    submit=()=>{
       this.props.editBlogs(this.state.title,this.state.content,this.state.key)
       this.setState({
        title : "",

        content:"",
          key:""
       })
       this.props.navigation.navigate('Blogs')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Post </Text>
                <TextInput placeholder="title" style={{marginTop:20,height:40,borderColor:"gray",borderWidth:1}} onChangeText={title=>this.setState({title})} value={this.state.title}></TextInput>
                <TextInput placeholder="content" style={{marginTop:20,height:90,borderColor:"gray",borderWidth:1}} onChangeText={content=>this.setState({content})} value={this.state.content}></TextInput>
<Button title="Submit" onPress={this.submit}></Button>
            </View>
        )
    }
}


const styles=StyleSheet.create({
container:{
flex:1,
padding:30,
justifyContent:"center",
backgroundColor:"#fff"
}
})
export default connect(null,{editBlogs})(Edit)