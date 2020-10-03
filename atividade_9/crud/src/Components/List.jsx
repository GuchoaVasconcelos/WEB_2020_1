import React, { Component } from 'react';
import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../Services/FirebaseService'

const ListPage = () =>
    <FirebaseContext.Consumer>{
        contexto => <List firebase={contexto} />
    }
    </FirebaseContext.Consumer>


class List extends Component {
    isMounted = false;
    constructor(props) {
        super(props)
        this.state = { disciplinas: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ loading: true });
        //this.ref = this.props.firebase.getFirestore().collection('disciplinas');
        //this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))

        FirebaseService.list(this.props.firebase.getFirestore(), (disciplinas)=>{
            if(disciplinas){
                if(this._isMounted){
                    this.setState({disciplinas: disciplinas, loading:false});
                }
            }
        })

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /*alimentarDisciplinas(query) {
        let disciplinas = [];
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data();
                disciplinas.push({
                    _id: doc.id,
                    nome,
                    curso,
                    capacidade,
                }
                )//push
            }//doc
        )//foreach
        if (this._isMounted) {
            this.setState({ disciplinas: disciplinas, loading: false })
        }
    }*/

    montarTabela() {
        if (!this.state.disciplinas) {
            return
        } else {
            return this.state.disciplinas.map((disciplina, i) => {
                return <TableRow disciplina={disciplina} key={i} firebase={this.props.firebase} />
            }
            )
        }
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (<tr>
                <td colSpan='6' style={{ textAlign: "center" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </td>
            </tr>
            )
        } else {
            return this.montarTabela()
        }
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <p>Listar disciplinas</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Nome </th>
                            <th>Curso </th>
                            <th>Capacidade </th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage;