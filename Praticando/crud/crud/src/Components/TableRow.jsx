import React from 'react'
import { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(){
        axios.delete('http://localhost:3001/estudantes/'+this.props.estudante.id)
        .then(
            (res) =>{
                console.log('Registro Apagado')
                this.props.apagarElementoPorId(this.props.estudante.id)
            }
        )
        .catch(
            (error) =>{
                console.log(error)
            }
        )
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.estudante.id}
                </td>
                <td>
                    {this.props.estudante.nome}
                </td>
                <td>
                    {this.props.estudante.curso}
                </td>
                <td>
                    {this.props.estudante.IRA}
                </td>
                <td style={{ textAlign: "end" }}>
                    <Link to={"/edit/"+this.props.estudante.id} className="btn btn-primary" >Editar</Link >
                </td>
                <td style={{ textAlign: "initial" }}>
                    <button onClick={this.apagar} className="btn btn-danger" >Apagar</button>
                </td>
            </tr>
        )
    }
}