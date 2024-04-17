import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../services/firebaseConfig'; // Importe o objeto 'app' inicializado do seu arquivo firebaseConfig.js

// Método para autenticar o usuário
const authenticateUser = async (email, password) => {
  try {
    // Obtenha a instância de autenticação do Firebase
    const auth = getAuth(app);
    
    // Faça a tentativa de autenticação do usuário com e-mail e senha
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Se a autenticação for bem-sucedida, retorne os detalhes do usuário autenticado
    return userCredential.user;
  } catch (error) {
    alert('Erro ao acessar, verifique seus dados!')
    throw error;
  }
};

export default authenticateUser;