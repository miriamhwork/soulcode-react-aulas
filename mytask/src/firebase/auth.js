// O objetivo deste arquivo é ter todas as funções relacionadas a autenticação
// - criar usuario com email/senha/nome
// - entrar com google
// - entrar com email/senha
// - logout

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
    // Indicamos o serviço de autenticação e o email e senha do novo usuário
    // 'user' é um objeto com informações do usuário autenticado
    const { user } = await createUserWithEmailAndPassword(auth, email, senha); // isso já cria um usuario novo
    // define o nome de exibição como o nome vindo do formulário de cadastro
    await updateProfile(user, {displayName: nome});  
    // dessa forma, quando o usuário se cadastrar, o nome que ele colocou no formulário não iremos perder
}

export async function entrarGoogle() {
    // Indicar qual o provedor de login será usado
    const provider = new GoogleAuthProvider(); // não esquecer de importar
    // provider = fornecedor
    await signInWithPopup(auth, provider); // abre um pop-up na tela com o login do google
}

export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha); // não esquecer de importar
}