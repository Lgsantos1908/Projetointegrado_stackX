import { useEffect, useState } from 'react'
import {
    Container,
    Content,
    TableContent
} from './styles'
import {Trash } from '@phosphor-icons/react';

export function PedidosGerados() {
    const [pedidos, setPedidos] = useState([]);
    const [pedidoUser, setPedidosUser] = useState([]);
    const [user, setUser] = useState('');



    useEffect(()=> {
        fetch("https://jsonserver.online/user/s74-PhQ-LOH/pedidos", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setPedidos(data)
                
            })
        )
        .catch((err) => console.log(err))
    }, []);

    function removePedido(id: string, name: string) {

        const resposta = window.confirm(`Deseja cancelar a comrap do item ${name} ?`);
        if(resposta) {
            fetch(`https://jsonserver.online/user/s74-PhQ-LOH/pedidos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setPedidos(pedidos.filter((pedido) => pedido.id !== id))
                alert(`${name} removido com sucesso!`)
            })
            .catch((err) => console.log(err))
        } else {
            alert("Ação cancelada")
        }
    }

    function filtraUser() {

        if(user ==='') {
            alert('Informe seu usuário!')
        } else {
            setPedidosUser(pedidos.filter((e) =>  e.name === user))
        
        }
    }
    
    return (
        <Container>
            <Content>
                <div>
                    <h1>Meus pedidos</h1>
                </div>

                <input type="text" placeholder='Useário' onChange={(e) => setUser(e.target.value)} />
                <input type='submit' value="Visualizar pedidos" onClick={filtraUser}/>
                
                    {
                        user? (
                            <TableContent>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Prato</th>
                                        <th>Quantidade</th>
                                        <th>Valor Unitário</th>
                                        <th>Valor Total</th>
                                        <th>Status</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {pedidoUser.map((e, index) => (
                                        <tr key={index}>
                                            <td>{e.name}</td>
                                            <td>{e.nomeprato}</td>
                                            <td>{e.quantidade}</td>
                                            <td>R$ {e.valor}</td>
                                            <td>R$ {e.valorTot}</td>
                                            <td>{e.status}</td>
                                            <td>
                                            <button                                       
                                                onClick={() => removePedido(e.id, e.nomeprato)}
                                            > <Trash size={26} width='bold'/></button>   
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableContent>
                        ):(
                            <h1>Informe seu usuario para verificar a lista de pedidos</h1>
                        )
                    }
            </Content>
        </Container>
    )    
}