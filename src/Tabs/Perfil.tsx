import { VStack, Text, ScrollView,Avatar,Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"
export default function Perfil (){
    return(
        <ScrollView flex={1}
        >
            <VStack flex={1} alignItems={'center'} p={5}>
                <Titulo color="blue.500">Informações pessoais</Titulo>

                <Avatar size="xl"source={{uri: "https://avatars.githubusercontent.com/u/82076774?v=4"}} mt={5}/>
                <Titulo>Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Wendell Santos</Titulo>
                <Titulo>12/02/2000</Titulo>
                <Titulo>Manaus</Titulo>
                <Divider mt={5}/>
                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}