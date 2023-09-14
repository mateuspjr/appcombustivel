import React, { useState } from 'react';


import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


 


export default function App() {


  const [precoGasolina, setPrecoGasolina] = useState('');


  const [precoEtanol, setPrecoEtanol] = useState('');


  const [resultado, setResultado] = useState('');





  const calcularMelhorOpcao = () => {


    if (precoGasolina && precoEtanol) {


      const relacaoPreco = parseFloat(precoEtanol) /
 parseFloat(precoGasolina);



 

      if (relacaoPreco <= 0.7) {


        setResultado('Abasteça com Etanol');


      } else {


        setResultado('Abasteça com Gasolina');


      }


     } else {


      setResultado('Por favor, insira os preços de ambos os combustíveis.');


    }


  };



 

  return (


    <View style={styles.container}>


      <Text style={styles.title}>Calculadora de Abastecimento</Text>


      <TextInput


        style={styles.input}


        placeholder="Preço da Gasolina"


        keyboardType="numeric"


        value={precoGasolina}


        onChangeText={text => setPrecoGasolina(text)}


      />


      <TextInput


        style={styles.input}


        placeholder="Preço do Etanol"


        keyboardType="numeric"


        value={precoEtanol}


        onChangeText={text => setPrecoEtanol(text)}


      />


      <Button title="Calcular" onPress={calcularMelhorOpcao} />


      <Text style={styles.resultado}>{resultado}</Text>


    </View>


  );



}


 

const styles = StyleSheet.create({


  container: {


    flex: 1,


    justifyContent: 'center',


    alignItems: 'center',


    backgroundColor: '#fff',


  },


  title: {


    fontSize: 20,


    marginBottom: 20,


  },


  input: {


    width: 200,


    height: 40,


    borderWidth: 1,


    marginBottom: 10,


    paddingHorizontal: 10,


  },


  resultado: {


    marginTop: 20,


    fontSize: 18,


    fontWeight: 'bold',


  },


});

 