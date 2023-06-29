import React, { useState, useEffect } from 'react';
import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
  useToast,
 
} from 'native-base';
import Logo from '../src/assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { fazerLogin } from './servicos/AutenticacaoServico';
import { Botao } from './componentes/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({ navigation } : any) {
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [carregando,setCarregando] = useState(true)
  const toast = useToast()

    
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() =>{
    AsyncStorage.removeItem('token')
    async function verificarLogin() {
      const token = await AsyncStorage.getItem
      ('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  },[])

  async function login() {
    const resultado = await fazerLogin(email,senha)
    if(resultado){
      const {token } = resultado
      AsyncStorage.setItem('token',token)

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id

      AsyncStorage.setItem('pacienteId',pacienteId)
      navigation.replace('Tabs')
    }
    else{
       toast.show({
        title:"Erro no login",
        description:"O email ou senha não conferem",
        backgroundColor: "red.500"
       })
    }
  }

  if(carregando){
    return null 
  }

  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo color="blue.500">
        faça login em sua conta
      </Titulo>
      <Box>

        
        <EntradaTexto
        label='Email'
        placeholder='Insira seu endereço de email'
        value={email}
        onChangeText={setEmail}
        />
        
        <FormControl mt={3}>

          <FormControl.Label>Senha</FormControl.Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Insira sua senha"
            size="lg"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            InputRightElement={
              <TouchableOpacity
                onPress={handleTogglePassword}
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            }
          />
        </FormControl>
      </Box>

      <Botao w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={login}>
        Entrar
      </Botao>

      <Link href="https://www.alura.com.br" mt={10}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() =>navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
