import{StyleSheet} from 'react-native';

export default StyleSheet.create({
globalContainer:{
    justifyContent:'center',
    flex:1,
    flexDirection:'column',
    backgroundColor:"#e5e5e5"
},
menuBar:{
    alignItems:'center',
    flexDirection:'row',
    minHeight:30,
    minWidth:'auto',
    backgroundColor:'#c41c27',
 },
 textMenuBar:{
    fontSize:20,
    marginLeft:'15%',
    color:'#FFFF',
    textAlignVertical:'center',
    alignItems:"center",
    minWidth:20
 },
 eventPic:{
    minHeight:'30%',
    minWidth:'100%',
    backgroundColor:"black"
 },

 contentContainer:{
     flex:1,
     backgroundColor:"#FFFF",
     maxWidth:'100%',
     maxHeight:'100%',
     margin:'3%',
     borderRadius:15,
     shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 80,
 },
 contentDados:{
     marginLeft:10,
     marginTop:5,
     flexDirection:'row',
     minWidth:'100%',
 },
contentInfo:{
    minWidth:'50%',
    maxWidth:'50%',
    maxHeight:'30%'
},
 descScroll:{
    maxHeight:60,
    minHeight:60,
    marginLeft:10,
    marginRight:10,
 },
 buttonTenhoInteresse:{
     backgroundColor:"#c41c27",
     marginTop:20,
     marginRight:'15%',
     marginLeft:'15%',
     maxHeight:50,
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:20,
 },
 valueContainer:{
     marginLeft:10,
     marginTop:10,
     flexDirection:'row'
 },
 textButton:{
     color:'#FFFF',
     fontSize:16,

 },
 textDados:{
     color:"#6B6B6B",
     fontSize:16,
     marginTop:5
 },
 textContato:{
     fontSize:20,
     color:'#6B6B6B',
     marginRight:'15%',
     marginLeft:'15%',
     marginTop:10,
 },
 contactContainer:{
    marginTop:5,
    flexDirection:'row'
 },
 buttonContact:{
    backgroundColor:"#c41c27",
    maxHeight:50,
     minHeight:50,
     maxWidth:70,
     minWidth:70,
     marginRight:'15%',
     marginLeft:'15%',
     maxHeight:50,
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:20,
 },
})