import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const{number, text, setNumber} = useContext(AppContext)

    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício 1" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"
                        onClick={_ => addNumber(1)}>+1</button>
                    <button className="btn"
                        onClick={_ => addNumber(-1)}>-1</button>
                </div>
            </div>
            <SectionTitle title="Exercício 2" />
            <div className="center">
                <span className="text">
                    {text}
                </span>
                <span className="text">
                    {number}
                </span>
                <div>
                    <button className="btn"
                        onClick={_ => setNumber(number - 1)}>-1
                    </button>
                    <button className="btn"
                        onClick={_ => setNumber(number + 1)}>+1
                    </button>

                </div>
            </div>
        </div>
    )
}

export default UseContext
