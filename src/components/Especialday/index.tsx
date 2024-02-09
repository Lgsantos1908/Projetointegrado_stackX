
import { useEffect, useState } from 'react';
import {
    Container,
    InfoFood,
    Description,
} from './styles'
import { prato } from '../../types/types';


export function Especialday(){

    const [selectedLabel, setSelectedLabel] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [principaispratos, setPrincipaisPratos] = useState<prato[]>([])

    useEffect(()=> {
        fetch("https://jsonserver.online/user/s74-PhQ-LOH/PrincipaisPratos", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setPrincipaisPratos(data)
            })
        )
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (principaispratos.length > 0) {
                const nextIndex = (currentIndex + 1) % principaispratos.length;
                setCurrentIndex(nextIndex);
                setSelectedLabel(principaispratos[nextIndex].idprato);
            }
        }, 7000);

        return () => clearInterval(intervalId);
    }, [currentIndex, principaispratos]);

    function handleLabelClick(labelId: string) {
        setSelectedLabel(labelId);
    }

    return (
        <Container>
            <InfoFood>
                {principaispratos.map((e,) => (
                    <div key={e.idprato} onClick={() => handleLabelClick(e.idprato)}>
                        <input type='radio' id={e.idprato} checked={selectedLabel === (e.idprato)} onChange={() => (e.idprato)}/>
                        <label htmlFor={e.idprato} style={{backgroundImage: `url(${e.foto})`}}>
                            <div >
                                <button>{e.idprato}</button>
                                <Description>
                                    <h4>{e.nome}</h4>
                                    <p>{e.descricao}</p>
                                </Description>
                            </div>
                        </label>
                    </div>
                ))}
                
            </InfoFood>
        </Container>
    )
    
    
}