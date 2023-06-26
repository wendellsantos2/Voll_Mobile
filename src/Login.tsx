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

export default function Principal() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo color="blue.500">
        faça login em sua conta
      </Titulo>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Insira seu endereço de email"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Insira sua senha"
            size="lg"
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
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link href="https://www.alura.com.br" mt={10}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
