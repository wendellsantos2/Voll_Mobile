import React, { useEffect } from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Cadastro from './src/Cadastro';
import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';
import api from './src/servicos/api';

function App() {

  useEffect(()=>{
    async function pegarDados(){
      const resultado = await api.get('/paciente')
      console.log(resultado.data)
    }
    pegarDados()
  },[])


  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  );
}

export default App;
