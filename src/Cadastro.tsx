import React, { useState } from 'react';
import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from 'native-base';
import Logo from '../src/assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 2,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 3,
          label: 'Email',
          placeholder: 'Digite seu email'
        } 
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    },
    {
      
    }
  ];

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao(){
    if(numSecao > 0 ) {
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
            />
          ))
        }
      </Box>
   {numSecao > 0 && <Botao onPress={voltarSecao} bgColor="gray.400" _pressed={{ bgColor: 'gray.500' }}>
          Voltar
        </Botao>}
        <Botao onPress={avancarSecao} bgColor="blue.800" _pressed={{ bgColor: 'blue.900' }}>
          Avançar
        </Botao>
    </VStack>
  );
}
