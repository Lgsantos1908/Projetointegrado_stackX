import {
    Container,  
    Content,
    Dados,
    DadosSocial
}   from './styles';

import {CaretUp, InstagramLogo, FacebookLogo, LinkedinLogo} from '@phosphor-icons/react';

export function Footer() {

    const ScrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <Container>
            <Content>
                <Dados>
                    <h2>ENDEREÇO</h2>
                    <p>R. ********, n° **</p>

                    <h2>HORARIO DE FUNCIONAMENTO</h2>
                    <p>Terça-feira à Sabado - 11:30 as 15h | 19h às 23h</p>
                    <p>Domingo - 19h às 21h</p>

                    <h2>TELEFONE</h2>
                    <p>Telefone - (47) ****-****</p>
                    <p>Celular - (47) * ****-****</p>
                </Dados>

                <DadosSocial>
                    <h2>SOCIAL</h2>
                    <div>
                        <InstagramLogo size={30} />
                        <h3>Instragram</h3>
                    </div>
                    
                    <div>
                        <FacebookLogo size={30} />
                        <h3>FaceBook</h3>   
                    </div>
                    <div>
                        <LinkedinLogo size={30} />
                        <h3>Linkedin</h3>
                    </div>
                </DadosSocial>
                <CaretUp  size={26} weight='bold' color= 'black'  cursor="pointer" onClick={ScrollTop}/>
            </Content>
            
            <p><span>Capitão do Sabor </span> © 2024 Todos os direitos reservados  | Desenvolvido por <span> <a href="https://www.linkedin.com/in/luiz-gabriel-santos-183840238/" target='blanked'>Gabriel Santos</a></span></p>
        </Container>
    )
    
}
