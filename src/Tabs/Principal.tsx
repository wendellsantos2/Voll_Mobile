import { VStack, Text, ScrollView, Input, FormControl, Button, Image, Box, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"
import Logo from '../assets/Logo.png'

export default function Principal() {
  return (
    <ScrollView>
      <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alignSelf="flex-start" alt="Logo Voll" />
          <Titulo color="blue.500" alignSelf="flex-start">Boas-vindas!</Titulo>
        <Box
          mt={10}
          bg="white"
          shadow={3}
          borderRadius="md"
          p={5}
          width="90%"
          alignItems="center"
        >
          
          <FormControl mt={3}>
            <Input
              placeholder="Digite a especialidade"
              size="lg"
              w="100%"
              borderRadius="lg"
              bgColor="gray.100"
              shadow={3}
            />
          </FormControl>
          <FormControl mt={3}>
            <Input
              placeholder="Digite sua localização"
              size="lg"
              w="100%"
              borderRadius="lg"
              bgColor="gray.100"
              shadow={3}
            />
          </FormControl>
          <Button w="100%" bg="blue.800" mt={10} borderRadius="lg">
            Buscar
          </Button>
        </Box>
        <Titulo color="blue.900">Depoimentos</Titulo>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        <Box mt={10}>
        <Text>
        dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd
            dasdsadasdasdasdasddasdasdasdasdasdasd</Text>
        <Titulo fontSize="lg" mb={1}>Wendell Santos,23 anos,Nova Iguaçu/Rj</Titulo>
        </Box>
        <Divider mt={5}/>
        
        
      </VStack>
    </ScrollView>
  )
}
