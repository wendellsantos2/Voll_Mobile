import { VStack, Text , ScrollView,FormControl,Input, Button,Box} from "native-base"
import { Titulo } from "../componentes/Titulo"
import { CardConsulta } from "../componentes/CardConsulta"
export default function Explorar (){
    return(
 
    <ScrollView>
      <VStack flex={1} alignItems="center" p={5}>
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
              placeholder="Digite a sua localização"
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
      </VStack>
      <Titulo color="blue.500">Resultado da busca</Titulo>
    <Box
          mt={15}
          bg="white"
          shadow={3}
          borderRadius="md"
          p={5}
          alignItems="center"
        >
        <CardConsulta
        nome='Dr. Wendell Santos'
        especialidade="Cardiologista"
        foto='https://avatars.githubusercontent.com/u/82076774?v=4'
        data='24/05/2000'
         
        />
    </Box> 
      
    <Box
          mt={15}
          bg="white"
          shadow={3}
          borderRadius="md"
          p={5}
          alignItems="center"
        >
        <CardConsulta
        nome='Dr. Wendell Santos'
        especialidade="Cardiologista"
        foto='https://avatars.githubusercontent.com/u/82076774?v=4'
        data='24/05/2000'
         
        />
    </Box> 
    <Box
          mt={15}
          bg="white"
          shadow={3}
          borderRadius="md"
          p={5}
          alignItems="center"
        >
        <CardConsulta
        nome='Dr. Wendell Santos'
        especialidade="Cardiologista"
        foto='https://avatars.githubusercontent.com/u/82076774?v=4'
        data='24/05/2000'
         
        />
    </Box> 
    <Box
          mt={15}
          bg="white"
          shadow={3}
          borderRadius="md"
          p={5}
          alignItems="center"
        >
        <CardConsulta
        nome='Dr. Wendell Santos'
        especialidade="Cardiologista"
        foto='https://avatars.githubusercontent.com/u/82076774?v=4'
        data='24/05/2000'
         
        />
    </Box> 
    </ScrollView>
 
    )
}