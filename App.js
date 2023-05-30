import React, { Component } from 'react';
import { StatusBar, Platform, Text, Image, View, StyleSheet, Alert, SafeAreaView ,TouchableWithoutFeedback, TouchableOpacity, Button, useAnimatedValue, KeyboardAvoidingViewComponent} from 'react-native';
import {useDeviceOrientation, useImageDimensions} from '@react-native-community/hooks';

export default function App(){
  console.log(useDeviceOrientation());
  console.log(useImageDimensions());
  return(
    <SafeAreaView style={sytles.container/*{backgroundColor:"orange"}*/}> 
{/*       <Button 
             color="orange"
             title="Click Me" 
             onPress={()=> 
               Alert.alert("Red or Blue", "select one of them", [
                  {text: "red", onPress: () => alert("red is selected")},
                  {text: "blue", onPress: () => alert("blue is selected")},
               ])          
              } 
      />
      <Text>Hello</Text>
      <TouchableOpacity onPress={()=> console.log("image tapped")}>
        <Image 
          source={{
            width:200,
            height:300,
            uri: "https://picsum.photos/200/300"
            }}
        />
      </TouchableOpacity> */
      
   
      }
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection:"row-reverse", //belirlediğimiz flex alanınının içindekileri hangi hizada nereye konumlandıracağımızı belirlemek için kullanıyoruz
          justifyContent:"space-around", //justifyConten -->main, but flexDirection-->horizontal
          alignItems:"center",
        }}
        >
        <View 
          style={{
            backgroundColor: "purple",
            height:100,
            width:200,
            alignSelf:"flex-start"
          }}
        />
        <View 
          style={{
            backgroundColor: "gold",
            height:100,
            width:100
          }}
        />
        <View 
          style={{
            backgroundColor: "orange",
            height:100,
            width:50
          }}
        />
       
      </View>
      
    </SafeAreaView>
  );
}

const sytles = StyleSheet.create({
  container:{
    flex:1, // flex ekrenın ne kadar alanını kaplayacağını belirler bu conteiner içine yazılan konulan şeyler 1 olduğu için tüm ekranı kaplayabilir fakat bu oranı 0.5 yaparsak ekrnanın yarısını kaplar. flex bu işe yarar.
    //backgroundColor: '#fff',
    //üst sınırı belirlemek için 
    padding: Platform.OS ==='android' ? StatusBar.currentHeight : 0,
    /*alignItems:'center',
    justifyContent: 'center',*/
  },
});