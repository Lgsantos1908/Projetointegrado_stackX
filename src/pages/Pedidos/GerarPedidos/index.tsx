import { CardPedidos } from '../../../components/CardPedidos'
import {
    Container,
    Content
} from './styles'

export function GerarPedido() {


    
    
    return (
        <Container>
            <Content>
                <h1>Pedidos</h1>

                <CardPedidos />
                
            </Content>
        </Container>
    )    
}