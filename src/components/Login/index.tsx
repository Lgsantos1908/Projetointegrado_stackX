import { useEffect, useState } from "react";
import { users } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { 
    Container,
    FormUser,
    SaveButton,
} from './styles';
import { CardPedidos } from "../CardPedidos";

export function Login() {
    const [userData, setUserData] = useState<users[]>([]);
    const [confirmLogin, setConfirmLogin] = useState ();
    const [userLogin, setUserLogin] = useState();
    const [password, setPassword] = useState();
    const [idlogin, setIdLogin] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(
                (resp) => resp.json()
                    .then((data) => {
                        setUserData(data);
                    })
            )
            .catch((err) => console.log(err))
    }, []);

    function redirect(){
        navigate('/cardUser');
           alert("Direcionando para Cadastro")
    }


    function registrar() {

        

        const name = userData.filter((e) => e.user === userLogin);
        const senha = name.filter((e) => e.password === password);

        const id = name.map(e => e.id)

        if (name.length > 0) {
            if(senha.length > 0) {
                const data = {
                    userLogin,password,  id 
                }

                setUserLogin(data.userLogin)
                setPassword(data.password)
                setIdLogin(id)                

                setConfirmLogin('ok')

                alert("Cadastro Realizado!");

                
            } else {
                alert("Senha incorreta!");
            }
        } else {
            alert("Usuário incorreto!");
        }
    }

    return (
        <Container>
            
                {
                    confirmLogin ? (
                        <CardPedidos 
                        iduser={idlogin}
                        name={userLogin}
                        password={password} />
                       
                    ):(
                        
                        <FormUser>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <form>
                                <h2>Login</h2>
                                <input type="text" onChange={(e) => setUserLogin(e.target.value)} />
                                <h2>Senha</h2>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                                <h2>Fazer login</h2>
                                <input type="button" value='Registrar' onClick={(e) => registrar(userData.id)} />

                                
                                <SaveButton>
                                    <h2>Realizar Login</h2>
                                    <input type="checkbox" onClick={redirect} />
                                </SaveButton>
                            </form>
                        </FormUser>
                        
                    )
                }
                
        </Container>
    );
}
