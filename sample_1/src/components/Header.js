//Import
import React from 'react';
import {Text, View} from 'react-native'

//Declare component
//Thằng Header này được nhận 1 biến props truyền vào từ bên ngoài(từ thằng cha nó) 
const Header = (props) => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{props.title}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        //Center các đối tượng bên trong, React Flexbox dùng:
        // flexDirection(sắp các view bên trong theo thứ tự nào)
        // justifyContent: Cách phân phối các đối tượng bên trong: flex-start(tất cả sát nhau từ góc trái), center(tất cả sát nhau giữa), flex-end, space-around, and space-between(cân bằng khoảng cách với nhau) 
        //alignItems:Là sự sắp xếp các view con theo hướng vuông góc với hướng chính(flexDirection)

        //Ở đây ta muốn text phải căn trung tâm(cả 2 hướng), nên dùng cả justifyContent và alignItems
        justifyContent: 'center',
        alignItems:'center',
        //heigh-width
        height:60,
        paddingTop:15,
        //Shadows 
        shadowColor: '#000',
        shadowOffset : {width: 0, heigh: 2},
        shadowOpacity: 0.2,

    },
    textStyle: {
        fontSize: 20,
        backgroundColor: '#00000000'
    }
};

//Make the component available to other parts of the app
export default Header;