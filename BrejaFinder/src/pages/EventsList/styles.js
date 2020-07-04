import{StyleSheet} from 'react-native';





export default StyleSheet.create({
menuBar:{
   alignItems:'center',
   flexDirection:'row',
   minHeight:30,
   minWidth:'auto',
   backgroundColor:'#c41c27', 
   shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
},

textMenuBar:{
   fontSize:20,
   marginLeft:'20%',
   color:'#FFFF',
   textAlignVertical:'center',
   alignItems:"center",
   minWidth:20
},
globalContainer:{
   flex:1,
   flexDirection:"column",
   backgroundColor:"#c41c27"
},
container:{
       backgroundColor: '#c41c27',
      
},

description:{
    fontSize:16,
    lineHeight:24,
    color:'#737380',
},

eventList:{
    marginTop:32,
},
eventItem:{
    marginTop:10,
    padding:24,
    borderRadius: 8,
    backgroundColor:'#FFF',
    marginBottom:16,
    minWidth:'auto',
    marginLeft:"5%",
    marginRight:"5%",
    flexDirection:"row",
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 25,
},
eventDesc:{

},
textBlank:{
    color:'#FFFF',

},
confirmarPresenca:{
    marginLeft:"40%",
    backgroundColor:"#c41c27",
    width:100,
    height:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 10,
    
},
eventProprety:{
    fontSize:14,
    color:'#41414d',
    fontWeight:'bold'
},
eventValue:{
    marginTop:8,
    fontSize:15,
    marginBottom:24,
    color:'#737380'
},
  
   });