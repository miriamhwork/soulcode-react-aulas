// O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas:
// CRUD => Create, Read, Update e Delete
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)

import { addDoc, collection, getDocs } from "firebase/firestore";
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