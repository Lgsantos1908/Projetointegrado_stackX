import { useEffect, useState } from 'react'
import {
    Container,
    TableContent
} from './styles'
import { Trash } from '@phosphor-icons/react';

export function PedidosGerados() {
    const [pedidos, setPedidos] = useState([]);


    useEffect(()=> {
        fetch("http://localhost:5000/pedidos", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setPedidos(data)
                console.log(pedidos)
            })
        )
        .catch((err) => console.log(err))
    }, []);

    function removePedido(id, index) {
        fetch(`http://localhost:5000/pedidos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => {
            console.log(resp);
            if (resp.ok) {
                setPedidos(pedidos.filter((pedido) => pedido.id !== id))
                console.log(`Item com ID ${id} removido com sucesso.`);
            } else {
                console.error(`Falha ao remover o item com ID ${id}.`);
            }
        })
        .catch((error) => {
            console.error('Erro na solicitação:', error);
        });
    }
    
 
    
    return (
        <Container>
            <div>
                <h1>Meus pedidos</h1>
            </div>

            <input type="submit" value="Gerar pedido"/>
            
            <TableContent>
            <thead>
                        <th>Nome</th>
                        <th>Prato</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Status</th>
                        <th>Excluir</th>
                </thead>
           
                {pedidos.map((pedido, indexPedido) => (
                    
                    <div key={indexPedido}>
                    
                        <tbody>
                            {Object.values(pedido).map((item, indexItem) => (
                                <tr key={indexItem}>
                                    <td>{item.name}</td>
                                    <td>{item.nomeprato}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.status}</td>
                                    <td>
                                    <input 
                                        type='submit'                                        
                                        onClick={() => removePedido(pedidos[0].id)}
                                        style={{ display: item.id === undefined ? 'none' : 'block' }}
                                    >
                                        
                                    </input>   
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                       
                    </div>
                ))}
                
            </TableContent>

            
        </Container>
    )    
}