//Import library to help create component
import React from 'react'
import {View, AppRegistry } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
//Create a component 
//Compnent là 1 hàm javascrip trả về JSX code , thường là giao diện
//Ở đây ta tạo 1 hàm(component) tên là App, trả về 1 đoạn JSX 
const App = () => (
  //Bao giờ root view cũng phải flex = 1
  <View style = {{flex: 1}}>
      <Header title={'Album'}/>
      <AlbumList />
  </View>
);

//Render component on device
//Tên component Phải match app name nhé, ít nhất app nào cũng phải register 1 app component 
AppRegistry.registerComponent('sample_1', () => App)