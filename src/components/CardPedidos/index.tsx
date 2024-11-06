import { useEffect, useState } from 'react'
import { menuItens } from '../../types/types';
import { Link } from 'react-router-dom';
import { 
    Container,
    Content,
    FormPedido,
    DadosItem,
    InfoInput,
    BtnGerarPedido
} from './styles'


export function CardPedidos(iduser:string, name:string){
    const [cardItem, setCardItem] = useState<menuItens[]>([]);
    const [itemselecionado, setItemselecionado] = useState<boolean[]>([]);
    const [qtdItem, setQtdItem] = useState(0);

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
                setCardItem(data)
            })
        )
        .catch((err) => console.log(err))
    }, []);



    function handleChange(index: number, quantidade: number) {
        const selectedOption = cardItem[index];
        const updatedSelection = [...itemselecionado];
        updatedSelection[index] = !itemselecionado[index];
        setItemselecionado(updatedSelection);
        setQtdItem(quantidade)


        const valorTot = qtdItem * parseFloat(selectedOption.valor)
           

        if(qtdItem <= 0){          
            alert(`informe a quantidade desejada para o item ${selectedOption.nomeprato}`)
            
        } else {
            
            const newPedido = {
                    iduser: iduser,
                    name: name,
                    nomeprato: selectedOption ? selectedOption.nomeprato : null,
                    descricaoprato: selectedOption ? selectedOption.descricaoprato : null,
                    valor: selectedOption ? selectedOption.valor : null,
                    valorTot: valorTot,
                    quantidade: quantidade,
                    status: "Em análise"
                

            };

            alert(`Item ${selectedOption.nomeprato} adicionado a lista`)

            fetch('https://jsonserver.online/user/s74-PhQ-LOH/pedidos', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newPedido)
                })
                .then((resp) => resp.json())
                .then((data) => {console.log(data)})
                .catch((err) => console.log(err)) 

                setQtdItem(0)
            
        }                       
    }
  
    
    return (
        <Container>
            <Content>
                <h1>Pedidos</h1>
                <BtnGerarPedido>
                    <Link to="/pedidosGerados">
                        <input type="submit"  value="Ir para carrinho"  />
                    </Link>
                </BtnGerarPedido>

                <FormPedido>
                    {
                        cardItem.map((e,index) =>(
                                <form  key={index}>
                                    <DadosItem>
                                        <div>
                                            <h2>{e.nomeprato}</h2>
                                            <h4>{e.descricaoprato}</h4>
                                            <h3>R$ {e.valor}</h3>
                                        </div>
                                        <img src={e.foto}  />
                                    </DadosItem>
                                    <InfoInput >
                                        <div>
                                        <input 
                                            type="button"
                                            value="Adicionar ao carrinho"
                                            name="checkboxName"
                                            onClick={() => handleChange(index,  qtdItem)}/>
                                        </div>
                                        <input 
                                            type="number" 
                                            name="quantidade" 
                                            placeholder='Informe a quantidade' 
                                            onChange={(e) => setQtdItem(e.target.valueAsNumber)}
                                        />    
                                    </InfoInput>
                                </form>
                        ))
                    }
                </FormPedido>
            </Content>
          
            
        </Container>

        
    )

    
}