import{StyleSheet} from 'react-native';





export default StyleSheet.create({

    menuBar:{
        alignItems:'center',
        flexDirection:'row',
        minHeight:30,
        minWidth:'auto',
        backgroundColor:'#c41c27',
     },
     
    textMenuBar:{
        fontSize:20,
        marginLeft:'35%',
        color:'#FFFF',
        textAlignVertical:'center',
        alignItems:"center",
        minWidth:20
    },
     globalContainer:{
        flex:1,
        flexDirection:"column"
    },
    contentContainer:{
        flex:1,
    },
    profileItems:{
    backgroundColor:"#C41C27",
    minWidth:'100%',
    minHeight:150,
    maxHeight:150,
    alignItems:'center',
    justifyContent:'center'
    },
    textProfileName:{
        color:'#FFFF',
        fontSize:18.
    },
    contentButtonItems:{
        alignItems:'center',
        flex:1,
    },
    contentButtonItems:{
        marginTop:15,
        alignItems:'center'
    },
    buttonMenu:{
        backgroundColor:"#C41C27",
        width:'75%',
        height:50,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 15,

    },

    textButtonMenu:{
        color:'#FFFF',
        fontSize:16,
    },
});