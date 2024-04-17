import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

const buscarAnfitrioesComValores = async (estado, cidade, tipoServico) => {
    try {
        // Array para armazenar os anfitriões com seus valores
        const anfitrioesComValores = [];

        // Consulta para buscar os anfitriões com base no estado e cidade
        const anfitrioesQuery = query(collection(db, "anfitriao"), where("estado", "==", estado), where("cidade", "==", cidade));
        const anfitrioesSnapshot = await getDocs(anfitrioesQuery);

        // Iterar sobre os documentos de anfitriões encontrados
        for (const anfitriaoDoc of anfitrioesSnapshot.docs) {
            const anfitriaoData = anfitriaoDoc.data();
            const anfitriaoID = anfitriaoDoc.id;

            // Consulta para obter os valores específicos do tipo de serviço na subcoleção 'valores'
            const valoresDocRef = doc(db, `anfitriao/${anfitriaoID}/valores`, tipoServico);
            const valoresDocSnapshot = await getDoc(valoresDocRef);

            // Verificar se o documento de valores existe e se possui os campos necessários
            if (valoresDocSnapshot.exists()) {
                const valorServico = valoresDocSnapshot.data()[tipoServico];
                
                // Criar objeto com os dados do anfitrião e o valor do serviço
                const anfitriaoComValores = {
                    id: anfitriaoID,
                    nome: anfitriaoData.nome,
                    valor: valorServico
                };

                // Adicionar o anfitrião com seus valores ao array
                anfitrioesComValores.push(anfitriaoComValores);
            }
        }

        return anfitrioesComValores;
    } catch (error) {
        throw error;
    }
};

export default buscarAnfitrioesComValores;