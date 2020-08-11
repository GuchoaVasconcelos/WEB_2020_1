import React, { Component } from 'react';
import Axios from 'axios'
export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '' }
        this.state = { curso: '' }
        this.state = { IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setIra(e) {
        this.setState({ IRA: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        /*console.log('Nome: ' + this.state.nome)
        console.log('Curso: ' + this.state.curso)
        console.log('IRA: ' + this.state.IRA)
        this.setState({nome: ''})
        this.setState({curso: ''})
        this.setState({IRA: ''})*/
        const novoEstudante = {
            nome: this.state.nome,
            curso: this.state.curso,
            IRA: this.state.IRA
        }
        Axios.post('http://localhost:3001/estudantes', novoEstudante)
            .then(
                (res) => { console.log('Estudante cadastrado com sucesso') }
            )
            .catch(
                (error) => {
                    console.log('Falha ao cadastrar novo estudante')
                }
            )
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar Estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" value={this.state.nome} onChange={this.setNome} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control" value={this.state.IRA} onChange={this.setIra} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}