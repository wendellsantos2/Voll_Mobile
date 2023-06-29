import { VStack, Divider ,ScrollView} from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
export default function Consultas (){
    return(
<ScrollView p={5}>
     <Titulo color="blue.500">Minhas consultas</Titulo>
     <Botao mt={5} mb={5}>
        Agendar Nova Consulta
     </Botao>
     <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
    <CardConsulta
    nome='Dr. Wendell Santos'
    especialidade="Cardiologista"
    foto='https://avatars.githubusercontent.com/u/82076774?v=4'
    data='24/05/2000'
    foiAgendado
    />
    <Divider mt={5}/>
    <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
    <CardConsulta
    nome='Dr. Wendell Santos'
    especialidade="Cardiologista"
    foto='https://avatars.githubusercontent.com/u/82076774?v=4'
    data='24/05/2000'
    foiAtendido
    />
     <Divider mt={5}/>
  
    <CardConsulta
    nome='Dr. Wendell Santos'
    especialidade="Cardiologista"
    foto='https://avatars.githubusercontent.com/u/82076774?v=4'
    data='24/05/2000'
    foiAtendido
    />
</ScrollView>
    )
}