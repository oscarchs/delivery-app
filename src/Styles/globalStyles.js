import { StyleSheet } from 'react-native';



export default globalStyles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    inputBox: {
        borderColor: '#2a9d8f',
        borderWidth: 0,
        paddingVertical: 10,
        color:'#ffffff',
        borderRadius:25,
        flex:1,
    },
    textButton: {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center',
    },
    buttonStyle: {
        margin: 20,
        backgroundColor: '#0277bd',
        width:300,
        paddingVertical: 10,
    },
    buttonStyle2: {
        margin:10,
        height:50,
        alignSelf: 'stretch',
        backgroundColor:'#2a9d8f',
        borderRadius:25,
        paddingVertical: 10,
        alignItems: "center"
    },

    inputWithIconField: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        paddingLeft:20,
        borderColor: 'rgba(42, 157, 143,1)',
        borderWidth:1,
        backgroundColor:'rgba(255, 255,255, 0.1)', 
        borderRadius:25,
    },
    inputWithouthIconField: {
        flexDirection: 'row',
        margin:10,
        alignItems:'center',
        justifyContent:'space-around',
        borderColor: 'rgba(42, 157, 143,1)',
        borderWidth:1,
        backgroundColor:'rgba(255, 255,255, 0.1)', 
        borderRadius:25,
        color:'black'
    },

    inputBoxForm: {
        paddingVertical: 10,
        color:'#ffffff',
        borderRadius:25,
        flex:1,
    },
  });
