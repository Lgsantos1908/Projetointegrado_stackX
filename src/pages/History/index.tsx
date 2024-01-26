import {
    Container,
    Content
} from './styles'
import { Header } from '../../components/Header'
import {Footer} from '../../components/Footer'
import { CardUSer } from '../CardUser'

export function History() {
    return (
        <Container>
            <Header/>
            <Content>
                <div>
                    <h2>Nossa história</h2>
                    <p>
                        Numa manhã ensolarada, nas pitorescas margens de um vilarejo costeiro,
                        a visão audaciosa de Antonio, um pescador intrépido, materializou-se no 
                        Capitão do Sabor. Com mãos calejadas pelo árduo labor nos mares, 
                        Antonio inaugurou o modesto restaurante à beira-mar, marcando o início 
                        humilde de uma jornada culinária. Sua paixão pelos frutos do mar e inovação 
                        culinária rapidamente o estabeleceram como o líder incontestável da cozinha, 
                        criando pratos que não apenas deliciavam, mas contavam histórias de terras distantes 
                        e tradições culinárias antigas.
                    </p>
                    <p>
                        À medida que o irresistível aroma das iguarias se espalhava, o Capitão do Sabor 
                        conquistava uma clientela crescente, e o restaurante expandia suas fronteiras. 
                        A equipe, inicialmente composta por amigos leais, transformou-se numa família dedicada, 
                        cada membro compartilhando a visão singular de Antonio. Ingredientes frescos e 
                        locais tornaram-se a espinha dorsal dos pratos, enquanto a hospitalidade calorosa e 
                        o ambiente acolhedor davam vida à experiência gastronômica única oferecida pelo 
                        Capitão do Sabor.
                    </p>
                    <p>
                        O restaurante, além de ser um santuário para os amantes de frutos do mar exquisitos, 
                        tornou-se um ícone gastronômico, simbolizando a paixão pelo oceano e pela arte culinária. 
                        A reputação do Capitão do Sabor ultrapassou as fronteiras do vilarejo, atraindo clientes 
                        fiéis que retornavam para reviver a magia e contribuíam para espalhar a fama do local. 
                        As instalações foram ampliadas ao longo do tempo, mas a essência original permaneceu intacta, 
                        mantendo vivo o legado culinário à beira-mar, onde a paixão de um pescador visionário 
                        se transformou em uma celebração constante do amor pelo oceano.
                    </p>


                </div>
                <img src="https://images.pexels.com/photos/3338674/pexels-photo-3338674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </Content>

            <Footer/>
        </Container>
    )
}