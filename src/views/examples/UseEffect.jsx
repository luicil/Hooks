import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function ePar(num){
    const n = parseFloat(num)
    if(n % 2 === 0) return "Par"
    return "Impar"
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState("Impar")

    useEffect(function () {
        setFatorial(calcFatorial(number))
        setStatus(ePar(number))
    }, [number])



    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #1" />
            <div className="Center">
                <div className="center">
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #2" />
            <div className="Center">
            <span className="text">Status: </span>
            <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
