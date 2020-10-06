import React, {Component} from 'react'

import Card from './Card'
import './Navigate.css'

export default class Navigate extends Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.id}
    }

    proximo() {
        const id = ( this.state.id + 1 > 895 ) ? this.state.id : this.state.id+1;
        this.setState({id})
        this.props.setID(id)
    }

    anterior() {
        const id = (this.state.id - 1 < 1) ? this.state.id : this.state.id-1;
        this.setState({id})
        this.props.setID(id)
    }

    soma10() {
        const id = (this.state.id + 10 > 895) ? 895 : this.state.id+10
        this.setState({id})
        this.props.setID(id)
    }

    soma100() {
        const id = (this.state.id + 100 > 895) ? 895 : this.state.id+100
        this.setState({id})
        this.props.setID(id)
    }

    subtrai10() {
        const id = (this.state.id - 1 < 10) ? 1: this.state.id-10
        this.setState({id})
        this.props.setID(id)
    }

    subtrai100() {
        const id = (this.state.id - 100 < 1) ? 1 : this.state.id-100
        this.setState({id})
        this.props.setID(id)
    }

    render() {
        return (
            <div>
                <Card title='ID do Pokemon' blue>
                    <div className='navigate'>
                        <button className='btn btn-danger' onClick={() => this.subtrai100()}>Voltar 100 pokemons</button>
                        <button className='btn btn-danger' onClick={() => this.subtrai10()}>Voltar 10 pokemons</button>
                        <button className='btn btn-danger' onClick={() => this.anterior()}>Anterior</button>


                        <button className="btn btn-success" onClick={() => this.proximo()}>Próximo</button>
                        <button className="btn btn-success" onClick={() => this.soma10()}>Avançar 10 pokemons</button>
                        <button className="btn btn-success" onClick={() => this.soma100()}>Avançar 100 pokemons</button>
                        <input value={this.state.id} readOnly/>
                    </div>
                </Card>
            </div>
        )
    }
}