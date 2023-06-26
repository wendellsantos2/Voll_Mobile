import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Cadastro from './src/Cadastro';
import { TEMAS } from './src/estilos/temas';

function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Cadastro />
    </NativeBaseProvider>
  );
}

export default App;
