import {
    Container,
    Content,
    ForMenu,
} from './styles'
import {PratosMenu} from '../../components/PratosMenu'
import { useEffect, useState } from 'react'
import { menuItens } from '../../types/types'

export function Menu() {
    const [menu, setmenu] = useState<menuItens[]>([]);
    useEffect(()=> {
        fetch("https://jsonserver.online/user/s74-PhQ-LOH/MenuItens", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setmenu(data)
            })
        )
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <Container>
            <Content>
                <h1>Nosso cardapio</h1>
                <ForMenu>
                        {
                            menu.map((e,index) =>(
                                <PratosMenu key={index}

                                nomeprato={e.nomeprato}
                                descricaoprato={e.descricaoprato}
                                valor={e.valor}
                                foto={e.foto}
                                />
                            ))
                        }
                </ForMenu>
            </Content>
        </Container>
    )    
}