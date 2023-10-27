import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';


export default function App() {
  const [peso, setPeso] = useState(''); //iniciando a variavel peso com valor branco
  const [altura, setAltura] = useState('');
  function executarCalculos() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    const imcFinal = parseFloat(imc.toFixed(2));

    if (imc < 18.6) {
      alert('Você está abaixo do peso - IMC = ' + imcFinal + ' Kg/m²');
    } else if (imc >= 18.6 && imc <24.9) {
      alert('Você está com peso ideal - IMC = '+imcFinal+' Kg/m²');      
    } else if (imc >= 24.9 && imc > 34.9) {
      alert('Você está levemente acima do peso - IMC = '+imcFinal+' Kg/m²');
    } else if (imc >= 34.9) {
      alert('Você está acima do peso - IMC = '+imcFinal+' Kg/m²');
      
    }
    
    setAltura ('');
    setPeso('');
  }
 
  return (
    <View>
      <SafeAreaView style={estilo.logoDiv}>
      <Image
        style ={estilo.logo} source={require('./src/images/calculadora-icon.png')} 
      />
      </SafeAreaView>

      <Text style={estilo.title}>Calcule seu IMC</Text>
      <TextInput
        style={estilo.input}
        value={peso}         //valor dentro do componente
        onChangeText={setPeso} //toda vez que o campo mudar ele é salvo
        placeholder="Peso (Kg)"
        keyboardType='numeric'
      />
      <TextInput
        style={estilo.input}
        value={altura}
        onChangeText={setAltura}
        placeholder="Altura (cm)"
        keyboardType='numeric'
      />
      <TouchableOpacity style={estilo.botao}
        onPress={executarCalculos}>
        <Text style={estilo.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 5,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    borderRadius: 5,
    padding: 10
  },
  textBotao: {
    color: '#fff',
    fontSize: 25,
  },
  logo:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems:'center', 
  },
  logoDiv:{
    flex: 1,
    paddingTop: 75,
    justifyContent:'center',
    alignItems: 'center',
  }

});