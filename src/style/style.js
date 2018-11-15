import React,{Component} from 'react';
import{
    StyleSheet
} from "react-native";
const style =  StyleSheet.create ({
    img: {
        width: null,
        height: null,
        flex: 1
      },
      container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: "#f2f3f5",
        fontFamily: "Roboto",
        fontSize:10,
        // fontWeight: "300",
        // lineHeight: 5
      },
      imgRadius: {
        width: 50,
        height: 50,
        // resizeMode: 'contain',
        backgroundColor: "#fff",
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10
      },
      header:{
        // width: null,
        backgroundColor: "#fff",
        marginBottom: 10,
      },
      textTitle:{
        color: "#fc5830",
        fontWeight:'bold',
        marginLeft: 10,
        marginBottom: 8,
        fontSize:12
      },
      text:{
        color: "#212529",   
        marginLeft: 10,
        fontSize:10
      },
      Welfare:{
        backgroundColor:'white',
        marginTop: 8,
        marginBottom: 8
      },
      imgSmaill:{
        width:null,
        height: 44,
        borderWidth:1,
        borderColor:"#a4a4a4"
      },
      // jobDescription:{
      //   backgroundColor:'white',
      //   marginTop: 8,
      //   marginBottom: 8
      // },
      // jobRequirements:{
      //   backgroundColor:'white',
      //   marginTop: 8,
      //   marginBottom: 8
      // }, 
      address:{
        backgroundColor:'white',
        marginTop: 8,
        marginBottom: 8
      },
      imageAddress:{
         
      },
      introduce:{
        color:'black', 
        fontWeight:"bold", 
        marginLeft: 10 ,
        marginBottom: 5, 
        marginTop: 10,
        fontSize:12
      }
    
});
export default style;