import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const fine = ['sdfsd',213,'wqsd'];

const HomeScreen = () => {
  return( 
<FlatList 
data={fine}
renderItem={({item})=>{
  return(
    <View>
      <Text>I am inside Homescreen</Text>
      <Text style={{fontSize:30}}>{item}</Text>
    </View>
  );
}}>

</FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
   // flex:1,

  },

  container:{
    flex:1,
    //alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
});

export default HomeScreen;
