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
  Checkbox,
  ScrollView
} from 'native-base';
import Logo from '../src/assets/Logo.png';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { secoes } from './utils/CadastroEntradaTexto';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function voltarParaMenu() {
    
    navigation.goBack();
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alignItems="center" alt="Logo Voll" />

      <Titulo>{secoes[numSecao].titulo}</Titulo>

    

      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => (
          <EntradaTexto key={entrada.id} label={entrada.label} placeholder={entrada.placeholder} />
        ))}
          {numSecao === 0 && (
        <Botao onPress={voltarParaMenu} bgColor="gray.400" _pressed={{ bgColor: 'gray.500' }}>
          Voltar para o Menu
        </Botao>
      )}
      </Box>

      {secoes[numSecao].checkbox && secoes[numSecao].checkbox.length > 0 && (
        <Box>
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
            Selecione o plano:
          </Text>
          {secoes[numSecao].checkbox.map((checkbox) => (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          ))}
        </Box>
      )}

      {numSecao > 0 && (
        <Botao onPress={voltarSecao} bgColor="gray.400" _pressed={{ bgColor: 'gray.500' }}>
          Voltar
        </Botao>
      )}
      <Botao onPress={avancarSecao} bgColor="blue.800" _pressed={{ bgColor: 'blue.900' }}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
