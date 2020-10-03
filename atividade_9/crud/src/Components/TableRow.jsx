import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import FirebaseService from '../Services/FirebaseService'


export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(id, nome) {
        let res = window.confirm(`Deseja apagar ${nome}, id: ${id}?`)
        if (res) {
            FirebaseService.delete(this.props.firebase.getFirestore(), (mensagem) => {
                if(mensagem ==='ok'){
                    console.log('deu bom')
                }
            }, id)
        }
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "end" }}>
                    <Link to={"/edit/" + this.props.disciplina._id} className="btn btn-primary" >Editar</Link >
                </td>
                <td style={{ textAlign: "initial" }}>
                    <button onClick={() => this.apagar(this.props.disciplina._id,
                        this.props.disciplina.nome)
                                    } className="btn btn-danger" >Apagar</button>
                </td>
            </tr>
        )
    }
}