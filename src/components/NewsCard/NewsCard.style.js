import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#eceff1",
        margin:13,
        borderRadius:10,
        padding:10,
        width:180,
    },
    body:{
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    inner_container:{
        height:90,
    },
    image:{
        width: 160,
        height: 210,
        borderRadius:10, 
        marginBottom:10,
    },
    title:{
        fontWeight:"bold",
        color:"black",
        fontSize:17,
        marginBottom:10,
    },
    inStock: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    }
});