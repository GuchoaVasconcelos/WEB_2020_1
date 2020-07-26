import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Filho extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Nome: {this.props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Curso: {this.props.course}</Card.Subtitle>
                        <Card.Text>
                            Cidade: {this.props.city}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export { Filho };