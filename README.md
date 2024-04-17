# projetoFatec
Projeto Mobile para disciplina de Desenvolvimento de Dispositivos Móveis da FATEC-ID.

Listando as rotas da API e as funções do Firebase que o aplicativo está utilizando ou planeja utilizar:

# IBGE API para Estados e Cidades:

Descrição: O aplicativo utiliza a API do IBGE para obter a lista de estados e cidades do Brasil.

Rotas Utilizadas: § https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome: Esta rota é utilizada para obter a lista de estados ordenada por nome. § https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios: Esta rota é utilizada para obter a lista de municípios de um determinado estado, onde {UF} é substituído pela sigla do estado.

# Firebase Authentication para Autenticação de Usuários:

Descrição: O aplicativo utiliza o Firebase Authentication para autenticar os usuários, permitindo que eles acessem recursos protegidos e personalizem sua experiência no aplicativo.

§ Recursos Utilizados:

§ Login com e-mail e senha: Os usuários podem criar contas e fazer login usando seus endereços de e-mail e senhas.

§ Recuperação de senha: Os usuários têm a opção de redefinir suas senhas se as esquecerem.

§ Funções e Rotas Envolvidas:

§ createUserWithEmailAndPassword(email, password): Função para criar uma nova conta de usuário com um endereço de e-mail e uma senha.

§ signInWithEmailAndPassword(email, password): Função para fazer login com um endereço de e-mail e uma senha.

§ sendPasswordResetEmail(email): Função para enviar um e-mail para redefinir a senha de um usuário.

§ Rotas internas do Firebase para autenticação e gerenciamento de usuários.

# Firebase Firestore para Busca de Anfitriões:

Descrição: O aplicativo utiliza o Firebase Firestore para buscar anfitriões com base em critérios como estado, cidade e tipo de serviço.

§ Funções Utilizadas:

o collection(): Função para acessar uma coleção no Firestore.

o query(): Função para realizar consultas no Firestore.

o where(): Função para filtrar documentos com base em determinados critérios.

o getDocs(): Função para obter os documentos que correspondem à consulta.

o doc(): Função para referenciar um documento específico no Firestore.

o getDoc(): Função para obter um único documento do Firestore.

# AsyncStorage para Armazenamento Local:

Descrição: O aplicativo utiliza AsyncStorage para armazenar localmente as seleções do usuário, como estado e cidade.

§ Funções Utilizadas:

o getItem(): Função para recuperar um item do armazenamento local.

o setItem(): Função para definir um item no armazenamento local.
