import {
    Container,
    Card,
    CardFront,
    CardBack,
} from './styles'
import { menuItens } from '../../types/types'


export function PratosMenu({nomeprato,descricaoprato, valor, foto}:menuItens){

    return (
        <Container>
            <Card>
                <h3>{nomeprato}</h3>
                <CardFront style={{backgroundImage: `url(${foto})`}}/>
                <CardBack>
                    <p>{descricaoprato}</p>
                    <h4>R${valor}</h4>
                </CardBack>
            </Card>
        </Container>
    )

    
}