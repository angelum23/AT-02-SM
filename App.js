import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler, TextInput,CheckBox,isSelected,setSelection,Picker,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
Icon.loadFont();

export default function App() {
  const [peso, setPeso] = React.useState();
  const [altura, setAltura] = React.useState();
  const [imc,setIMC] = React.useState();
  const [lingua,setLingua] = React.useState('js');
  function calculaIMC(){
    var resultado = peso / (parseFloat(altura) + parseFloat(altura))  
    var resultado = resultado.toFixed(2)
    if (resultado < 18.5) {
      alert("Seu IMC de " + resultado + " esta abaixo do peso!")
    }
    else if (resultado >=18.5 && resultado<24.9) {
      alert("Seu IMC de " + resultado + " esta normal!")
    }
    else if (resultado >=25 && resultado<29.9) {
      alert("Seu IMC de " + resultado + " esta na faixa de sobrepeso!")
    }
    else if (resultado >= 30) {
      alert("Seu IMC de " + resultado + " esta na faixa de obesidade!")
    }
    setIMC(resultado)
  }

  return (
    
    <View style={styles.container}>

            <View style={[styles.views, styles.ident1]}>
              <Text style={{ fontSize: 26,fontWeight: 'bold', color:"#333333"}}>Calculadora de IMC </Text>
          <Icon name="dialpad" size={30} color="black"></Icon>

            </View>
            
                <View style={[styles.ident3]}>
                  <Text style={{ fontSize: 20,fontWeight: 'bold', color:"#FAFAFA"}}> Seu Peso </Text>
                </View>

                <View style={[styles.views, styles.ident2]}>
                  <TextInput 
                  style={{ fontSize: 20,fontWeight: 'bold', color:"#333333"}} 
                  placeholder = 'Ex: 82'
                  keyboardType={'numeric'}
                  onChangeText={(float)=> setPeso(float)}

                  ></TextInput>
                </View>

            
            <View style={[styles.ident3]}>
              <Text style={{ fontSize: 20,fontWeight: 'bold',color:"#FAFAFA"}}> Sua Altura </Text>
            </View>

            <View style={[styles.views, styles.ident2]}>
              <TextInput style={{ fontSize: 20,fontWeight: 'bold', color:"#333333", width:73}} 
              placeholder= 'Ex: 1.70'
              keyboardType={'numeric'}
              onChangeText={(float)=> setAltura(float)}

              ></TextInput>
            </View>

            {/* checkbox */}
            <View style={[styles.ident3]}>
              <Text style={{ fontSize: 20,fontWeight: 'bold', color:"#FAFAFA", marginTop:20}}> Sua Faixa Etária </Text>
            </View>
            <Picker
                selectedValue={lingua}
                style={[styles.views,styles.identPicker]}
                onValueChange={(itemValue, itemIndex) =>
                  setLingua(itemValue)
                }>                
                <Picker.Item label="Criança" value="1" />
                <Picker.Item label="Adulto" value="2" />
                <Picker.Item label="Idoso" value="3" />
            </Picker>

            {/* checkbox */}
            
            <View>
            <TouchableOpacity style={styles.identBotao}>
                <Text style={{fontSize: 20,fontWeight:'bold',textAlign:"center"}} onPress={() => calculaIMC(peso,altura)}>Calcular peso</Text>
              </TouchableOpacity>
            </View>
            <Text style={{marginTop:40}}>Peso: {peso}kg | Altura: {altura}</Text>
              <Text style={styles.ident5}>IMC: {imc}</Text>
        </View>
        

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#454545',
      alignItems: 'center',
      flexDirection: "column",
      paddingTop:30,
    },
    views: {
      alignItems: "center",
      margin:8,
    },

    ident1: {
      backgroundColor:'#F2FFF2',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 6,
      paddingTop: 14,
      width: 500,
      height: 110,
      borderColor:'#000000',
      borderWidth:9,
      marginTop:5,
    },

    ident2: {
      backgroundColor:'#F2FFF2',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 7,
      width: 150,
      height: 50,
      borderColor: '#111111',
      borderRadius:20,
      margin:0,
      borderColor:'#000000',
      borderWidth:4,

    },
    ident3: {
    paddingTop:20,
    paddingBottom:15,
    },

    identBotao: {
      backgroundColor:'#F2FFF2',
      paddingTop: 8,
      width: 200,
      height: 50,
      borderRadius:40,
      marginTop:40,
      marginBottom:20,
      elevation:8,
    },
    ident4:{
      paddingTop:30.
    },
    ident5:{
      fontSize: 20,
      fontWeight:'bold',
      textAlign:"center",
      paddingTop:10,
      backgroundColor:"white", 
      width:500, 
      height:50, 
      margin:10,
      borderRadius:10,
      borderColor:"#000000",
      borderWidth:4,
      backgroundColor:'#F2FFF2',

    },

    identPicker: {
      backgroundColor:'#DDEFDD',
      width: 320,
      height: 50,
    },
});