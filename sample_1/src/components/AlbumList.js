//Import
import React, { Component } from 'react';
import {ScrollView } from 'react-native'
import AlbumItem from './AlbumItem'
//Axios Rest lib: https://www.npmjs.com/package/react-native-axios
//Chú ý là phải npm install axios ngay tại thư mục project
import axios from 'axios'

//Declare component
//Ở đây ta dùng class thay vì const để có thể có lifecycle 
//Các class mà có Component đều có 1 hàm render trả về JSX code 
class AlbumList extends Component {
    //State là 1 object dùng để ghi và phản hồi lại các sự kiện bên trong component
    ///mỗi khi hàm setState được gọi thì component sẽ được render lại
    state = {
        albums:[]
    };

    componentWillMount() {
        //Giống viewCreated
        console.log('Component will mount');
        this.loadData();
    }

    render () {
        console.log( this.state);
        return (
            <ScrollView style = {styles.viewStyle}>
                { this.renderAlbum() }
            </ScrollView>
        );
    }

    loadData() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            //Hàm mặc định setState của Component sẽ gọi hàm render chạy lại
            this.setState ({
                albums: response.data
            });
            this.renderAlbum();
        });
    }

    renderAlbum() {
        //Loop qua các item trong albums
        return this.state.albums.map(function(album, i) {
            return (
                //Khi loop thế này, chúng ta phải set key để react nó chỉ update mỗi cái item đấy 
                //Thay vì phải update hết cả thằng view to 
                <AlbumItem key={album.title} itemData={album} />
            );
        });
    }
}

const styles = {
    viewStyle :{
        backgroundColor: '#00000000'
    }
};

//Make the component available to other parts of the app
export default AlbumList;