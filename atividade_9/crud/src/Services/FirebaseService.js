export default class FirebaseService {
    static list = (firestore, callback) => {

        let ref = firestore.collection('disciplinas');
        ref.onSnapshot(
            (query) => {
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
                //callback
                callback(disciplinas)
            }
        )//onSnapshot


    }

    static delete = (firestore, callback, id) => {
        firestore.collection('disciplinas').doc(id).delete()
            .then(
                () => callback('ok')
            ).catch(
                error => callback(error)
            )
    }

    static create = (firestore, callback, disciplina) => {
        firestore.collection('disciplinas').add(
            {
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade
            }
        ).then(
            () => callback('ok')
        ).catch(
            error => console.log(error)
        )

    }

    static retrieve = (firestore, callback, id) => {
        firestore.collection('disciplinas').doc(id).get()
            .then(
                (doc) => {
                    callback(
                        {
                            nome: doc.data().nome,
                            curso: doc.data().curso,
                            capacidade: doc.data().capacidade
                        }
                    )
                }
            ).catch(
                (error) => console.log(null)
            )

    }

    static edit = (firestore,callback,disciplina,id) => {
        firestore.collection('disciplinas').doc(id).set(
            {
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade
            }
        )
            .then(
                callback('ok')
            ).catch(
                (error) => callback('not ok')
            )

    }
}