import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput, Button} from 'react-native'

import {postBlogs} from '../actions'
import {connect} from 'react-redux'
 class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            title : '',
            content:""
        }
    }
    
    submit=()=>{
        this.props.postBlogs(this.state.title,this.state.content)
        this.setState({
            title:"",
            content:""
        })
        this.props.navigation.navigate('NavStack')
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
export default connect(null,{postBlogs})(Post)