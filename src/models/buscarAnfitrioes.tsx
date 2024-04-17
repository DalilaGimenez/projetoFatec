import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

const buscarAnfitrioes = async (estado, cidade, tipoServico) => {
    try {
        // Consulta para buscar anfitriões com o tipo de serviço específico, no estado e cidade específicos
        const anfitrioesQuery = query(collection(db, "anfitriao"), 
            where("estado", "==", estado),
            where("cidade", "==", cidade),
            where(tipoServico, "==", true)
        );

        const querySnapshot = await getDocs(anfitrioesQuery);

        // Array para armazenar os resultados
        const anfitrioes = [];

        // Iterar sobre os documentos encontrados
        for (const docRef of querySnapshot.docs) {
            const anfitriaoData = docRef.data();

            // Buscar dados da subcoleção "valores" para o tipo de serviço específico
            const valoresRef = doc(db, "anfitriao", docRef.id, "valores");
            const valoresDoc = await getDoc(valoresRef);
            const valoresData = valoresDoc.data();

            // Construir objeto de anfitrião com dados da coleção e subcoleção
            const anfitriao = {
                id: docRef.id, // ID do documento
                nome: anfitriaoData.nome, // Nome do anfitrião
                valor: valoresData[tipoServico] // Valor do serviço específico
            };

            anfitrioes.push(anfitriao);
        }

        return anfitrioes;
    } catch (error) {
        throw error;
    }
};

export default buscarAnfitrioes;