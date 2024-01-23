import { useEffect, useState } from 'react'
import { 
    Container,
    FormPedido,
    DadosItem,
    InfoInput,
    BtnGerarPedido
} from './styles'
import { menuItens, pedido, user } from '../../types/types';
import { useNavigate } from 'react-router-dom';


export function CardPedidos(){

    const navigate = useNavigate()

    const [cardItem, setCardItem] = useState<menuItens[]>([]);
    const [pedidos, setPedidos] = useState<pedido[]>([]);
    const [itemselecionado, setItemselecionado] = useState<boolean[]>([]);
    const [qtdItem, setQtdItem] = useState(Number);
    const [user, setUser] = useState<user[]>([]);

    useEffect(()=> {
        fetch("http://localhost:5000/MenuItens", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setCardItem(data)
            })
        )
        .catch((err) => console.log(err))
    }, []);

    useEffect(()=> {
        fetch("http://localhost:5000/users", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setUser(data)
            })
        )
        .catch((err) => console.log(err))
    }, []);


    function handleChange(index: number, quantidade: number) {
        const selectedOption = cardItem[index];
        const updatedSelection = [...itemselecionado];
        updatedSelection[index] = !itemselecionado[index];
        const selectedUser = user[index];
        setItemselecionado(updatedSelection);
        setQtdItem(quantidade)
        

        if(qtdItem <= 0){          
            alert(`informe a quantidade desejada para o item ${selectedOption.nomeprato}`)
            
        } else {
            
            const newPedido = {
                    
                    iduser: selectedUser ? selectedUser.iduser : null,
                    name: selectedUser ? selectedUser.name : null,
                    id: selectedOption ? selectedOption.id : null,
                    nomeprato: selectedOption ? selectedOption.nomeprato : null,
                    descricaoprato: selectedOption ? selectedOption.descricaoprato : null,
                    valor: selectedOption ? selectedOption.valor : null,
                    quantidade: quantidade,
                    status: "Em análise"
                

            };

            setPedidos([...pedidos, newPedido]) 
            
            alert(`Item ${selectedOption.nomeprato} adicionado a lista`)


            
        }
           
            
    }
    

    

    function createPost() {

        const userConfirmed = window.confirm(`Realmente deseja ir para a lista de compras`);

             if(userConfirmed){
             
                fetch('http://localhost:5000/pedidos', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(pedidos)
                })
                .then((resp) => resp.json())
                .then((data) => {console.log(data)})
                .catch((err) => console.log(err)) 

                setPedidos([])
                setQtdItem(0)
                

                navigate('/pedidosGerados')
        }

    
            
    }
    
    return (
        <Container>
            <BtnGerarPedido>
                <input type="submit"  value="Ir para carrinho" onClick={createPost} />
            </BtnGerarPedido>
            <FormPedido>
                {
                    cardItem.map((e,index) =>(
                        <form  key={index}>
                            <DadosItem>
                                <div>
                                    <h2>{e.nomeprato}</h2>
                                    <h4>{e.descricaoprato}</h4>
                                    <h3>{e.valor}</h3>
                                </div>
                                <img src={e.foto}  />
                            </DadosItem>
                            <InfoInput >
                                <div>
                                <input 
                                    type="button"
                                    value="Adicionar ao carrimho"
                                    name="checkboxName"
                                    onClick={(e) => handleChange(index,  qtdItem)}/>
                                </div>
                                <input 
                                    type="number" 
                                    name="quantidade" 
                                    placeholder='Informe a quantidade' 
                                    onChange={(e) => setQtdItem(e.target.value)}
                                 />    
                            </InfoInput>
                        </form>
                        
                    ))
                }
                
            </FormPedido>
            
        </Container>
    )

    
}