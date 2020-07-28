import React, { useState, useEffect } from 'react'

export default props => {

    let [votosFor, setVotosFor] = useState(0);
    let [votosQui, setVotosQui] = useState(0);
    let [votosLim, setVotosLim] = useState(0);
    let [votosJua, setVotosJua] = useState(0);
    let [maior, setMaior] = useState(0);;
    let [menor, setMenor] = useState(9999);;
    const cidadesStr = ['Fortaleza', 'Juazeiro', 'Limoeiro', 'Quixadá'];

    useEffect(() => {
        let localMaior = maior;


        const cidades = [votosFor, votosJua, votosLim, votosQui];

        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] > localMaior) {
                localMaior = cidades[i];
            }
        }

        let localMenor = localMaior;

        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] < localMenor) {
                localMenor = cidades[i];
            }
        }
        setMenor(localMenor);
        setMaior(localMaior);

    }, [votosFor, votosJua, votosLim, votosQui]


    )


    function maisVotadas() {
        let saida = '';
        const cidades = [votosFor, votosJua, votosLim, votosQui];
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === maior) {
                saida += cidadesStr[i];
            }
        }
        return saida;
    }

    function menosVotadas() {
        let saida = '';
        const cidades = [votosFor, votosJua, votosLim, votosQui];
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === menor) {
                saida += cidadesStr[i];
            }
        }
        return saida;
    }
    return (
        <div>
            <h1>Mais votada: {maior} : {maisVotadas()}</h1>
            <h1>Menos votada: {menor} : {menosVotadas()}</h1>
            <h1>Fortaleza: {votosFor}</h1>
            <h1>Quixadá: {votosQui}</h1>
            <h1>Limoeiro: {votosLim}</h1>
            <h1>Juazeiro: {votosJua}</h1>

            <button onClick={() => setVotosFor(votosFor + 1)}>Vote em Fortaleza</button>
            <button onClick={() => setVotosQui(votosQui + 1)}>Vote em Quixadá</button>
            <button onClick={() => setVotosLim(votosLim + 1)}>Vote em Limoeiro</button>
            <button onClick={() => setVotosJua(votosJua + 1)}>Vote em Juazeiro</button>
        </div>
    )
}