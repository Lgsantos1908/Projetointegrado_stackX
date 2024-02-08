import { useEffect, useState } from "react";
import { users } from '../../types/types';
import { 
    Container,
    FormUser,
} from './styles'
import { Link } from "react-router-dom";


export function CardUser(){

    const [users, setUsers] = useState<users[]>([]);
    const [newUser, setNewUser] = useState ('');
    const [name, setName] = useState ('');
    const [password, setPassword] = useState ('');
    const [endereco, setEndereco] = useState ('');
    const [telefone, setTelefone] = useState ('');

    useEffect(()=> {
        fetch("https://jsonserver.online/user/s74-PhQ-LOH/users", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setUsers(data)
            })
        )
        .catch((err) => console.log(err))
    }, []);

    function handleUser() {
        const newUsers = {
            user: newUser,
            password: password,
            name: name,
            endereço:endereco,
            telefone: telefone,
        }

        fetch('https://jsonserver.online/user/s74-PhQ-LOH/users', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newUsers)
                })
                .then((resp) => resp.json())
                .then((data) => {console.log(data)})
                .catch((err) => console.log(err)) 

                setUsers([])
                setNewUser ('')
                setPassword ('')
                setName ('')
                setEndereco ('')
                setTelefone ('')

                alert("Usuario cadastrado com sucesso")

    }


    return(
        <Container>
            <h1>Cadastro</h1>
        <FormUser>
            <form>
                <h2>Login</h2>
                <input type="text" onChange={(e) => setNewUser(e.target.value)} />
                <h2>Senha</h2>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <h2>Nome</h2>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <h2>Endereço</h2>
                <input type="text" onChange={(e) => setEndereco(e.target.value)}/>
                <h2>Telefone</h2>
                <input type="text" onChange={(e) => setTelefone(e.target.value)}/>
                <Link to='/login'>
                    <input type="submit" value='Criar usuario' onClick={handleUser}/>
                </Link>
            </form>

        </FormUser>
        
    </Container>
    )

}