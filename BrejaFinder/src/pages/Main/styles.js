import{StyleSheet} from 'react-native';





export default StyleSheet.create({
menuBar:{
   alignItems:'center',
   flexDirection:'row',
   minHeight:30,
   minWidth:'auto',
   backgroundColor:'#c41c27',
},
menuBarButton:{

},
textMenuBar:{
   fontSize:20,
   marginLeft:'25%',
   color:'#FFFF',
   textAlignVertical:'center',
   alignItems:"center",
   minWidth:20
},
globalContainer:{
   flex:1,
   flexDirection:"column"
},
    container:{
       backgroundColor: '#c41c27',
      
    },
    map:{
      flex:1
  },
  searchForm:{
   
   position:'relative',
   flex:1,
   zIndex:5,
   maxHeight:20,
   marginBottom:'10%',
   flexDirection:"row",
   

},
searchInput:{
   flex:1,
   height:50,
   backgroundColor: '#FFF',
   color:'#333',
   borderRadius:25,
   paddingHorizontal:20,
   fontSize:16,
   shadowColor:'#000',
   shadowOpacity:0.2,
   shadowOffset:{
       width:4,
       height:4,
   },
   elevation: 2,
},
  searchEventButton:{
   width:50,
   height:50,
   backgroundColor:'#c41c27',
   borderRadius:25,
   elevation:2,
   justifyContent:"center",
   alignItems:"center",
   marginLeft:15,
  }
   });