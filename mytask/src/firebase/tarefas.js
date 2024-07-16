// O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas:
// CRUD => Create, Read, Update e Delete
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)

import { addDoc, collection, getDocs, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore (essa linha é muito importante)
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado não é obtido de imediato
// Haverá uma "espera"
export async function addTarefa(data) {
    // Esas função se comunica com o firestone, envia os dados (data) e salva na coleção indicada
    await addDoc(tarefasCol, data);
    // await é uma instrução para esperar o resultado de addDoc
}

export async function getTarefas() {
    // Snapshot é o resultado da busca na coleção de tarefas
    const snapshot = await getDocs(tarefasCol); // puxa os documentos da coleção do Firebase
    const tarefas = []; //array vazio que vai inserir os obj na forma de obj e não de doc como vem do Firebase

    //Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach(doc => { //percorre esse snapshot, e para cada doc coloca nesse obj tarefas
        tarefas.push({...doc.data(), id: doc.id}) //usando spread, vai ter um novo array de objetos no formato que a gnt precisa
        // precisa colocar o trecho do id: doc.id porque ele não puxa automático o id do Firestore, porque não faz parte do documento, só tem no Firestore. Para depois manipular cada obj precisamos desse id exclusivo que cada um tem.
    });

    return tarefas; // precisa desse retorno para usar no Tarefas.jsx na const de useState
}

export async function deleteTarefa(id) { 
    // ( ) parâmetro que quer excluir, usaremos o id porque cada tarefa tem um id único
    const tarefaDoc = doc(tarefasCol, id); 
    // função doc precisa importar lá no começo do código, cria uma referência para um documento da coleção. Entre ( ) vai qual a coleção e o id desse documento.
    await deleteDoc(tarefaDoc);
    // importa lá no começo do código, entre ( ) o que você quer apagar, nesse caso será a const que criamos na linha acima (38)
}

export async function getTarefa(id) {
    const tarefaDoc = doc(tarefasCol, id); // Criar uma referência para um documento específico da coleção
    const snapshot = await getDoc(tarefaDoc) // Trazer as informações do documento
    // não esqueça de importar getDoc
    return snapshot.data(); // Retorna os dados dentro do documento (snapshot, porque é como se ele tirasse um printscreen, mas pode ser qualquer nome)    
}

export async function updateTarefa(id, data) { 
    // vai receber o id da tarefa que quer editar e o "data" que são os dados que vão vir do formulário
    const tarefaDoc = doc(tarefasCol, id); // esse documento já existe e vai referenciar
    await updateDoc (tarefaDoc, data) // vai atualizar o documento com os novos dados do formulário
    // não esquecer de importar o updateDoc
}
