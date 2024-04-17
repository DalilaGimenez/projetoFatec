import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../services/firebaseConfig'; // Importe o objeto 'app' inicializado do seu arquivo firebaseConfig.js

// Método para cadastrar um novo usuário
const authenticateNewUser = async (email, password) => {
  try {
    // Obtenha a instância de autenticação do Firebase
    const auth = getAuth(app);
    
    // Faça a tentativa de criar um novo usuário com e-mail e senha
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Se o cadastro for bem-sucedido, retorne os detalhes do usuário cadastrado
    return userCredential.user;
  } catch (error) {
    alert('Erro ao cadastrar usuário. Verifique seus dados e tente novamente.')
    throw error;
  }
};

export default authenticateNewUser;