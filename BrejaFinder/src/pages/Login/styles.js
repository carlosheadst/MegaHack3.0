import{StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';




export default StyleSheet.create({

  textoBranco:{
    color:"#FFFFFF"
  },
    container:{
        flex:1,
       backgroundColor: '#c41c27',
      alignItems:"center",
      justifyContent:"center"
      
    },
    containerHorizontal:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"center"
    },
    imgContainer:{
      width:'auto',
      height:'auto',
       backgroundColor: '#c41c27',
      alignItems:"center",
      justifyContent:"center",
      marginBottom:'40%'
    },
    img:{
        maxWidth:200,
        maxHeight:200,        

    },
    imgFacebook:{
      maxWidth:20,
      maxHeight:20,
      marginRight:40
    },
    imgGoogle:{
      maxWidth:30,
      maxHeight:30,
      marginRight:40
    },
    facebookButton:{
      backgroundColor:'#16a4fb',
      minWidth:250,
      minHeight:40,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
    },
    googleButton:{    

        marginTop:10,
        backgroundColor:'#FFFF',
        minWidth:250,
        minHeight:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
    },
    
});