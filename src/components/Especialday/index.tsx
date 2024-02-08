
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
                setSelectedLabel(principaispratos[nextIndex].id);
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
                    <div key={e.id} onClick={() => handleLabelClick(e.id)}>
                        <input type='radio' id={e.id} checked={selectedLabel === (e.id)} onChange={() => (e.id)}/>
                        <label htmlFor={e.id} style={{backgroundImage: `url(${e.foto})`}}>
                            <div >
                                <button>{e.id}</button>
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