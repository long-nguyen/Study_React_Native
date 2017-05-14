//Import
import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native'

//Declare component
class AlbumItem extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handlePress() {
        console.log('Pressed! ' + this.props.itemData.title);
        Linking.openURL(this.props.itemData.url);
    }
    render () {
        return (
            <View style={styles.cardStyle}>
                <View style = {styles.cardHeaderStyle}>
                    <Image 
                        style = {{margin: 8, width: 50, height:50, backgroundColor:'green'}}
                        source={{uri: this.props.itemData.thumbnail_image}}
                    />
                    <View style = {styles.cardHeaderTextStyle}> 
                        <Text style={{marginBottom:4, fontWeight:'bold'}}>
                            {this.props.itemData.title}
                            </Text>
                        <Text >{this.props.itemData.artist}</Text>
                    </View>
                </View>
                <View style={{height:1, width:null,flex:1, backgroundColor:'rgba(255,0,0,0.1)'}}/>
                <View style = {styles.cardImageStyle}>
                    <Image 
                        //Để bức ảnh có thể full width(với chiều cao tùy ý), thfi ta để width null, flex 1.
                        style = {{width:null ,  height:300, margin: 8, flex : 1}}
                        source={{uri: this.props.itemData.image}}
                    />
                </View>
                <View style={{height:1, width:null,flex:1, backgroundColor:'rgba(255,0,0,0.1)'}}/>
                <TouchableOpacity
                    onPress={() => this.handlePress()}
                    style = {styles.cardButton}
                >
                    <Text style={{color:'#007aff', margin:8, alignSelf:'center', fontWeight:'600'}}>Buy it</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    cardStyle :{
        backgroundColor: '#00000000',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {width:0, heigh: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation:1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
   },
   cardHeaderStyle : {
       flexDirection: 'row',
       justifyContent: 'flex-start',
       
   },
   cardHeaderTextStyle : {
       flexDirection: 'column',
       justifyContent: 'center'
   },
   cardImageStyle : {

   },
   cardButton: {
        margin: 8,
        flex:1,
        alignSelf:'stretch',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007aff',
   }
};

//Make the component available to other parts of the app
export default AlbumItem;