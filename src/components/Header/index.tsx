
import {
    MenuInicial,
    ImageLogo,
    Delivery,
    
}   from './styles';

import imgLogo from '../../assets/images/capitão.jpg'
import barcoicon from '../../assets/icons/barco.png'
import { Link } from 'react-router-dom';

export function Header(){
    
    return(
        <MenuInicial >
            <div>
            
                <ImageLogo src={imgLogo}/>
                <h1>Capitão do sabor</h1>
            </div>
            <ul>
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/menu">Cardápio</Link></li>
                <li><Link to="/pedidosGerados">Meus pedidos</Link></li>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Delivery>
                        <img src={barcoicon} />
                        <p>Faça seu pedido</p>
                    </Delivery>
                </Link>
            </ul>

            
        </MenuInicial>   
    )
}

export default Header