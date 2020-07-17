import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const fine = ['sdfsd',213,'wqsd'];

const Start = (props) => {
  return( 
      <View styles={styles.bigcontainer}>
          <Button title="press me to go Homescreen" onPress={()=>props.navigation.navigate('Home')}/>

          <TouchableOpacity styles={styles.container} onPress={()=>props.navigation.navigate('Flat')}>
            <Text styles={styles.text}>
                touch me to go to FlatList screen
            </Text>
          </TouchableOpacity>
      </View>
  );}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
   // flex:1,

  },

  container:{
    flex:1,
    //alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
  },
  bigcontainer:{
    flex:1,
    //alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    
  },

});

export default Start;
